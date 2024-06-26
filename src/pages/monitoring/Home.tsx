import styles from "@/css/module/Home.module.css";
import CardValue from "@/components/card/CardValue";
import { useEffect, useState } from "react";
import HeadPage from "@/components/header/HeadPage";
import TrendGrafic from "@/components/grafic/TendGrafic";
import PieChart from "@/components/grafic/PieChart";

interface DataPoint {
  date: Date;
  value: number;
}

// React component
export default function Home() {
  const [pueData, setPueData] = useState<DataPoint[]>();
  const [itLoad, setItLoad] = useState<DataPoint[]>();
  const [facilityLoad, setFacilityLoad] = useState<DataPoint[]>();
  const [thermal, setThermal] = useState<
    {
      title: string;
      temperature: number;
      humidity: number;
    }[]
  >();

  useEffect(() => {
    const generateDataPue = (): Promise<DataPoint[]> => {
      return new Promise<DataPoint[]>((resolve) => {
        setTimeout(() => {
          const start = new Date(2023, 5, 1, 0, 0); // Starting at midnight
          const end = new Date(2023, 5, 2, 0, 0); // Ending at the next midnight
          const interval = 5 * 60 * 1000; // 5 minutes in milliseconds
          const data: DataPoint[] = [];

          for (
            let time = start.getTime();
            time <= end.getTime();
            time += interval
          ) {
            data.push({
              date: new Date(time),
              value: parseFloat((Math.random() * (3 - 1.5) + 1.5).toFixed(2)), // Random value between 1.5 and 3
            });
          }

          resolve(data);
        }, 1000); // Simulating async delay
      });
    };
    const generateDataItLoad = (): Promise<DataPoint[]> => {
      return new Promise<DataPoint[]>((resolve) => {
        setTimeout(() => {
          const start = new Date(2023, 5, 1, 0, 0); // Starting at midnight
          const end = new Date(2023, 5, 2, 0, 0); // Ending at the next midnight
          const interval = 5 * 60 * 1000; // 5 minutes in milliseconds
          const data: DataPoint[] = [];

          for (
            let time = start.getTime();
            time <= end.getTime();
            time += interval
          ) {
            data.push({
              date: new Date(time),
              value: parseFloat((Math.random() * (200 - 180) + 180).toFixed(0)), // Random value between 1.5 and 3
            });
          }

          resolve(data);
        }, 1000); // Simulating async delay
      });
    };
    const generateDataFacilityLoad = (): Promise<DataPoint[]> => {
      return new Promise<DataPoint[]>((resolve) => {
        setTimeout(() => {
          const start = new Date(2023, 5, 1, 0, 0); // Starting at midnight
          const end = new Date(2023, 5, 2, 0, 0); // Ending at the next midnight
          const interval = 5 * 60 * 1000; // 5 minutes in milliseconds
          const data: DataPoint[] = [];

          for (
            let time = start.getTime();
            time <= end.getTime();
            time += interval
          ) {
            data.push({
              date: new Date(time),
              value: parseFloat((Math.random() * (300 - 180) + 180).toFixed(0)), // Random value between 1.5 and 3
            });
          }

          resolve(data);
        }, 1000); // Simulating async delay
      });
    };

    const generateDataThermal = (): Promise<
      {
        title: string;
        temperature: number;
        humidity: number;
      }[]
    > => {
      const getRandomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const getRandomFloat = (min: number, max: number): number => {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      return new Promise((resolve) => {
        const data = Array.from({ length: 12 }, (_, index) => ({
          title: `Room ${index + 1}`,
          temperature: getRandomFloat(-10, 40), // Temperature range between -10°C and 40°C
          humidity: getRandomInt(0, 100), // Humidity range between 0% and 100%
        }));

        resolve(data);
      });
    };

    const fetchData = async () => {
      const randomDataPue = await generateDataPue();
      const randomDataIt = await generateDataItLoad();
      const randomDataFacility = await generateDataFacilityLoad();
      const randomThermal = await generateDataThermal();
      setPueData(randomDataPue);
      setItLoad(randomDataIt);
      setFacilityLoad(randomDataFacility);
      setThermal(randomThermal);
    };

    console.log(thermal);
    fetchData();
  }, []);

  return (
    <>
      <HeadPage title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHome}>
          <h1>Thermal Building Information</h1>
          <div className={styles.containerValue}>
            <div className={styles.cardSectionValue}>
              {thermal &&
                thermal.map((item, index) => (
                  <CardValue
                    key={index}
                    title={`${item.title} Temperature`}
                    value={`${item.temperature}°C`}
                    cardColor={
                      item.temperature < 19
                        ? "#0ECBC0"
                        : item.temperature > 18 && item.temperature < 28
                        ? "#56CB0E"
                        : "#CB300E"
                    }
                    valueColor="#fff"
                    width="14rem"
                    height="12rem"
                  />
                ))}
            </div>
          </div>
          <div className={styles.containerValue}>
            <div className={styles.cardSectionValue}>
              {thermal &&
                thermal.map((item, index) => (
                  <CardValue
                    key={index}
                    title={`${item.title} Humidity`}
                    value={`${item.humidity}%`}
                    cardColor={
                      item.humidity > 60
                        ? "#0ECBC0"
                        : item.humidity > 29 && item.humidity < 61
                        ? "#56CB0E"
                        : "#CB300E"
                    }
                    valueColor="#fff"
                    width="14rem"
                    height="12rem"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.sectionHomeBottom}>
          <div className={styles.sectionHome}>
            <h1>Power Usage Effectiveness</h1>
            <div className={styles.containerValue}>
              <div className={styles.cardSectionValue}>
                <CardValue
                  title="Power Usage Effectiveness"
                  value={pueData ? pueData[pueData.length - 1].value : "0"}
                  cardColor="#0ECBC0"
                  valueColor="#fff"
                  width="17rem"
                  height="14rem"
                />
              </div>

              <TrendGrafic
                data={pueData}
                heightGrafic={150}
                lineColor="#782B1A"
                pointColor="#0C1234"
                label="Data PUE - 24 Jam"
                fontSize="12px"
                unit=" "
                mode="24hour"
              />
            </div>
            <div className={styles.containerValue}>
              <div className={styles.cardSectionValue}>
                <CardValue
                  title="IT Load"
                  value={
                    itLoad ? `${itLoad[itLoad.length - 1].value} kVa` : "0"
                  }
                  cardColor="#0ECBC0"
                  valueColor="#fff"
                  width="17rem"
                  height="14rem"
                />
              </div>

              <TrendGrafic
                data={itLoad}
                heightGrafic={150}
                lineColor="#782B1A"
                pointColor="#0C1234"
                label="Data PUE - 24 Jam"
                fontSize="12px"
                unit=" kVa"
                mode="24hour"
              />
            </div>
            <div className={styles.containerValue}>
              <div className={styles.cardSectionValue}>
                <CardValue
                  title="Facility Load"
                  value={
                    facilityLoad
                      ? `${facilityLoad[facilityLoad.length - 1].value} kVa`
                      : "0"
                  }
                  cardColor="#0ECBC0"
                  valueColor="#fff"
                  width="17rem"
                  height="14rem"
                />
              </div>

              <TrendGrafic
                data={facilityLoad}
                heightGrafic={150}
                lineColor="#782B1A"
                pointColor="#0C1234"
                label="Data PUE - 24 Jam"
                fontSize="12px"
                unit=" kVa"
                mode="24hour"
              />
            </div>
          </div>
          <div className={styles.sectionHome} style={{ height: "100%" }}>
            <h1>BBM Usage Information</h1>
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
