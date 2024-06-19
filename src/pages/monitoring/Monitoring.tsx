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
          onClick={() => navigate("/power")}
        >
          <Lottie animationData={electrical} loop={true} />
          <h2>Power Monitoring System</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/thermal")}
        >
          <Lottie animationData={thermal} loop={true} />
          <h2>Thermal Monitoring System</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/bbm")}
        >
          <Lottie animationData={bbm} loop={true} />
          <h2>BBM Monitoring System</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/fire")}
        >
          <Lottie animationData={fire} loop={true} />
          <h2>Fire Monitoring System</h2>
        </motion.div>
      </div>
    </>
  );
}
