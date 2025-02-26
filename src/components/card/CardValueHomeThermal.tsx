import styles from "@/css/module/Card.module.css";
import { useEffect, useState } from "react";

export default function CardValueHomeThermal({
  title,
  valueTemp,
  valueHumd,
  backgroundColorTemp,
  foregroundColorTemp,
  backgroundColorHumd,
  foregroundColorHumd,
  width = "auto",
  height = "auto",
}: {
  title: string;
  valueTemp: Promise<string> | Promise<number> | string | number;
  valueHumd: Promise<string> | Promise<number> | string | number;
  backgroundColorTemp: string;
  foregroundColorTemp: string;
  backgroundColorHumd: string;
  foregroundColorHumd: string;
  width?: string;
  height?: string;
  tip?: string;
}) {
  const [cardValueTemp, setCardValueTemp] = useState<string | number>("0");
  const [cardValueHumd, setCardValueHumd] = useState<string | number>("0");

  useEffect(() => {
    const returnValue = async () => {
      if (typeof valueTemp === "string" && typeof valueHumd === "string") {
        setCardValueTemp(valueTemp);
        setCardValueHumd(valueHumd);
      } else {
        const dataTemp = await valueTemp;
        const dataHumd = await valueHumd;
        setCardValueTemp(dataTemp);
        setCardValueHumd(dataHumd);
      }
    };
    returnValue();
  }, [valueTemp, valueHumd]);

  return (
    <div
      className={styles.cardValueContainerHomeThermal}
      style={{ backgroundColor: "#000", width, height }}
    >
      <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "600" }}>
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        <p
          style={{
            color: foregroundColorTemp,
            fontSize: "2.6rem",
            fontWeight: "500",
            backgroundColor: backgroundColorTemp,
            padding: "0.2rem 0.4rem",
            borderRadius: "5px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {cardValueTemp}
        </p>
        <p style={{ color: "#fff", fontSize: "3rem", fontWeight: "500" }}>|</p>
        <p
          style={{
            color: foregroundColorHumd,
            fontSize: "2.6rem",
            fontWeight: "500",
            backgroundColor: backgroundColorHumd,
            padding: "0.2rem 0.4rem",
            borderRadius: "5px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {cardValueHumd}
        </p>
      </div>
    </div>
  );
}
