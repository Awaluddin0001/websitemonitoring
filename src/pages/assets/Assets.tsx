import Lottie from "lottie-react";
import dataPotensi from "@/assets/lottie/dataPotensi.json";
import spaceManagement from "@/assets/lottie/spaceManagement1.json";

import styles from "@/css/module/Asset.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";

export default function Assets() {
  const navigate = useNavigate();
  return (
    <>
      <HeadPageMonitoring title="Pilih Antara Data atau Denah - TTC Pengayoman" />
      <div className={styles.groupingChoice}>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/datapotensi/category/")}
        >
          <Lottie
            animationData={dataPotensi}
            loop={true}
            style={{ height: "590px" }}
          />
          <h2>Data Potensi</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/space/")}
        >
          <Lottie
            animationData={spaceManagement}
            loop={true}
            style={{ height: "590px" }}
          />
          <h2>Manajemen Ruangan</h2>
        </motion.div>
      </div>
    </>
  );
}
