import styles from "@/css/module/Monitoring.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import air from "@/assets/svg/fan.svg";
import crane from "@/assets/svg/crane.svg";
import electrical from "@/assets/svg/thunder.svg";
import apar from "@/assets/svg/apar.svg";
import house from "@/assets/svg/house.svg";
import tank from "@/assets/svg/tank.svg";
import funiture from "@/assets/svg/sofa.svg";
import lamp from "@/assets/svg/lamp.svg";
import server from "@/assets/svg/server.svg";
import pump from "@/assets/svg/pump.svg";
import safety from "@/assets/svg/safety.svg";
import security from "@/assets/svg/security.svg";

export default function CategoryNavbar({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  link9,
  link10,
  link11,
  link12,
}: {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
  link6: string;
  link7: string;
  link8: string;
  link9: string;
  link10: string;
  link11: string;
  link12: string;
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.groupingChoiceGrid}>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link1}`)}
      >
        <img src={air} alt="fan" />
        <h2>Air Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link2}`)}
      >
        <img src={crane} alt="conveyance" />
        <h2>Conveyance Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link3}`)}
      >
        <img src={electrical} alt="power" />
        <h2>Electrical Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link4}`)}
      >
        <img src={apar} alt="extinguish" />
        <h2>Extinguish Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link5}`)}
      >
        <img src={house} alt="finishing" />
        <h2>Finishing Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link6}`)}
      >
        <img src={funiture} alt="furniture" />
        <h2>Furniture Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link7}`)}
      >
        <img src={lamp} alt="lamp" />
        <h2>Lamp Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link8}`)}
      >
        <img src={tank} alt="tank" />
        <h2>Liquid Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link9}`)}
      >
        <img src={server} alt="server" />
        <h2>Network IT</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link10}`)}
      >
        <img src={pump} alt="pump" />
        <h2>Pump Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link11}`)}
      >
        <img src={safety} alt="safety" />
        <h2>Safety Building</h2>
      </motion.div>
      <motion.div
        className={styles.cardChoiceGrid}
        whileHover={{
          scale: 1.02,
          boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
          transition: { duration: 0.2 },
        }}
        onClick={() => navigate(`${link12}`)}
      >
        <img src={security} alt="security" />
        <h2>Security Building</h2>
      </motion.div>
    </div>
  );
}
