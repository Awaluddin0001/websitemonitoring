import styles from "@/css/module/Card.module.css";
import { useEffect, useState } from "react";

export default function CardValue({
  title,
  value,
  cardColor,
  valueColor,
  width = "auto",
  height = "auto",
}: {
  title: string;
  value: Promise<string> | Promise<number> | string | number;
  cardColor: string;
  valueColor: string;
  width?: string;
  height?: string;
}) {
  const [cardValue, setCardValue] = useState<string | number>("0");

  useEffect(() => {
    const returnValue = async () => {
      if (typeof value === "string") {
        setCardValue(value);
      } else {
        const data = await value;
        setCardValue(data);
      }
    };
    returnValue();
  });

  return (
    <div
      className={styles.cardValueContainer}
      style={{ backgroundColor: cardColor, width, height }}
    >
      <h2>{title}</h2>
      <p style={{ color: valueColor }}>{cardValue}</p>
    </div>
  );
}
