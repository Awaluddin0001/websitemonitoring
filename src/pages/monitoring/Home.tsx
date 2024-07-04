import styles from "@/css/module/Home.module.css";
import CardValue from "@/components/card/CardValue";
import { useEffect, useState } from "react";
import HeadPage from "@/components/header/HeadPage";
import TrendGrafic from "@/components/grafic/TendGrafic";
import PieChart from "@/components/grafic/PieChart";
import useMonitoringFetchData from "@/hooks/useMonitoringFetchData";
import moment from "moment-timezone";

type DataGrafikPower = {
  date: Date;
  value: number;
};

type ThermalRoom = {
  room: string;
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

  const [thermalData, setThermalData] = useState<ThermalRoom[] | undefined>();

  const { data, loading, error } = useMonitoringFetchData(
    "http://localhost:2041/api/v1/monitoring/bbmthermalpower"
  );

  useEffect(() => {
    const transformObjectThermal = (obj: any) => {
      let { success, ...others } = obj;
      if (success === "") {
        success = false;
      }
      if (success) {
        const lastData = others.data[others.data.length - 1];
        const { timestamp, connected, ...thermalRoom } = lastData;
        const thermal = Object.entries(thermalRoom).map(([key, value]) => {
          return { room: key, value: value };
        });
        return { thermal };
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
        // date: item.timeStamp,
        value: Number(item.pue.value.toFixed(2)),
      }));
    };
    const returnValueFL = (arr: any) => {
      return arr.map((item: any) => ({
        date: new Date(item.timeStamp as string),
        // date: item.timeStamp,
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
        const thermalLastUpdate = transformObjectThermal(
          data.result.thermalData
        );
        setThermalData(thermalLastUpdate?.thermal);

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

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: error</div>;

  return (
    <>
      <HeadPage title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHome}>
          <h1>Thermal Building Information - Last Updated {data.lastUpdate}</h1>
          <div className={styles.containerValue}>
            <div className={styles.cardSectionValue}>
              {thermalData &&
                thermalData.map((item: ThermalRoomDetail | any, index) => {
                  if (
                    item.value.temperature !== 0 &&
                    item.value.humidity !== 0
                  ) {
                    return (
                      <CardValue
                        key={index}
                        title={`Room ${item.value.name} Temperature`}
                        value={`${item.value.temperature}°C`}
                        cardColor={
                          item.value.temperature < 19
                            ? "#0ECBC0"
                            : item.value.temperature > 18 &&
                              item.value.temperature < 28
                            ? "#56CB0E"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                      />
                    );
                  }
                })}
            </div>
          </div>
          <div className={styles.containerValue}>
            <div className={styles.cardSectionValue}>
              {thermalData &&
                thermalData.map((item: ThermalRoomDetail | any, index) => {
                  if (
                    item.value.temperature !== 0 &&
                    item.value.humidity !== 0
                  ) {
                    return (
                      <CardValue
                        key={index}
                        title={`Room ${item.value.name} Temperature`}
                        value={`${item.value.humidity}°C`}
                        cardColor={
                          item.value.humidity > 60
                            ? "#0ECBC0"
                            : item.value.humidity > 29 &&
                              item.value.humidity < 61
                            ? "#56CB0E"
                            : "#CB300E"
                        }
                        valueColor="#fff"
                        width="14rem"
                        height="12rem"
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className={styles.sectionHomeBottom}>
          <div className={styles.sectionHome}>
            <h1>Power Usage Effectiveness - Last Updated {data.lastUpdate}</h1>

            <div className={styles.containerValue}>
              {pueData && (
                <div className={styles.cardSectionValue}>
                  <CardValue
                    title={`PUE - ${pueData.timestamp}`}
                    value={pueData.value.toFixed(2)}
                    cardColor="#0ECBC0"
                    valueColor="#fff"
                    width="17rem"
                    height="14rem"
                  />
                </div>
              )}

              {pueDataGraf && (
                <TrendGrafic
                  data={pueDataGraf}
                  heightGrafic={150}
                  lineColor="#782B1A"
                  pointColor="#0C1234"
                  label="Data PUE - 24 Jam"
                  fontSize="12px"
                  unit=" "
                  mode="24hour"
                  setValue={setPueData}
                />
              )}
            </div>

            <div className={styles.containerValue}>
              {facilityLoad && (
                <div className={styles.cardSectionValue}>
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
                  heightGrafic={150}
                  lineColor="#782B1A"
                  pointColor="#0C1234"
                  label="Data Facility Load - 24 Jam"
                  fontSize="12px"
                  unit=" kVa"
                  mode="24hour"
                  positionLabel={140}
                  setValue={setFacilityLoad}
                />
              )}
            </div>
            <div className={styles.containerValue}>
              {itLoad && (
                <div className={styles.cardSectionValue}>
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
                  heightGrafic={150}
                  lineColor="#782B1A"
                  pointColor="#0C1234"
                  label="Data IT Load - 24 Jam"
                  fontSize="12px"
                  unit=" kVa"
                  mode="24hour"
                  positionLabel={120}
                  setValue={setItLoad}
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
              }}
            >
              <PieChart
                data={[
                  { label: "Free", value: 80 },
                  { label: "Usage", value: 20 },
                ]}
                title="Tangki cadangan"
              />
              <PieChart
                data={[
                  { label: "Free", value: 90 },
                  { label: "Usage", value: 10 },
                ]}
                title="Tangki harian"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
