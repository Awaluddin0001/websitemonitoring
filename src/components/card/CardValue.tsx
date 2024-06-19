import styles from "@/css/module/Card.module.css";

export default function CardValue({
  title,
  value,
  cardColor,
  valueColor,
  width = "auto",
  height = "auto",
}: {
  title: string;
  value: string;
  cardColor: string;
  valueColor: string;
  width?: string;
  height?: string;
}) {
  return (
    <div
      className={styles.cardValueContainer}
      style={{ backgroundColor: cardColor, width, height }}
    >
      <h2>{title}</h2>
      <p style={{ color: valueColor }}>{value}</p>
    </div>
  );
}
