import styles from "@/css/module/Card.module.css";

export default function CardParameterHome() {
  return (
    <div className={styles.cardExplainParameter}>
      <h1>Parameter Kartu</h1>
      <div className={styles.cardParameterHome}>
        <div className={styles.parameterTemperature}>
          <h2>Parameter Warna Kartu Suhu</h2>
          <div className={styles.parameterCard}>
            <div className={styles.color1}></div>
            <h3>{"<19°C"}</h3>
            <h3>Dingin</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"19°C - 28°C"}</h3>
            <h3>Sejuk</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{">29°C"}</h3>
            <h3>Panas</h3>
          </div>
        </div>
        <div className={styles.parameterHumidity}>
          <h2>Parameter Warna Kartu Kelembaban</h2>
          <div className={styles.parameterCard}>
            <div className={styles.color1}></div>
            <h3>{">60%"}</h3>
            <h3>Lembab</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"30% - 59%"}</h3>
            <h3>Normal</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{"0% - 29%"}</h3>
            <h3>Kering</h3>
          </div>
        </div>
        <div className={styles.parameterPue}>
          <h2>Parameter Warna Kartu PUE</h2>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"<1.5"}</h3>
            <h3>Sangat Efisien</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color4}></div>
            <h3>{"1.6 - 2.5"}</h3>
            <h3>Efisien</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{">2.5"}</h3>
            <h3>Kurang Efisien</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
