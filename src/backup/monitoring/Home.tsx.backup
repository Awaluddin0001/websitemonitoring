import styles from "@/css/module/Home.module.css";
import CardValue from "@/components/card/CardValue";
import { useEffect, useState } from "react";
import HeadPage from "@/components/header/HeadPageMonitoring";
import TrendGrafic from "@/components/grafic/TendGrafic";
import DonutChart from "@/components/grafic/DonutChart";
import useMonitoringFetchData from "@/hooks/useMonitoringFetchData";
import moment from "moment-timezone";
import HomeModal from "@/components/modal/HomeModal";
import CardParameterHome from "@/components/card/CardParameterHome";
import question from "@/assets/png/question.png";
import LoadingPage from "@/components/loading/LoadingPage";
import MonitoringDown from "@/components/error/MonitoringDown";

type DataGrafikPower = {
  date: Date;
  value: number;
};

type BbmTangki = {
  name: string;
  value: unknown;
};
type ThermalRoomDetail = {
  room: string;
  value: {
    temperature: number;
    humidity: number;
    name: string;
  };
};

const formatNumberIndonesian = (num: number): string => {
  return new Intl.NumberFormat("id-ID").format(num);
};

// React component
export default function Home() {
  const [pueData, setPueData] = useState<{ timestamp: string; value: number }>({
    timestamp: "",
    value: 0,
  });
  const [itLoad, setItLoad] = useState<{ timestamp: string; value: number }>({
    timestamp: "",
    value: 0,
  });
  const [facilityLoad, setFacilityLoad] = useState<{
    timestamp: string;
    value: number;
  }>({ timestamp: "", value: 0 });
  const [pueDataGraf, setPueDataGraf] = useState<
    DataGrafikPower[] | undefined
  >();
  const [itLoadGraf, setItLoadGraf] = useState<DataGrafikPower[] | undefined>();
  const [facilityLoadGraf, setFacilityLoadGraf] = useState<
    DataGrafikPower[] | undefined
  >();

  const [bbmData, setBbmData] = useState<BbmTangki[] | undefined>();
  const [thermalLt1, setThermalLt1] = useState<
    ThermalRoomDetail[] | undefined
  >();
  const [thermalLt2, setThermalLt2] = useState<
    ThermalRoomDetail[] | undefined
  >();
  const [thermalLt3, setThermalLt3] = useState<
    ThermalRoomDetail[] | undefined
  >();
  const [thermalLt4, setThermalLt4] = useState<
    ThermalRoomDetail[] | undefined
  >();

  const { data, loading, error } = useMonitoringFetchData(
    "/api/v1/monitoring/bbmthermalpower"
  );

  const [modalController, setModalController] = useState(false);

  useEffect(() => {
    const transformObjectThermal = (obj: any) => {
      let { success, ...others } = obj;
      if (success === "") {
        success = false;
      }
      if (success) {
        if (others.data.length > 0) {
          const lastData = others.data[others.data.length - 1];
          const { timestamp, connected, ...thermalRoom } = lastData;
          const thermal = Object.entries(thermalRoom).map(([key, value]) => {
            return { room: key, value: value };
          });
          // return { thermal };
          const getBaseName = (name: string) => name.replace(/ [A-Z]$/, "");

          const groupedByPrefix = thermal.reduce(
            (acc: any, { room, value }: any) => {
              const roomPrefix = room.slice(0, 3);
              const prefixMapping: { [key: string]: string } = {
                RO1: "Lantai1",
                RO2: "Lantai2",
                RO3: "Lantai3",
                RO4: "Lantai4",
              };

              const mappedPrefix = prefixMapping[roomPrefix] || roomPrefix;

              if (!acc[mappedPrefix]) {
                acc[mappedPrefix] = [];
              }

              acc[mappedPrefix].push({ room, value });

              return acc;
            },
            {}
          );
          const combinedData = Object.keys(groupedByPrefix).reduce(
            (acc: any, prefix: string) => {
              const rooms = groupedByPrefix[prefix];
              const combinedRooms: any = {};

              rooms.forEach(({ value }: any) => {
                const { name, temperature, humidity } = value;
                const baseName = getBaseName(name);

                if (!combinedRooms[baseName]) {
                  combinedRooms[baseName] = {
                    temperature: 0,
                    humidity: 0,
                    count: 0,
                  };
                }

                combinedRooms[baseName].temperature += temperature;
                combinedRooms[baseName].humidity += humidity;
                combinedRooms[baseName].count += 1;
              });

              const averagedRooms = Object.keys(combinedRooms).map((name) => {
                const { temperature, humidity, count } = combinedRooms[name];
                return {
                  room: name,
                  value: {
                    temperature:
                      temperature / count === 0
                        ? 0
                        : (temperature / count).toFixed(2),
                    humidity:
                      humidity / count === 0
                        ? 0
                        : (humidity / count).toFixed(2),
                    name,
                  },
                };
              });

              acc[prefix] = averagedRooms;
              return acc;
            },
            {}
          );
          setThermalLt1(combinedData.Lantai1);
          setThermalLt2(combinedData.Lantai2);
          setThermalLt3(combinedData.Lantai3);
          setThermalLt4(combinedData.Lantai4);
        }
      }
    };

    const lastBbmVal = (arr: any) => {
      const lastData = arr[arr.length - 1];
      const insertSpace = (input: any) => {
        const words = ["tangki", "cadangan", "harian", "bulanan", "a", "b"];
        const regex = new RegExp(`(${words.join("|")})`, "g");

        return input.replace(regex, " $1").trim();
      };
      if (lastData.connected) {
        const { connected, timestamp, __v, _id, ...others } = lastData;
        const bbm = Object.entries(others).map(([key, value]) => {
          return { name: insertSpace(key), value: value };
        });
        const combineAndAverageTanks = (tankData: any[]) => {
          // Fungsi untuk mendapatkan nama dasar dari tangki
          const getBaseName = (name: string) => name.replace(/ [a-z]$/i, "");

          // Mengelompokkan data berdasarkan nama dasar (misalnya "tangki harian" atau "tangki bulanan")
          const groupedTanks = tankData.reduce(
            (acc: any, { name, value }: any) => {
              const baseName = getBaseName(name);

              if (!acc[baseName]) {
                acc[baseName] = {
                  totalVolume: 0,
                  totalLevel: 0,
                  count: 0,
                };
              }

              // Menambahkan volume dan level untuk tangki yang memiliki nama dasar yang sama
              acc[baseName].totalVolume += value.volume;
              acc[baseName].totalLevel += value.level;
              acc[baseName].count += 1;

              return acc;
            },
            {}
          );

          // Menghitung rata-rata volume dan level untuk setiap grup tangki
          const averagedTanks = Object.keys(groupedTanks).map((baseName) => {
            const { totalVolume, totalLevel, count } = groupedTanks[baseName];
            return {
              name: baseName,
              value: {
                volume: totalVolume / count,
                level: totalLevel / count,
              },
            };
          });

          return averagedTanks;
        };
        const tanks = combineAndAverageTanks(bbm);
        return { tanks };
      }
    };

    const lasttValueArrPower:
      | {
          timestamp: string;
          pue: { value: number };
          itload: { value: number };
          facilityload: { value: number };
        }
      | any = (arr: any) => {
      return arr[arr.length - 1];
    };

    const returnValuePue = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timeStamp as string),
        value: Number(item.pue.value.toFixed(2)),
      }));
    };
    const returnValueFL = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timeStamp as string),
        value: Number(item.facilityload.value.toFixed(2)),
      }));
    };
    const returnValueIL = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timeStamp as string),
        // date: item.timeStamp,
        value: Number(item.itload.value.toFixed(2)),
      }));
    };
    if (data) {
      if (data.result) {
        transformObjectThermal(data.result.thermalData);

        if (data.result.bbmData.data.length > 0) {
          const lastBbmData = lastBbmVal(data.result.bbmData.data);
          setBbmData(lastBbmData?.tanks);
        }

        if (data.result.powerData.length > 0) {
          const powerLastUpdate = lasttValueArrPower(data.result.powerData);
          const trenPue = returnValuePue(data.result.powerData);
          const trenFL = returnValueFL(data.result.powerData);
          const trenIL = returnValueIL(data.result.powerData);
          if (powerLastUpdate) {
            setPueData({
              timestamp: moment(powerLastUpdate?.timeStamp).format(
                "D MMMM YYYY"
              ),
              value: powerLastUpdate?.pue.value,
            });
            setItLoad({
              timestamp: moment(powerLastUpdate?.timeStamp).format(
                "D MMMM YYYY"
              ),
              value: powerLastUpdate?.itload.value,
            });
            setFacilityLoad({
              timestamp: moment(powerLastUpdate?.timeStamp).format(
                "D MMMM YYYY"
              ),
              value: powerLastUpdate?.facilityload.value,
            });
          }
          setFacilityLoadGraf(trenFL);
          setPueDataGraf(trenPue);
          setItLoadGraf(trenIL);
        }
      }
    }
  }, [data]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <>
        <HeadPage title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
        <MonitoringDown />
      </>
    );

  return (
    <>
      <HeadPage title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
      <HomeModal
        display={modalController}
        action={setModalController}
        children={<CardParameterHome />}
      />
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHome}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <h1>
              Thermal Building Information - Last Updated {data.lastUpdate}
            </h1>
            <img
              src={question}
              alt="question image"
              onClick={() => setModalController(true)}
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            />
          </div>
          <div className={styles.containerValueCard}>
            <div className={styles.groupFloorValueCard}>
              <p className={styles.groupFloorValueCardTitle}>Lantai 1</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {thermalLt1 &&
                  thermalLt1.length > 0 &&
                  thermalLt1.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.temperature !== 0
                            ? `${item.value.temperature}°C`
                            : "N/A"
                        }
                        cardColor={
                          item.value.temperature === 0
                            ? "#ddd"
                            : item.value.temperature < 18
                            ? "#0ECBC0"
                            : item.value.temperature > 17 &&
                              item.value.temperature < 24
                            ? "#56CB0E"
                            : item.value.temperature > 23 &&
                              item.value.temperature < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Temperature"
                      />
                    );
                  })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                {thermalLt1 &&
                  thermalLt1.length > 0 &&
                  thermalLt1.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.humidity !== 0
                            ? `${item.value.humidity} %`
                            : "N/A"
                        }
                        cardColor={
                          item.value.humidity === 0
                            ? "#ddd"
                            : item.value.humidity < 18
                            ? "#0ECBC0"
                            : item.value.humidity > 17 &&
                              item.value.humidity < 24
                            ? "#56CB0E"
                            : item.value.humidity > 23 &&
                              item.value.humidity < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Humidity"
                      />
                    );
                  })}
              </div>
            </div>
            <div className={styles.groupFloorValueCard}>
              <p className={styles.groupFloorValueCardTitle}>Lantai 2</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {thermalLt2 &&
                  thermalLt2.length > 0 &&
                  thermalLt2.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.temperature !== 0
                            ? `${item.value.temperature}°C`
                            : "N/A"
                        }
                        cardColor={
                          item.value.temperature === 0
                            ? "#ddd"
                            : item.value.temperature < 18
                            ? "#0ECBC0"
                            : item.value.temperature > 17 &&
                              item.value.temperature < 24
                            ? "#56CB0E"
                            : item.value.temperature > 23 &&
                              item.value.temperature < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Temperature"
                      />
                    );
                  })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                {thermalLt2 &&
                  thermalLt2.length > 0 &&
                  thermalLt2.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.humidity !== 0
                            ? `${item.value.humidity} %`
                            : "N/A"
                        }
                        cardColor={
                          item.value.humidity === 0
                            ? "#ddd"
                            : item.value.humidity < 18
                            ? "#0ECBC0"
                            : item.value.humidity > 17 &&
                              item.value.humidity < 24
                            ? "#56CB0E"
                            : item.value.humidity > 23 &&
                              item.value.humidity < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Humidity"
                      />
                    );
                  })}
              </div>
            </div>
            <div className={styles.groupFloorValueCard}>
              <p className={styles.groupFloorValueCardTitle}>Lantai 3</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {thermalLt3 &&
                  thermalLt3.length > 0 &&
                  thermalLt3.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.temperature !== 0
                            ? `${item.value.temperature}°C`
                            : "N/A"
                        }
                        cardColor={
                          item.value.temperature === 0
                            ? "#ddd"
                            : item.value.temperature < 18
                            ? "#0ECBC0"
                            : item.value.temperature > 17 &&
                              item.value.temperature < 24
                            ? "#56CB0E"
                            : item.value.temperature > 23 &&
                              item.value.temperature < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Temperature"
                      />
                    );
                  })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                {thermalLt3 &&
                  thermalLt3.length > 0 &&
                  thermalLt3.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.humidity !== 0
                            ? `${item.value.humidity} %`
                            : "N/A"
                        }
                        cardColor={
                          item.value.humidity === 0
                            ? "#ddd"
                            : item.value.humidity < 18
                            ? "#0ECBC0"
                            : item.value.humidity > 17 &&
                              item.value.humidity < 24
                            ? "#56CB0E"
                            : item.value.humidity > 23 &&
                              item.value.humidity < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Humidity"
                      />
                    );
                  })}
              </div>
            </div>
            <div className={styles.groupFloorValueCard}>
              <p className={styles.groupFloorValueCardTitle}>Lantai 4</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {thermalLt4 &&
                  thermalLt4.length > 0 &&
                  thermalLt4.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.temperature !== 0
                            ? `${item.value.temperature}°C`
                            : "N/A"
                        }
                        cardColor={
                          item.value.temperature === 0
                            ? "#ddd"
                            : item.value.temperature < 18
                            ? "#0ECBC0"
                            : item.value.temperature > 17 &&
                              item.value.temperature < 24
                            ? "#56CB0E"
                            : item.value.temperature > 23 &&
                              item.value.temperature < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Temperature"
                      />
                    );
                  })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                {thermalLt4 &&
                  thermalLt4.length > 0 &&
                  thermalLt4.map((item: ThermalRoomDetail | any, index) => {
                    return (
                      <CardValue
                        key={index}
                        title={`Ruangan ${item.value.name}`}
                        value={
                          item.value.humidity !== 0
                            ? `${item.value.humidity} %`
                            : "N/A"
                        }
                        cardColor={
                          item.value.humidity === 0
                            ? "#ddd"
                            : item.value.humidity < 18
                            ? "#0ECBC0"
                            : item.value.humidity > 17 &&
                              item.value.humidity < 24
                            ? "#56CB0E"
                            : item.value.humidity > 23 &&
                              item.value.humidity < 30
                            ? "#0eaacb"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                        tip="Humidity"
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionHomeBottom}>
          <div className={styles.sectionHome}>
            <h1>Power Usage Effectiveness - Last Updated {data.lastUpdate}</h1>

            <div className={styles.containerValue}>
              {pueData && (
                <div className={styles.cardSectionValuePue}>
                  <CardValue
                    title={`PUE - ${pueData.timestamp}`}
                    value={pueData.value.toFixed(2)}
                    cardColor={
                      pueData.value < 1.5
                        ? "#56CB0E"
                        : pueData.value < 2.0
                        ? "#0eaacb"
                        : "#CB300E"
                    }
                    valueColor="#fff"
                    width="17rem"
                    height="14rem"
                  />
                </div>
              )}

              {pueDataGraf && (
                <TrendGrafic
                  data={pueDataGraf}
                  heightGrafic={140}
                  lineColor={
                    pueData.value < 1.5
                      ? "#56CB0E"
                      : pueData.value < 2.0
                      ? // ? "#0eaacb"
                        "#0eaacb"
                      : "#CB300E"
                  }
                  pointColor="#000"
                  label="Data PUE - 24 Jam"
                  fontSize="14px"
                  unit=" "
                  mode="24hour"
                  positionLabel={116}
                  setValue={setPueData}
                  // backgroundColor={
                  //   pueData.value < 1.5
                  //     ? "rgb(45 87 0)"
                  //     : pueData.value < 2.0
                  //     ? "rgb(87 85 0)"
                  //     : "rgb(87 17 0)"
                  // }
                  backgroundColor="#fff"
                  stroke="#000"
                />
              )}
            </div>

            <div className={styles.containerValue}>
              {facilityLoad && (
                <div className={styles.cardSectionValuePue}>
                  <CardValue
                    title={`Facility Load - ${facilityLoad.timestamp}`}
                    value={
                      facilityLoad
                        ? `${facilityLoad.value.toFixed(2)} kVa`
                        : "0"
                    }
                    cardColor="#0ECBC0"
                    valueColor="#fff"
                    width="17rem"
                    height="14rem"
                  />
                </div>
              )}

              {facilityLoadGraf && (
                <TrendGrafic
                  data={facilityLoadGraf}
                  heightGrafic={140}
                  lineColor="#0ECBC0"
                  pointColor="#000"
                  label="Data Facility Load - 24 Jam"
                  fontSize="14px"
                  unit=" kVa"
                  mode="24hour"
                  positionLabel={161}
                  setValue={setFacilityLoad}
                  // backgroundColor="rgb(0 70 87)"
                  backgroundColor="#fff"
                  stroke="#000"
                />
              )}
            </div>
            <div className={styles.containerValue}>
              {itLoad && (
                <div className={styles.cardSectionValuePue}>
                  <CardValue
                    title={`IT Load - ${itLoad.timestamp}`}
                    value={itLoad ? `${itLoad.value.toFixed(2)} kVa` : "0"}
                    cardColor="#0ECBC0"
                    valueColor="#fff"
                    width="17rem"
                    height="14rem"
                  />
                </div>
              )}

              {itLoadGraf && (
                <TrendGrafic
                  data={itLoadGraf}
                  heightGrafic={140}
                  lineColor="#0ECBC0"
                  pointColor="#000"
                  label="Data IT Load - 24 Jam"
                  fontSize="14px"
                  unit=" kVa"
                  mode="24hour"
                  positionLabel={132}
                  setValue={setItLoad}
                  // backgroundColor="rgb(0 70 87)"
                  backgroundColor="#fff"
                  stroke="#000"
                />
              )}
            </div>
          </div>
          <div className={styles.sectionHome} style={{ height: "100%" }}>
            <h1>BBM Usage Information - Last Updated {data.lastUpdate}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                gap: "21px",
              }}
            >
              {bbmData &&
                bbmData.map((item: any, index: number) => {
                  const usage = ((12000 - item.value.volume) / 12000) * 100;
                  const free = (item.value.volume / 12000) * 100;
                  return (
                    <DonutChart
                      key={index}
                      data={[
                        {
                          label: `Tersisa: ${formatNumberIndonesian(
                            item.value.volume.toFixed(0)
                          )} liter`,
                          value: free,
                        },
                        {
                          label: `Terpakai: ${formatNumberIndonesian(
                            12000 - item.value.volume.toFixed(0)
                          )} liter`,
                          value: usage,
                        },
                      ]}
                      title={`${item.name}`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
