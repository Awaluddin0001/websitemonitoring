import { useState, useRef, useEffect } from "react";
import io from "socket.io-client";
import styles from "@/css/module/Power.module.css";
import listrik from "@/assets/svg/power.svg";
import Lottie from "lottie-react";
import graphLoading from "@/assets/lottie/graphLoading.json";
import { useDrawChart } from "@/hooks/useDrawChart";

// Define the type for the data
interface DataPoint {
  date: Date;
  value: number;
}

const socket = io("http://localhost:3000");

function Power() {
  const [btnActive, setBtnActive] = useState("vl");
  const [graphData1, setGraphData1] = useState(true);
  const chartRef1 = useRef<HTMLDivElement>(null);
  const chartRef2 = useRef<HTMLDivElement>(null);
  const chartRef3 = useRef<HTMLDivElement>(null);

  const [voltageData, setVoltageData] = useState();
  const [currentData, setCurrentData] = useState();
  const [powerData, setPowerData] = useState();

  useEffect(() => {
    socket.on("voltageData", (data) => {
      console.log("Voltage Data:", data);
      setVoltageData(data);
    });

    socket.on("currentData", (data) => {
      console.log("Current Data:", data);
      setCurrentData(data);
    });

    socket.on("powerData", (data) => {
      console.log("Power Data:", data);
      setPowerData(data);
    });

    socket.on("error", (err) => {
      console.error("Error:", err);
    });

    return () => {
      socket.off("voltageData");
      socket.off("currentData");
      socket.off("powerData");
      socket.off("error");
    };
  }, []);

  const requestData = (type) => {
    if (type === "vl") {
      socket.emit("readVoltage");
    } else if (type === "i") {
      socket.emit("readCurrent");
    } else if (type === "w") {
      socket.emit("readPower");
    }
  };

  // Generate dummy data
  const generateDummyData1 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (380 - 210) + 210).toFixed(2)), // Random values between 210 and 380
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 500); // Delay of 500 milliseconds
    });
  };

  const generateDummyData2 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (14 - 4) + 4).toFixed(2)), // Random values between 4 and 14
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 500); // Delay of 500 milliseconds
    });
  };

  const generateDummyData3 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (50 - 10) + 10).toFixed(2)), // Random values between 10 and 50
          });
        }
        resolve(data);
        setGraphData1(false);
      }, 500); // Delay of 500 milliseconds
    });
  };

  useDrawChart(
    generateDummyData1(),
    chartRef1,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [210, 380],
    "#305DFF",
    "VOLTAGE",
    0.6,
    "1.4rem",
    "",
    " Volt"
  );
  useDrawChart(
    generateDummyData2(),
    chartRef2,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [4, 14],
    "#305DFF",
    "AMPERE",
    0.6,
    "1.4rem",
    "",
    " Ampere"
  );
  useDrawChart(
    generateDummyData3(),
    chartRef3,
    [new Date(2024, 4, 1), new Date(2024, 4, 30)],
    [10, 50],
    "#305DFF",
    "KILO WATT",
    0.6,
    "1.4rem",
    "",
    " kW"
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
          <h1>POWER SYSTEM - TTC PENGAYOMAN</h1>
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
            <div>FACILITY LOAD</div>
            <div>IT LOAD</div>
          </div>
          <div className={styles.inputDateWraper}>
            {/* <div className="wraper--date__filter">
              <label htmlFor="start" className="date-label">
                BUILDING FLOOR
              </label>
              <select name="floor" className="select-input bebasneue--regular">
                <option>Floor 1</option>
                <option>Floor 2</option>
                <option>Floor 3</option>
                <option>Floor 4</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionInfo}>
          <div className={styles.card}>
            <div className={styles.headerCard}>
              <img src={listrik} alt="listrik" />
              <p>UPS 2</p>
            </div>
            <div className={styles.bodyCard}>
              <div className={styles.valueMeters}>
                {btnActive === "vl" ? (
                  voltageData ? (
                    <>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {voltageData.v1[1] / 100}
                        </p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {voltageData.v2[1] / 100}
                        </p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {voltageData.v3[1] / 100}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">220</p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">220</p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">220</p>
                      </div>
                    </>
                  )
                ) : btnActive === "i" ? (
                  currentData ? (
                    <>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {currentData.i1[1] / 100}
                        </p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {currentData.i2[1] / 100}
                        </p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">
                          {currentData.i3[1] / 100}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">4</p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">4</p>
                      </div>
                      <div className={styles.valueMeter}>
                        <p className="mohave--semibold">4</p>
                      </div>
                    </>
                  )
                ) : powerData ? (
                  <>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">
                        {powerData.totalActivePower[1] / 100}
                      </p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">0</p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">0</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">90</p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">90</p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">90</p>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.unitMeters}>
                {btnActive === "vl" ? (
                  <>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">V</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">V</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">V</p>
                    </div>
                  </>
                ) : btnActive === "i" ? (
                  <>
                    {" "}
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">A</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">A</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">A</p>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">kW</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">kW</p>
                    </div>
                    <div className={styles.unitMeter}>
                      <p className="mohave--semibold">kW</p>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.buttonMeters}>
                <div
                  className={styles.buttonMeter}
                  style={{
                    backgroundColor: btnActive === "vl" ? "#305dff" : "#ababab",
                  }}
                  onClick={() => {
                    setBtnActive("vl");
                    requestData("vl");
                  }}
                >
                  <p className="mohave--semibold">V.L</p>
                </div>
                <div
                  className={styles.buttonMeter}
                  style={{
                    backgroundColor: btnActive === "i" ? "#305dff" : "#ababab",
                  }}
                  onClick={() => {
                    setBtnActive("i");
                    requestData("i");
                  }}
                >
                  <p className="mohave--semibold">I</p>
                </div>
                <div
                  className={styles.buttonMeter}
                  style={{
                    backgroundColor: btnActive === "w" ? "#305dff" : "#ababab",
                  }}
                  onClick={() => {
                    setBtnActive("w");
                    requestData("w");
                  }}
                >
                  <p className="mohave--semibold">W</p>
                </div>
              </div>
            </div>
          </div>
          {btnActive === "vl" ? (
            graphData1 ? (
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
              <div className={styles.cardGrafik} ref={chartRef1}></div>
            )
          ) : (
            ""
          )}
          {btnActive === "i" ? (
            graphData1 ? (
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
              <div className={styles.cardGrafik} ref={chartRef2}></div>
            )
          ) : (
            ""
          )}
          {btnActive === "w" ? (
            graphData1 ? (
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
              <div className={styles.cardGrafik} ref={chartRef3}></div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Power;
