import { useRef, useState } from "react";
import styles from "@/css/module/Home.module.css";
import CardValue from "@/components/card/CardValue";
import listrik from "@/assets/svg/power.svg";
import baterai from "@/assets/svg/battery.svg";
import Lottie from "lottie-react";
import graphLoading from "@/assets/lottie/graphLoading.json";
// import dataLoading from "@/assets/lottie/dataLoading.json";
import { useDrawChart, useDrawChartThreeLine } from "@/hooks/useDrawChart";
import HeadPage from "@/components/header/HeadPage";

import BoxPlot from "@/components/grafic/BoxPlate";
// Define the type for the data
interface DataPoint {
  date: Date;
  value: number;
}

// React component
export default function Home() {
  const chartRef = useRef<HTMLDivElement>(null);
  const fuelRef1 = useRef<HTMLDivElement>(null);
  const fuelRef2 = useRef<HTMLDivElement>(null);
  const thermalRef = useRef<HTMLDivElement>(null);
  const chartThreeLine = useRef<HTMLDivElement>(null);
  // const [dataCard1, setDataCard1] = useState(false);
  const [graphData1, setGraphData1] = useState(true);

  const data = [18, 20, 22, 24, 26, 30];

  // Generate dummy data
  const generateDummyData1 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (2.5 - 1.9) + 1.9).toFixed(2)), // Random values between 1.9 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyData2 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (800 - 600) + 600).toFixed(2)), // Random values between 1.6 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyData3 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (380 - 210) + 210).toFixed(2)), // Random values between 1.6 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyData4 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (160 - 80) + 80).toFixed(2)), // Random values between 1.6 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyFuelData1 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 7; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (1000 - 500) + 500).toFixed(2)), // Random values between 1.9 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyFuelData2 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 7; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (1000 - 500) + 500).toFixed(2)), // Random values between 1.9 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };
  const generateDummyThermalData = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 7; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (30 - 18) + 18).toFixed(2)), // Random values between 1.9 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };

  useDrawChart(
    generateDummyData1(),
    chartRef,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [1.6, 2.5],
    "#305DFF",
    "POWER USAGE EFFECTIVENESS",
    0.6,
    "1.4rem",
    ""
  );
  useDrawChart(
    generateDummyFuelData1(),
    fuelRef1,
    [new Date(2024, 4, 1), new Date(2024, 4, 7)],
    [500, 1000],
    "#305DFF",
    "TANGKI BULANAN",
    0.22,
    "0.8rem",
    "translateX(-25px)",
    " Liter"
  );
  useDrawChart(
    generateDummyFuelData2(),
    fuelRef2,
    [new Date(2024, 4, 1), new Date(2024, 4, 7)],
    [500, 1000],
    "#305DFF",
    "TANGKI CADANGAN",
    0.22,
    "0.8rem",
    "translateX(-25px)",
    " Liter"
  );
  useDrawChart(
    generateDummyThermalData(),
    thermalRef,
    [new Date(2024, 4, 1), new Date(2024, 4, 7)],
    [18, 30],
    "#305DFF",
    "SUHU RUANGAN BATTERY",
    0.22,
    "0.8rem",
    "translateX(-25px)",
    "° C"
  );
  useDrawChartThreeLine(
    generateDummyData2(),
    generateDummyData3(),
    generateDummyData4(),
    chartThreeLine,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [80, 1000],
    "#72FF30",
    "#305DFF",
    "#FF3030",
    "LVMDP",
    "RECTIFIER",
    "UPS",
    140,
    240,
    340,
    120,
    220,
    320,
    0.6,
    "1.4rem",
    "",
    " kW"
  );

  return (
    <>
      <HeadPage title="Dashboard Pantau Gedung Telkomsel - TTC Pengayoman" />
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionContainerValue}>
          <div className={styles.cardSectionValue}>
            <CardValue
              title="Temperature Minimal"
              value={`${data[1]}°C`}
              cardColor="#0ECBC0"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature Maximal"
              value={`${data[data.length - 1]}°C`}
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature Percentile 25%"
              value="24°C"
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature Percentile 50%"
              value="25°C"
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature Percentile 75%"
              value="26°C"
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature IQR (75% -25%)"
              value="3°C"
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
            <CardValue
              title="Temperature Mode"
              value="24°C"
              cardColor="#56CB0E"
              valueColor="#fff"
              width="14rem"
              height="14rem"
            />
          </div>

          <BoxPlot data={data} height={150} />
        </div>
        <div className={styles.sectionInfo}>
          {/* {dataCard1 ? (
            <Lottie
              animationData={dataLoading}
              loop={true}
              style={{
                width: "20%",
              }}
            />
          ) : ( */}
          <div className={styles.card}>
            <div className={styles.headerCard}>
              <img src={listrik} alt="listrik" />
              <p>POWER USAGE EFFECTIVENESS</p>
            </div>
            <div className={styles.bodyCard}>
              <img src={baterai} alt="baterai" />
              <div className={styles.textBodyCard}>
                <p className="mohave--regular">LVMDP : 609.24 KW</p>
                <p className="mohave--regular">Rectifier: 227.51 KW</p>
                <p className="mohave--regular">UPS : 103.24 KW</p>
              </div>
            </div>
          </div>
          {/* )} */}
          {graphData1 ? (
            <div className={styles.loadingData}>
              <Lottie
                animationData={graphLoading}
                loop={true}
                style={{
                  width: "20%",
                }}
              />
            </div>
          ) : (
            <div className={styles.cardGrafik} ref={chartThreeLine}></div>
          )}
        </div>
        <div className={styles.sectionInfo}>
          {graphData1 ? (
            <div className={styles.loadingData}>
              <Lottie
                animationData={graphLoading}
                loop={true}
                style={{
                  width: "20%",
                }}
              />
            </div>
          ) : (
            <div className={styles.cardGrafikSmall} ref={fuelRef1}></div>
          )}
          {graphData1 ? (
            <div className={styles.loadingData}>
              <Lottie
                animationData={graphLoading}
                loop={true}
                style={{
                  width: "20%",
                }}
              />
            </div>
          ) : (
            <div className={styles.cardGrafikSmall} ref={fuelRef2}></div>
          )}
          {graphData1 ? (
            <div className={styles.loadingData}>
              <Lottie
                animationData={graphLoading}
                loop={true}
                style={{
                  width: "20%",
                }}
              />
            </div>
          ) : (
            <div className={styles.cardGrafikSmall} ref={thermalRef}></div>
          )}
        </div>
      </div>
    </>
  );
}
