import Lottie from "lottie-react";
import loading from "@/assets/lottie/dataLoading.json";
import styles from "@/css/module/Loading.module.css";
export default function LoadingFetch() {
  return (
    <div className={styles.loadingWrapper}>
      <Lottie
        animationData={loading}
        loop={true}
        style={{
          width: "50%",
        }}
      />
      <h4>Loading...</h4>
    </div>
  );
}
