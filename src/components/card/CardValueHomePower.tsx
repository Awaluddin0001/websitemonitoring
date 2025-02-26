import styles from "@/css/module/Card.module.css";
import { useEffect, useState } from "react";

export default function CardValueHomePower({
  title,
  value,
  cardColor,
  valueColor,
  timestamp,
  width = "auto",
  height = "auto",
  tip,
}: {
  title: string;
  value: Promise<string> | Promise<number> | string | number;
  cardColor: string;
  valueColor: string;
  timestamp: string;
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
      className={styles.cardValueContainerHomePower}
      style={{ backgroundColor: cardColor, width, height }}
      onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
      onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
    >
      <h2 style={{ color: valueColor, fontSize: "1.8rem", fontWeight: "600" }}>
        {title}
      </h2>
      <p style={{ color: valueColor, fontSize: "3rem", fontWeight: "500" }}>
        {cardValue}
      </p>
      <p style={{ color: valueColor, fontSize: "1.45rem", fontWeight: "500" }}>
        {timestamp}
      </p>

      {/* Conditionally render tooltip */}
      {tip && showTooltip && <div className={styles.tooltip}>{tip}</div>}
    </div>
  );
}
