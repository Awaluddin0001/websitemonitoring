import styles from "@/css/module/Card.module.css";
import { useEffect, useState } from "react";
import logoBMKG from "@/assets/png/logoBMKG.png";

export default function CardValueHomeBMKG({
  title,
  valueTemp,
  valueHumd,
  backgroundColorTemp,
  foregroundColorTemp,
  backgroundColorHumd,
  foregroundColorHumd,
  cuacaDesc,
  image,
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
  cuacaDesc: string;
  image: string;
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
      style={{ backgroundColor: "#ddd", width, height }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#000", fontSize: "1.6rem", fontWeight: "600" }}>
          {title}
        </h2>
        <img src={logoBMKG} alt="logo BMKG" style={{ width: "25%" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.2rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          src={image}
          alt="cuaca bmkg"
          style={{ width: "33%", transform: "scale(1.2)" }}
        />
        <p
          style={{
            color: "#000",
            fontSize: "1.4rem",
            fontWeight: "500",
            marginBottom: "0.8rem",
          }}
        >
          {cuacaDesc}
        </p>
      </div>

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
            fontSize: "2.8rem",
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
            fontSize: "2.8rem",
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
