import styles from "@/css/module/Error.module.css";
import Lottie from "lottie-react";
import wrong from "@/assets/lottie/wrong.json";
export default function ErrorFetch({ message }: { message: string }) {
  return (
    <div className={styles.loadingWrapper}>
      <Lottie
        animationData={wrong}
        loop={true}
        style={{
          width: "35%",
        }}
      />
      <h4>{message}</h4>
    </div>
  );
}
