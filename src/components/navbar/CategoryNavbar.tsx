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
  link1?: string | undefined;
  link2?: string | undefined;
  link3?: string | undefined;
  link4?: string | undefined;
  link5?: string | undefined;
  link6?: string | undefined;
  link7?: string | undefined;
  link8?: string | undefined;
  link9?: string | undefined;
  link10?: string | undefined;
  link11?: string | undefined;
  link12?: string | undefined;
}) {
  const navigate = useNavigate();

  const listLink = [
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
  ];
  const existPage = listLink.filter((link) => link !== undefined);
  return (
    <div
      className={styles.groupingChoiceGrid}
      style={{
        gridTemplateColumns:
          existPage.length > 10
            ? "repeat(6, 1fr)"
            : existPage.length > 8
            ? "repeat(5, 1fr)"
            : "repeat(4, 1fr)",
      }}
    >
      {link1 && (
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
          {/* <h2>Air Building</h2> */}
          <h2>Tata Udara Gedung</h2>
        </motion.div>
      )}
      {link2 && (
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
          {/* <h2>Conveyance Building</h2> */}
          <h2>Alat Pengangkut</h2>
        </motion.div>
      )}
      {link3 && (
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
          {/* <h2>Electrical Building</h2> */}
          <h2>Kelistrikan Gedung</h2>
        </motion.div>
      )}
      {link4 && (
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
          {/* <h2>Extinguish Building</h2> */}
          <h2>Pemadam Api gedung</h2>
        </motion.div>
      )}
      {link5 && (
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
          {/* <h2>Finishing Building</h2> */}
          <h2>Finishing Gedung</h2>
        </motion.div>
      )}
      {link6 && (
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
          {/* <h2>Furniture Building</h2> */}
          <h2>Perabotan gedung</h2>
        </motion.div>
      )}
      {link7 && (
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
          {/* <h2>Lighting Building</h2> */}
          <h2>Pencahayaan Gedung</h2>
        </motion.div>
      )}
      {link8 && (
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
          {/* <h2>Liquid Building</h2> */}
          <h2>Tangki Cairan Gedung</h2>
        </motion.div>
      )}
      {link9 && (
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
          {/* <h2>Network IT</h2> */}
          <h2>Perangkat IT</h2>
        </motion.div>
      )}
      {link10 && (
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
          {/* <h2>Pump Building</h2> */}
          <h2>Pompa gedung</h2>
        </motion.div>
      )}
      {link11 && (
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
          {/* <h2>Safety Tools</h2> */}
          <h2>Alat Keselamatan</h2>
        </motion.div>
      )}
      {link12 && (
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
          {/* <h2>Security Building</h2> */}
          <h2>Keamanan Gedung</h2>
        </motion.div>
      )}
    </div>
  );
}
