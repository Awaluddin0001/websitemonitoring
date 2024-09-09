import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Monitoring.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function SpaceList() {
  const navigate = useNavigate();
  return (
    <>
      <HeadPageMonitoring title="Pilih Denah Lantai - TTC Pengayoman" />
      <div className={styles.groupingChoice}>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/space/lantai1")}
        >
          <h2 style={{ fontSize: "7rem" }}>1</h2>
          <h2>Lantai</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/space/lantai2")}
        >
          <h2 style={{ fontSize: "7rem" }}>2</h2>
          <h2>Lantai</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/space/lantai3")}
        >
          <h2 style={{ fontSize: "7rem" }}>3</h2>
          <h2>Lantai</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("/main/assets/space/lantai4")}
        >
          <h2 style={{ fontSize: "7rem" }}>4</h2>
          <h2>Lantai</h2>
        </motion.div>
      </div>
    </>
  );
}
