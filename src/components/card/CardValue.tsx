import styles from "@/css/module/Card.module.css";
import { useEffect, useState } from "react";

export default function CardValue({
  title,
  value,
  cardColor,
  valueColor,
  width = "auto",
  height = "auto",
  tip,
}: {
  title: string;
  value: Promise<string> | Promise<number> | string | number;
  cardColor: string;
  valueColor: string;
  width?: string;
  height?: string;
  tip?: string;
}) {
  const [cardValue, setCardValue] = useState<string | number>("0");
  const [showTooltip, setShowTooltip] = useState(false); // Tooltip visibility state

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
  }, [value]);

  return (
    <div
      className={styles.cardValueContainer}
      style={{ backgroundColor: cardColor, width, height }}
      onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
      onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
    >
      <h2>{title}</h2>
      <p style={{ color: valueColor }}>{cardValue}</p>

      {/* Conditionally render tooltip */}
      {tip && showTooltip && <div className={styles.tooltip}>{tip}</div>}
    </div>
  );
}
