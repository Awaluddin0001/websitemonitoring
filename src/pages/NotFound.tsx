import styles from "@/css/module/Error.module.css";
import Lottie from "lottie-react";
import PNF from "@/assets/lottie/404PageNotFound.json";
import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
const NotFound = () => (
  <div className={styles.containerNotFound}>
    <HeadPageMonitoring title="Halaman Tidak Ditemukan" />
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={PNF}
        loop={true}
        style={{ width: "90%", transform: "translateY(-10%)" }}
      />
    </div>
  </div>
);

export default NotFound;
