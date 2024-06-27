import { useRef, useState } from "react";
import Lottie from "lottie-react";

import { useDrawChart } from "@/hooks/useDrawChart";
import thermal from "@/assets/svg/snow.svg";
import thermo from "@/assets/svg/thermo.svg";
import liquid from "@/assets/svg/liquid.svg";
import graphLoading from "@/assets/lottie/graphLoading.json";
import styles from "@/css/module/Cooling.module.css";
// import axios from "axios";
// Define the type for the data
interface DataPoint {
  date: Date;
  value: number;
}

function Thermal() {
  const chartRef1 = useRef<HTMLDivElement>(null);
  const chartRef2 = useRef<HTMLDivElement>(null);
  const [graphData1, setGraphData1] = useState(true);
  // const [data, setData] = useState<{
  //   humidity: number[];
  //   temperature: number[];
  // }>({
  //   humidity: [],
  //   temperature: [],
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://192.168.0.30:1000");
  //       let jsonString = response.data;
  //       jsonString = jsonString.replace(
  //         /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
  //         '"$2": '
  //       );
  //       // Remove trailing comma from the end of the string
  //       jsonString = jsonString.replace(/,\s*}/g, "}");
  //       const jsonData = JSON.parse(jsonString);
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Panggil fetchData pertama kali
  //   fetchData();

  //   // Set interval untuk memanggil fetchData setiap 5 detik
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 5000);
  //   // Membersihkan interval saat komponen unmount
  //   return () => clearInterval(interval);
  // }, []); // Kosongkan array dependencies untuk menjalankan efek hanya sekali setelah mounting

  const generateDummyData1 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
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
  const generateDummyData2 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (90 - 10) + 10).toFixed(2)), // Random values between 1.9 and 2.5
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    });
  };

  useDrawChart(
    generateDummyData1(),
    chartRef1,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [18, 30],
    "#305DFF",
    "TEMPARATURE",
    0.6,
    "1.4rem",
    "",
    "°C"
  );
  useDrawChart(
    generateDummyData2(),
    chartRef2,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [10, 90],
    "#72FF30",
    "HUMIDITY",
    0.6,
    "1.4rem",
    "",
    "%"
  );

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div className={styles.headerDashboard}>
          <h1>THERMAL SYSTEM - TTC PENGAYOMAN</h1>{" "}
          <div className={styles.inputDateWraper}>
            <div className="wraper--date__filter">
              <label htmlFor="start" className="date-label">
                Start Date
              </label>
              <input
                type="date"
                name="start"
                className="date-input bebasneue--regular"
              />
            </div>
            <div className="wraper--date__filter">
              <label htmlFor="end" className="date-label">
                End Date
              </label>
              <input
                type="date"
                name="end"
                className="date-input bebasneue--regular"
              />
            </div>
          </div>
        </div>
        <div className={styles.headerDashboard}>
          <div className={styles.navRooms}>
            <div>RUANGAN A</div>
            <div>RUANGAN B</div>
            <div>RUANGAN C</div>
            <div>RUANGAN D</div>
          </div>
          <div className={styles.inputDateWraper}>
            <div className="wraper--date__filter">
              <label htmlFor="start" className="date-label">
                BUILDING FLOOR
              </label>
              <select name="floor" className="select-input bebasneue--regular">
                <option>Floor 1</option>
                <option>Floor 2</option>
                <option>Floor 3</option>
                <option>Floor 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
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
              <img src={thermal} alt="thermal" />
              <p>RUANGAN A</p>
            </div>
            <div className={styles.bodyCard}>
              <div className={styles.bodyCardSect}>
                <img src={thermo} alt="thermo" />
                <div className={styles.bodyCardSectText}>
                  <p className="mohave--regular">TEMP</p>
                  <p className="mohave--regular">
                    {/* {data.temperature && data.temperature.length > 0
                      ? data?.temperature[0]
                      : "0"} */}
                    25°C
                  </p>
                </div>
              </div>
              <div className={styles.bodyCardSect}>
                <img src={liquid} alt="thermo" />
                <div className={styles.bodyCardSectText}>
                  <p className="mohave--regular">HUMD</p>
                  <p className="mohave--regular">
                    {/* {data.humidity && data.humidity.length > 0
                      ? data?.humidity[0]
                      : "0"} */}
                    50%
                  </p>
                </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "32px",
              }}
            >
              <div className={styles.cardGrafik} ref={chartRef1}></div>
              <div className={styles.cardGrafik} ref={chartRef2}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Thermal;
