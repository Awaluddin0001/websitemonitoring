import { useState, useRef } from "react";
import Lottie from "lottie-react";

import { useDrawChart } from "@/hooks/useDrawChart";
import AnalogPressure from "@/components/svg/AnalogPressure";
import FirePressure from "@/components/svg/FirePressure";
import graphLoading from "@/assets/lottie/graphLoading.json";
import styles from "@/css/module/Gas.module.css";

interface DataPoint {
  date: Date;
  value: number;
}

function Fire() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [graphData1, setGraphData1] = useState(true);
  const generateDummyData1 = (): Promise<DataPoint[]> => {
    return new Promise((resolve) => {
      // Simulate delay with setTimeout
      setTimeout(() => {
        const data: DataPoint[] = [];
        for (let i = 1; i <= 30; i++) {
          data.push({
            date: new Date(2024, 4, i), // May 2024
            value: parseFloat((Math.random() * (1000 - 200) + 200).toFixed(2)), // Random values between 1.9 and 2.5
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
    [200, 1000],
    "#305DFF",
    "APART",
    0.22,
    "0.8rem",
    "",
    " psi"
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
          <h1>FIRE SYSTEM - TTC PENGAYOMAN</h1>
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
          <div className={styles.inputDateWraper}></div>
        </div>
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.sectionInfo}>
          <div className={styles.sectionDetail}>
            <div className={styles.card}>
              <div className={styles.headerCard}>
                <AnalogPressure volume={90} color="#0081D1" />
              </div>
              <div className={styles.bodyCard}>
                <div className={styles.valueMeters}>
                  <div className={styles.valueMeterFlex}>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">900</p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">psi</p>
                    </div>
                  </div>
                  <div className={styles.valueMeterFlex}>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">90</p>
                    </div>
                    <div className={styles.valueMeter}>
                      <p className="mohave--semibold">%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className={styles.cardGrafik} ref={chartRef}></div>
            )}
          </div>
          <div className={styles.sectionImage}>
            <FirePressure volume={90} />
            <div>
              <h6>900/1000 psi</h6>
              <h6>90%</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fire;
