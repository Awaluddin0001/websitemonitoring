import styles from "@/css/module/Error.module.css";
import Lottie from "lottie-react";
import errorserver from "@/assets/lottie/errorserver.json";
export default function MonitoringDown() {
  return (
    <div className={styles.loadingWrapper}>
      <Lottie
        animationData={errorserver}
        loop={true}
        style={{
          width: "35%",
        }}
      />
      <h4>Mohon Maaf, Sepertinya Server Lagi Bermasalah</h4>
    </div>
  );
}
