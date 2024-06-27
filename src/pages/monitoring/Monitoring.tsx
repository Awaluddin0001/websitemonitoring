import bbm from "@/assets/lottie/Bbm.json";
import electrical from "@/assets/lottie/Electrical.json";
import fire from "@/assets/lottie/Fire.json";
import thermal from "@/assets/lottie/Thermal.json";
import Lottie from "lottie-react";
import styles from "@/css/module/Monitoring.module.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Monitoring() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.groupingChoice}>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/monitoring/power")}
        >
          <Lottie animationData={electrical} loop={true} />
          <h2>Sistem Pemantauan Kelistrikan</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/monitoring/thermal")}
        >
          <Lottie animationData={thermal} loop={true} />
          <h2>Sistem Pemantauan Termal</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/monitoring/bbm")}
        >
          <Lottie animationData={bbm} loop={true} />
          <h2>Sistem Pemantauan BBM</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/monitoring/fire")}
        >
          <Lottie animationData={fire} loop={true} />
          <h2>Sistem Pemantuan Kebakaran</h2>
        </motion.div>
      </div>
    </>
  );
}
