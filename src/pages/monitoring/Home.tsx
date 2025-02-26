import styles from "@/css/module/Home.module.css";
import { useEffect, useState } from "react";
import HeadPage from "@/components/header/HeadPageMonitoring";
import TrendGrafic from "@/components/grafic/TendGrafic";
// import DonutChart from "@/components/grafic/DonutChart";
import useMonitoringFetchData from "@/hooks/useMonitoringFetchData";
import moment from "moment-timezone";
import HomeModal from "@/components/modal/HomeModal";
import CardParameterHome from "@/components/card/CardParameterHome";
import question from "@/assets/png/question.png";
import LoadingPage from "@/components/loading/LoadingPage";
import MonitoringDown from "@/components/error/MonitoringDown";
import { useNavigate } from "react-router-dom";
import FuelGauge from "@/components/grafic/FuelGauge";
import CardValueHomePower from "@/components/card/CardValueHomePower";
import CardValueHomeThermal from "@/components/card/CardValueHomeThermal";
import axios from "axios";
import CardValueHomeBMKG from "@/components/card/CardValueHomeBMKG";

type DataGrafikPower = {
  date: Date;
  value: number;
};

type BbmTangki = {
  value: {
    volume: number;
    level: number;
  };
  name: string;
};
type ThermalRoomDetail = {
  room: string;
  value: {
    temperature: number;
    humidity: number;
    name: string;
  };
};

// const formatNumberIndonesian = (num: number): string => {
//   return new Intl.NumberFormat("id-ID").format(num);
// };

// React component
export default function Home() {
  const navigate = useNavigate();
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

  const [pln1Load, setPln1Load] = useState<number>(0);

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
  const [thermalPacLt1, setThermalPacLt1] = useState<any>();
  const [thermalPacLt2, setThermalPacLt2] = useState<any>();
  const [thermalPacLt3, setThermalPacLt3] = useState<any>();
  const [thermalPacLt4, setThermalPacLt4] = useState<any>();

  const [isPac, setIsPac] = useState(false);

  const { data, loading, error } = useMonitoringFetchData(
    // "http://192.168.1.62:2041/api/v1/eventbus/bbmthermalpower"
    "https://apipengayoman.ipagemakassar.com/api/v1/eventbus/bbmthermalpower"
  );

  const [modalController, setModalController] = useState(false);
  const [weather, setWeather] = useState<any>(null);
  const [cast, setCast] = useState<any>(null);

  const [loadingBMKG, setLoading] = useState(true);
  const [errorBMKG, setError] = useState(null);

  useEffect(() => {
    const filterCurrentWeather = (weatherData: any) => {
      // Gabungkan semua data cuaca menjadi satu array
      const flattenedWeatherData = weatherData.flat();

      // Ambil waktu saat ini dalam UTC
      const currentDate = new Date(); // Ambil waktu saat ini
      currentDate.toISOString(); // Konversi ke format UTC

      // Hitung waktu mulai dan akhir dari rentang 3 jam
      const startDate = new Date(currentDate);
      startDate.setUTCHours(currentDate.getUTCHours(), 0, 0, 0); // Set jam ke jam saat ini, menit, detik, dan milidetik ke 0

      const endDate = new Date(startDate);
      endDate.setUTCHours(endDate.getUTCHours() + 3); // Tambahkan 3 jam ke waktu mulai

      // Filter data untuk mendapatkan objek yang sesuai dengan rentang waktu
      const filteredData = flattenedWeatherData.filter((item: any) => {
        const itemDate = new Date(item.datetime);
        return itemDate >= startDate && itemDate < endDate; // Pastikan tanggal dan waktu sesuai
      });
      setWeather(filteredData[0]);
      console.log("filtereddata", filteredData);
      // setCurrentWeather(filteredData || null);
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=73.71.09.1007"
        );
        setCast(response.data.data[0].lokasi);
        filterCurrentWeather(response.data.data[0].cuaca);
        // setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const transformObjectThermal = (obj: any, objPac: any) => {
      let { success, ...others } = obj;
      let { success: successPac, data: dataPac } = objPac;
      if (success === "" || successPac === "") {
        success = false;
      }
      if (success || successPac) {
        if (others.data.length > 0) {
          const lastData = others.data[others.data.length - 1];
          const { timestamp, connected, ...thermalRoom } = lastData;
          const thermal = Object.entries(thermalRoom).map(([key, value]) => {
            return { room: key, value: value };
          });

          const objectArrayLt1 = dataPac.data.slice(0, 4);
          const objectArrayLt2 = dataPac.data.slice(4, 10);
          const objectArrayLt3Radio = dataPac.data.slice(10, 14);
          const objectArrayLt3Transmisi = dataPac.data.slice(14, 17);
          const objectArrayLt3Core = dataPac.data.slice(17, 20);
          const objectArrayLt4Core = dataPac.data.slice(20, 23);
          const objectArrayLt4Containment = dataPac.data.slice(23, 27);

          const formattedDataPaca = (obj: any[], nameRoom: string) => {
            const resultPac: any[] = [];
            obj.forEach((device: any) => {
              const supplyTempParam = device.parameters.find(
                (param: any) => param.parameterName === "Supply Temp"
              );
              const humidityParam = device.parameters.find(
                (param: any) => param.parameterName === "Humidity"
              );

              // Step 2: Check if both parameters exist and their lastValue is not a timeout
              if (
                supplyTempParam &&
                humidityParam &&
                supplyTempParam.lastValue !==
                  "request timeout (after 1 retries)" &&
                humidityParam.lastValue !== "request timeout (after 1 retries)"
              ) {
                // Step 3: Parse lastValue to number
                const supplyTempValue = parseFloat(supplyTempParam.lastValue);
                const humidityValue = parseFloat(humidityParam.lastValue);

                // Step 4: Push the result
                resultPac.push({
                  name: `${nameRoom}`,
                  temperature: supplyTempValue,
                  humidity: humidityValue,
                });
              }
            });

            // Step 5: Calculate averages
            const averageTemperature =
              resultPac.reduce((sum, result) => sum + result.temperature, 0) /
                resultPac.length || 0;
            const averageHumidity =
              resultPac.reduce((sum, result) => sum + result.humidity, 0) /
                resultPac.length || 0;

            // Final result object
            return {
              room: `${nameRoom}`,
              temperature: Number((averageTemperature / 10).toFixed(2)),
              humidity: Number((averageHumidity / 10).toFixed(2)),
            };
          };

          const formattedDataPacb = (obj: any[], nameRoom: string) => {
            const resultPac: any[] = [];
            obj.forEach((device: any) => {
              const returnTempParam = device.parameters.find(
                (param: any) => param.parameterName === "Return Temp"
              );
              const humidityParam = device.parameters.find(
                (param: any) => param.parameterName === "Humidity"
              );

              // Step 2: Check if both parameters exist and their lastValue is not a timeout
              if (
                returnTempParam &&
                humidityParam &&
                returnTempParam.lastValue !==
                  "request timeout (after 1 retries)" &&
                humidityParam.lastValue !== "request timeout (after 1 retries)"
              ) {
                // Step 3: Parse lastValue to number
                const returnTempValue = parseFloat(returnTempParam.lastValue);
                const humidityValue = parseFloat(humidityParam.lastValue);

                // Step 4: Push the result
                resultPac.push({
                  name: `${nameRoom}`,
                  temperature: returnTempValue,
                  humidity: humidityValue,
                });
              }
            });

            // Step 5: Calculate averages
            const averageTemperature =
              resultPac.reduce((sum, result) => sum + result.temperature, 0) /
                resultPac.length || 0;
            const averageHumidity =
              resultPac.reduce((sum, result) => sum + result.humidity, 0) /
                resultPac.length || 0;

            // Final result object
            return {
              room: `${nameRoom}`,
              temperature: Number((averageTemperature / 10).toFixed(2)),
              humidity: Number((averageHumidity / 10).toFixed(2)),
            };
          };

          const pacLantai1 = formattedDataPaca(objectArrayLt1, "Battery");
          const pacLantai2 = formattedDataPaca(objectArrayLt2, "Core");
          const pacLantai3Radio = formattedDataPaca(
            objectArrayLt3Radio,
            "Radio"
          );
          const pacLantai3transmisi = formattedDataPaca(
            objectArrayLt3Transmisi,
            "Transmisi"
          );
          const pacLantai3core = formattedDataPaca(objectArrayLt3Core, "Core");
          const pacLantai4core = formattedDataPaca(objectArrayLt4Core, "Core");
          const pacLantai4containment = formattedDataPacb(
            objectArrayLt4Containment,
            "Containment"
          );

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
                  room: name === "Data Center" ? "Containment" : name,
                  value: {
                    temperature:
                      temperature / count === 0
                        ? 0
                        : Number((temperature / count).toFixed(2)),
                    humidity:
                      humidity / count === 0
                        ? 0
                        : Number((humidity / count).toFixed(2)),
                    name,
                  },
                };
              });

              acc[prefix] = averagedRooms;
              return acc;
            },
            {}
          );

          const allValuesPac = {
            lantai1: [
              {
                ...pacLantai1,
              },
            ],
            lantai2: [
              {
                ...pacLantai2,
              },
            ],
            lantai3: [
              {
                ...pacLantai3Radio,
              },
              {
                ...pacLantai3transmisi,
              },
              {
                ...pacLantai3core,
              },
            ],
            lantai4: [
              {
                ...pacLantai4core,
              },
              {
                ...pacLantai4containment,
              },
            ],
          };

          setThermalLt1(combinedData.Lantai1);
          setThermalLt2(combinedData.Lantai2);
          setThermalLt3(combinedData.Lantai3);
          setThermalLt4(combinedData.Lantai4);
          setThermalPacLt1(allValuesPac.lantai1);
          setThermalPacLt2(allValuesPac.lantai2);
          setThermalPacLt3(allValuesPac.lantai3);
          setThermalPacLt4(allValuesPac.lantai4);
        }
      }
    };

    const lastBbmVal = (arr: any) => {
      const insertSpace = (input: any) => {
        const words = ["tangki", "bulanan", "harian", "a", "b", "cadangan"];
        const regex = new RegExp(`(${words.join("|")})`, "g");

        return input.replace(regex, " $1").trim();
      };

      if (arr.connected) {
        const { connected, timestamp, __v, _id, ...others } = arr;
        const bbm = Object.entries(others).map(([key, value]) => {
          return { name: insertSpace(key), value: value };
        });

        const combineAndAverageTanks = (tankData: any[]) => {
          // Function to get the base name of the tank
          const getBaseName = (name: string) => {
            // Remove the last part (like "a" or "b") if it exists
            return name.replace(/ (a|b)$/i, "").trim();
          };

          // Grouping data by base name (e.g., "tangki harian" or "tangki bulanan")
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

              // Add volume and level for tanks with the same base name
              acc[baseName].totalVolume += value.volume;
              acc[baseName].totalLevel += value.level;
              acc[baseName].count += 1;

              return acc;
            },
            {}
          );

          // Calculate average volume and level for each group of tanks
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
        transformObjectThermal(
          data.result.thermalData,
          data.result.pacMonitoring
        );

        if (data.result.bbmData.data) {
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
            setPln1Load(powerLastUpdate?.pln1load.value);
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
      <HeadPage
        title={`Dashboard Pantau Gedung Telkomsel TTC Pengayoman - Last Update ${data.lastUpdate}`}
      />
      <HomeModal
        display={modalController}
        action={setModalController}
        children={<CardParameterHome />}
      />
      <div className={styles.sectionWrapper}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* pue */}
          <div
            className={styles.sectionHome}
            style={{ flex: "20", borderRight: "3px dashed #999" }}
          >
            <>
              <h1>Power Usage Effectiveness</h1>

              <div className={styles.containerValue}>
                {pueData && (
                  <div className={styles.cardSectionValuePue}>
                    <CardValueHomePower
                      title={`PUE`}
                      timestamp={`${pueData.timestamp}`}
                      value={pueData.value.toFixed(2)}
                      cardColor={
                        pueData.value < 1.5
                          ? "#0ECBC0"
                          : pueData.value < 2.0
                          ? "#56CB0E"
                          : "#CB300E"
                      }
                      valueColor={
                        pueData.value < 1.5
                          ? "#000"
                          : pueData.value < 2.0
                          ? "#000"
                          : "#fff"
                      }
                      width="100%"
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
                        ? "#0ECBC0"
                        : pueData.value < 2.0
                        ? // ? "#0eaacb"
                          "#56CB0E"
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
                    <CardValueHomePower
                      title={`Facility Load`}
                      timestamp={`${facilityLoad.timestamp}`}
                      value={
                        facilityLoad
                          ? `${facilityLoad.value.toFixed(2)} kVa`
                          : "0"
                      }
                      cardColor="#1acdf3"
                      valueColor="#000"
                      width="100%"
                      height="14rem"
                    />
                  </div>
                )}

                {facilityLoadGraf && (
                  <TrendGrafic
                    data={facilityLoadGraf}
                    heightGrafic={140}
                    lineColor="#1acdf3"
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
                    <CardValueHomePower
                      title={`IT Load`}
                      timestamp={`${itLoad.timestamp}`}
                      value={itLoad ? `${itLoad.value.toFixed(2)} kVa` : "0"}
                      cardColor="#1acdf3"
                      valueColor="#000"
                      width="100%"
                      height="14rem"
                    />
                  </div>
                )}

                {itLoadGraf && (
                  <TrendGrafic
                    data={itLoadGraf}
                    heightGrafic={140}
                    lineColor="#1acdf3"
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
            </>
          </div>
          {/* occupancy */}
          <div className={styles.sectionHome} style={{ flex: "2" }}>
            <h1 style={{ textAlign: "center", width: "100%" }}>
              Occupancy Information
            </h1>
            <div className="donut-chart-container">
              {bbmData && (
                <>
                  <FuelGauge
                    value={(pln1Load / 1250) * 100}
                    title={`Occupancy Trafo`}
                    volume={pln1Load}
                    type="electrical"
                  />
                  <FuelGauge
                    value={(bbmData[0].value.volume / 12000) * 100}
                    title={`${bbmData[0].name}`}
                    volume={bbmData[0].value.volume}
                    type="bbm"
                  />
                  <FuelGauge
                    value={(bbmData[1].value.volume / 12000) * 100}
                    title={`${bbmData[1].name}`}
                    volume={bbmData[1].value.volume}
                    type="bbm"
                  />
                </>
              )}
            </div>
          </div>
        </div>
        {/* thermal */}
        <div
          className={styles.sectionHome}
          // onClick={() => navigate("/main/monitoring/power")}
          style={{ gap: "0.3rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <h1>Thermal Building Information</h1>
              <img
                src={question}
                alt="question image"
                onClick={() => setModalController(true)}
                style={{ cursor: "pointer", width: "20px", height: "20px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
              <div
                style={{
                  cursor: "pointer",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  width: "9rem",
                  backgroundColor: isPac ? "#ddd" : "#56CB0E",
                  borderRadius: "10px",
                  padding: "0.2rem 0rem",
                  textAlign: "center",
                }}
                onClick={() => setIsPac(false)}
              >
                Sensor
              </div>
              <div
                style={{
                  backgroundColor: isPac ? "#56CB0E" : "#ddd",
                  cursor: "pointer",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  width: "9rem",
                  borderRadius: "10px",
                  padding: "0.2rem 0rem",
                  textAlign: "center",
                }}
                onClick={() => setIsPac(true)}
              >
                PAC
              </div>
              <div
                style={{
                  backgroundColor: "#0ECBC0",
                  cursor: "pointer",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  width: "14rem",
                  borderRadius: "10px",
                  padding: "0.2rem 0rem",
                  textAlign: "center",
                }}
                onClick={() => navigate("/main/pac")}
              >
                PAC Dashboard
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              width: "100%",
            }}
          >
            {isPac ? (
              <div className={styles.containerValueCard}>
                <div className={styles.groupFloorValueCard}>
                  <p className={styles.groupFloorValueCardTitle}>Lantai 1</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    {thermalPacLt1 &&
                      thermalPacLt1.length > 0 &&
                      thermalPacLt1.map(
                        (item: ThermalRoomDetail | any, index: any) => {
                          return (
                            <CardValueHomeThermal
                              key={index}
                              title={`Thermal Ruangan ${item.room}`}
                              valueTemp={
                                item.temperature !== 0
                                  ? `${item.temperature}°C`
                                  : "N/A"
                              }
                              valueHumd={
                                item.humidity !== 0
                                  ? `${item.humidity} %`
                                  : "N/A"
                              }
                              backgroundColorTemp={
                                item.temperature === 0
                                  ? "#ddd"
                                  : item.temperature < 18
                                  ? "#0ECBC0"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#56CB0E"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorTemp={
                                item.temperature === 0
                                  ? "#000"
                                  : item.temperature < 18
                                  ? "#000"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#000"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#000"
                                  : "#fff"
                              }
                              backgroundColorHumd={
                                item.humidity === 0
                                  ? "#ddd"
                                  : item.humidity < 45
                                  ? "#fcfd11"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#56CB0E"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorHumd={
                                item.humidity === 0
                                  ? "#000"
                                  : item.humidity < 45
                                  ? "#000"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#000"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#000"
                                  : "#fff"
                              }
                              width="100%"
                              height="8.5rem"
                            />
                          );
                        }
                      )}
                  </div>
                </div>
                <div className={styles.groupFloorValueCard}>
                  <p className={styles.groupFloorValueCardTitle}>Lantai 2</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    {thermalPacLt2 &&
                      thermalPacLt2.length > 0 &&
                      thermalPacLt2.map(
                        (item: ThermalRoomDetail | any, index: any) => {
                          return (
                            <CardValueHomeThermal
                              key={index}
                              title={`Thermal Ruangan ${item.room}`}
                              valueTemp={
                                item.temperature !== 0
                                  ? `${item.temperature}°C`
                                  : "N/A"
                              }
                              valueHumd={
                                item.humidity !== 0
                                  ? `${item.humidity} %`
                                  : "N/A"
                              }
                              backgroundColorTemp={
                                item.temperature === 0
                                  ? "#ddd"
                                  : item.temperature < 18
                                  ? "#0ECBC0"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#56CB0E"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorTemp={
                                item.temperature === 0
                                  ? "#000"
                                  : item.temperature < 18
                                  ? "#000"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#000"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#000"
                                  : "#fff"
                              }
                              backgroundColorHumd={
                                item.humidity === 0
                                  ? "#ddd"
                                  : item.humidity < 45
                                  ? "#fcfd11"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#56CB0E"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorHumd={
                                item.humidity === 0
                                  ? "#000"
                                  : item.humidity < 45
                                  ? "#000"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#000"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#000"
                                  : "#fff"
                              }
                              width="100%"
                              height="8.5rem"
                            />
                          );
                        }
                      )}
                  </div>
                </div>
                <div className={styles.groupFloorValueCard}>
                  <p className={styles.groupFloorValueCardTitle}>Lantai 3</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    {thermalPacLt3 &&
                      thermalPacLt3.length > 0 &&
                      thermalPacLt3.map(
                        (item: ThermalRoomDetail | any, index: any) => {
                          return (
                            <CardValueHomeThermal
                              key={index}
                              title={`Thermal Ruangan ${item.room}`}
                              valueTemp={
                                item.temperature !== 0
                                  ? `${item.temperature}°C`
                                  : "N/A"
                              }
                              valueHumd={
                                item.humidity !== 0
                                  ? `${item.humidity} %`
                                  : "N/A"
                              }
                              backgroundColorTemp={
                                item.temperature === 0
                                  ? "#ddd"
                                  : item.temperature < 18
                                  ? "#0ECBC0"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#56CB0E"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorTemp={
                                item.temperature === 0
                                  ? "#000"
                                  : item.temperature < 18
                                  ? "#000"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#000"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#000"
                                  : "#fff"
                              }
                              backgroundColorHumd={
                                item.humidity === 0
                                  ? "#ddd"
                                  : item.humidity < 45
                                  ? "#fcfd11"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#56CB0E"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorHumd={
                                item.humidity === 0
                                  ? "#000"
                                  : item.humidity < 45
                                  ? "#000"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#000"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#000"
                                  : "#fff"
                              }
                              width="100%"
                              height="8.5rem"
                            />
                          );
                        }
                      )}
                  </div>
                </div>
                <div className={styles.groupFloorValueCard}>
                  <p className={styles.groupFloorValueCardTitle}>Lantai 4</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    {thermalPacLt4 &&
                      thermalPacLt4.length > 0 &&
                      thermalPacLt4.map(
                        (item: ThermalRoomDetail | any, index: any) => {
                          return (
                            <CardValueHomeThermal
                              key={index}
                              title={`Thermal Ruangan ${item.room}`}
                              valueTemp={
                                item.temperature !== 0
                                  ? `${item.temperature}°C`
                                  : "N/A"
                              }
                              valueHumd={
                                item.humidity !== 0
                                  ? `${item.humidity} %`
                                  : "N/A"
                              }
                              backgroundColorTemp={
                                item.temperature === 0
                                  ? "#ddd"
                                  : item.temperature < 18
                                  ? "#0ECBC0"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#56CB0E"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorTemp={
                                item.temperature === 0
                                  ? "#000"
                                  : item.temperature < 18
                                  ? "#000"
                                  : item.temperature > 17 &&
                                    item.temperature < 24
                                  ? "#000"
                                  : item.temperature > 23 &&
                                    item.temperature < 30
                                  ? "#000"
                                  : "#fff"
                              }
                              backgroundColorHumd={
                                item.humidity === 0
                                  ? "#ddd"
                                  : item.humidity < 45
                                  ? "#fcfd11"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#56CB0E"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#fcfd11"
                                  : "#CB300E"
                              }
                              foregroundColorHumd={
                                item.humidity === 0
                                  ? "#000"
                                  : item.humidity < 45
                                  ? "#000"
                                  : item.humidity > 44 && item.humidity < 61
                                  ? "#000"
                                  : item.humidity > 60 && item.humidity < 71
                                  ? "#000"
                                  : "#fff"
                              }
                              width="100%"
                              height="8.5rem"
                            />
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.containerValueCard}>
                <div className={styles.groupFloorValueCard}>
                  <p className={styles.groupFloorValueCardTitle}>Lantai 1</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.8rem",
                    }}
                  >
                    {thermalLt1 &&
                      thermalLt1.length > 0 &&
                      thermalLt1.map((item: ThermalRoomDetail | any, index) => {
                        return (
                          <CardValueHomeThermal
                            key={index}
                            title={`Thermal Ruangan ${item.room}`}
                            valueTemp={
                              item.value.temperature !== 0
                                ? `${item.value.temperature}°C`
                                : "N/A"
                            }
                            valueHumd={
                              item.value.humidity !== 0
                                ? `${item.value.humidity} %`
                                : "N/A"
                            }
                            backgroundColorTemp={
                              item.value.temperature === 0
                                ? "#ddd"
                                : item.value.temperature < 18
                                ? "#0ECBC0"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#56CB0E"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorTemp={
                              item.value.temperature === 0
                                ? "#000"
                                : item.value.temperature < 18
                                ? "#000"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#000"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#000"
                                : "#fff"
                            }
                            backgroundColorHumd={
                              item.value.humidity === 0
                                ? "#ddd"
                                : item.value.humidity < 45
                                ? "#fcfd11"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#56CB0E"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorHumd={
                              item.value.humidity === 0
                                ? "#000"
                                : item.value.humidity < 45
                                ? "#000"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#000"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#000"
                                : "#fff"
                            }
                            width="100%"
                            height="8.5rem"
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
                      gap: "0.8rem",
                    }}
                  >
                    {thermalLt2 &&
                      thermalLt2.length > 0 &&
                      thermalLt2.map((item: ThermalRoomDetail | any, index) => {
                        return (
                          <CardValueHomeThermal
                            key={index}
                            title={`Thermal Ruangan ${item.room}`}
                            valueTemp={
                              item.value.temperature !== 0
                                ? `${item.value.temperature}°C`
                                : "N/A"
                            }
                            valueHumd={
                              item.value.humidity !== 0
                                ? `${item.value.humidity} %`
                                : "N/A"
                            }
                            backgroundColorTemp={
                              item.value.temperature === 0
                                ? "#ddd"
                                : item.value.temperature < 18
                                ? "#0ECBC0"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#56CB0E"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorTemp={
                              item.value.temperature === 0
                                ? "#000"
                                : item.value.temperature < 18
                                ? "#000"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#000"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#000"
                                : "#fff"
                            }
                            backgroundColorHumd={
                              item.value.humidity === 0
                                ? "#ddd"
                                : item.value.humidity < 45
                                ? "#fcfd11"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#56CB0E"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorHumd={
                              item.value.humidity === 0
                                ? "#000"
                                : item.value.humidity < 45
                                ? "#000"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#000"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#000"
                                : "#fff"
                            }
                            width="100%"
                            height="8.5rem"
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
                      gap: "0.8rem",
                    }}
                  >
                    {thermalLt3 &&
                      thermalLt3.length > 0 &&
                      thermalLt3.map((item: ThermalRoomDetail | any, index) => {
                        return (
                          <CardValueHomeThermal
                            key={index}
                            title={`Thermal Ruangan ${item.room}`}
                            valueTemp={
                              item.value.temperature !== 0
                                ? `${item.value.temperature}°C`
                                : "N/A"
                            }
                            valueHumd={
                              item.value.humidity !== 0
                                ? `${item.value.humidity} %`
                                : "N/A"
                            }
                            backgroundColorTemp={
                              item.value.temperature === 0
                                ? "#ddd"
                                : item.value.temperature < 18
                                ? "#0ECBC0"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#56CB0E"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorTemp={
                              item.value.temperature === 0
                                ? "#000"
                                : item.value.temperature < 18
                                ? "#000"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#000"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#000"
                                : "#fff"
                            }
                            backgroundColorHumd={
                              item.value.humidity === 0
                                ? "#ddd"
                                : item.value.humidity < 45
                                ? "#fcfd11"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#56CB0E"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorHumd={
                              item.value.humidity === 0
                                ? "#000"
                                : item.value.humidity < 45
                                ? "#000"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#000"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#000"
                                : "#fff"
                            }
                            width="100%"
                            height="8.5rem"
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
                      gap: "0.8rem",
                    }}
                  >
                    {thermalLt4 &&
                      thermalLt4.length > 0 &&
                      thermalLt4.map((item: ThermalRoomDetail | any, index) => {
                        return (
                          <CardValueHomeThermal
                            key={index}
                            title={`Thermal Ruangan ${item.room}`}
                            valueTemp={
                              item.value.temperature !== 0
                                ? `${item.value.temperature}°C`
                                : "N/A"
                            }
                            valueHumd={
                              item.value.humidity !== 0
                                ? `${item.value.humidity} %`
                                : "N/A"
                            }
                            backgroundColorTemp={
                              item.value.temperature === 0
                                ? "#ddd"
                                : item.value.temperature < 18
                                ? "#0ECBC0"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#56CB0E"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorTemp={
                              item.value.temperature === 0
                                ? "#000"
                                : item.value.temperature < 18
                                ? "#000"
                                : item.value.temperature > 17 &&
                                  item.value.temperature < 24
                                ? "#000"
                                : item.value.temperature > 23 &&
                                  item.value.temperature < 30
                                ? "#000"
                                : "#fff"
                            }
                            backgroundColorHumd={
                              item.value.humidity === 0
                                ? "#ddd"
                                : item.value.humidity < 45
                                ? "#fcfd11"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#56CB0E"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#fcfd11"
                                : "#CB300E"
                            }
                            foregroundColorHumd={
                              item.value.humidity === 0
                                ? "#000"
                                : item.value.humidity < 45
                                ? "#000"
                                : item.value.humidity > 44 &&
                                  item.value.humidity < 61
                                ? "#000"
                                : item.value.humidity > 60 &&
                                  item.value.humidity < 71
                                ? "#000"
                                : "#fff"
                            }
                            width="100%"
                            height="8.5rem"
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            {/* BMKG */}
            <div style={{ flex: 2 }}>
              <div className={styles.groupFloorValueCard}>
                <p className={styles.groupFloorValueCardTitleBMKG}>Data BMKG</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.8rem",
                  }}
                >
                  {loadingBMKG ? (
                    <LoadingPage />
                  ) : errorBMKG ? (
                    <MonitoringDown />
                  ) : (
                    <CardValueHomeBMKG
                      key={"bmkg data"}
                      image={weather.image}
                      cuacaDesc={weather.weather_desc}
                      title={`Cuaca Kelurahan ${cast.desa}`}
                      valueTemp={weather.t !== 0 ? `${weather.t}°C` : "N/A"}
                      valueHumd={weather.hu !== 0 ? `${weather.hu} %` : "N/A"}
                      backgroundColorTemp={
                        weather.t === 0
                          ? "#ddd"
                          : weather.t < 18
                          ? "#0ECBC0"
                          : weather.t > 17 && weather.t < 24
                          ? "#56CB0E"
                          : weather.t > 23 && weather.t < 30
                          ? "#fcfd11"
                          : "#CB300E"
                      }
                      foregroundColorTemp={
                        weather.t === 0
                          ? "#000"
                          : weather.t < 18
                          ? "#000"
                          : weather.t > 17 && weather.t < 24
                          ? "#000"
                          : weather.t > 23 && weather.t < 30
                          ? "#000"
                          : "#fff"
                      }
                      backgroundColorHumd={
                        weather.hu === 0
                          ? "#ddd"
                          : weather.hu < 45
                          ? "#fcfd11"
                          : weather.hu > 44 && weather.hu < 61
                          ? "#56CB0E"
                          : weather.hu > 60 && weather.hu < 71
                          ? "#fcfd11"
                          : "#CB300E"
                      }
                      foregroundColorHumd={
                        weather.hu === 0
                          ? "#000"
                          : weather.hu < 45
                          ? "#000"
                          : weather.hu > 44 && weather.hu < 61
                          ? "#000"
                          : weather.hu > 60 && weather.hu < 71
                          ? "#000"
                          : "#fff"
                      }
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
