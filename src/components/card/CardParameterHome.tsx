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
            <h3>{"Di bawah 18°C"}</h3>
            <h3>Dingin</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"18°C - 23°C"}</h3>
            <h3>Aman</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color4}></div>
            <h3>{"24°C - 30°C"}</h3>
            <h3>Normal</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{"Di atas 30°C"}</h3>
            <h3>Panas</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color5}></div>
            <h3>{"N/A"}</h3>
            <h3>Tidak aktif</h3>
          </div>
        </div>
        <div className={styles.parameterHumidity}>
          <h2>Parameter Warna Kartu Kelembaban</h2>
          <div className={styles.parameterCard}>
            <div className={styles.color4}></div>
            <h3>{"Di bawah 45%"}</h3>
            <h3>Dalam Perhatian</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color1}></div>
            <h3>{"45% - 60%"}</h3>
            <h3>Normal</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"61% - 70%"}</h3>
            <h3>Dalam Perhatian</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{"Di atas 70%"}</h3>
            <h3>Berbahaya (Lembab)</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color5}></div>
            <h3>{"N/A"}</h3>
            <h3>Tidak aktif</h3>
          </div>
        </div>
        <div className={styles.parameterPue}>
          <h2>Parameter Warna Kartu PUE</h2>
          <div className={styles.parameterCard}>
            <div className={styles.color2}></div>
            <h3>{"Di bawah 1.5"}</h3>
            <h3>Sangat Efisien</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color4}></div>
            <h3>{"1.6 - 2.0"}</h3>
            <h3>Efisien</h3>
          </div>
          <div className={styles.parameterCard}>
            <div className={styles.color3}></div>
            <h3>{"Di atas 2.0"}</h3>
            <h3>Kurang Efisien</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
