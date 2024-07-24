import Lottie from "lottie-react";
import loadingFetch from "@/assets/lottie/dataLoading.json";
import styles from "@/css/module/Loading.module.css";
export default function LoadingPage() {
  return (
    <div className={styles.loadingWrapper}>
      <Lottie
        animationData={loadingFetch}
        loop={true}
        style={{
          width: "50%",
        }}
      />
      <h4>Loading...</h4>
      <h4>Mohon Tunggu, Kami Sedang Memuat Data</h4>
    </div>
  );
}
