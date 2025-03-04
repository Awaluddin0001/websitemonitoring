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
import HeadPageMonitoring from "../header/HeadPageMonitoring";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [categoryData, setCategoryData] = useState<any>();
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

  useEffect(() => {
    const takeDataCategory = async () => {
      const category = await axios.get(
        `https://192.168.1.62:2001/api/v1/dapot/category/count`
        // `https://apipengayoman.ipagemakassar.com/api/v1/dapot/category/count`
      );
      console.log(category.data);
      setCategoryData(category.data);
    };
    takeDataCategory();
  }, []);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <HeadPageMonitoring title="Pilih Category Data Potensi - TTC Pengayoman" />
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
              backgroundColor: "rgb(6 151 82)",
              transition: { duration: 0.2 },
            }}
            onClick={() => navigate(`${link1}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={air} alt="fan" />
              {/* <h2>Air Building</h2> */}
              <h2>Tata Udara Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Air Device: {categoryData?.air ?? 0}</p>
              <p>Cooling Device: {categoryData?.cooling ?? 0}</p>
              <p>Heating Device: {categoryData?.heating ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link2 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link2}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={crane} alt="conveyance" />
              {/* <h2>Conveyance Building</h2> */}
              <h2>Alat Pengangkut</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Conveyance: {categoryData?.conveyance ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link3 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link3}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={electrical} alt="power" />
              {/* <h2>Electrical Building</h2> */}
              <h2>Kelistrikan Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Battery: {categoryData?.battery ?? 0}</p>
              <p>Cubicle: {categoryData?.cubicle ?? 0}</p>
              <p>Genset: {categoryData?.genset ?? 0}</p>
              <p>Lvmdp: {categoryData?.lvmdp ?? 0}</p>
              <p>Panel: {categoryData?.panel ?? 0}</p>
              <p>Rectifier: {categoryData?.rectifier ?? 0}</p>
              <p>Trafo: {categoryData?.trafo ?? 0}</p>
              <p>Ups: {categoryData?.ups ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link4 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link4}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={apar} alt="extinguish" />
              {/* <h2>Extinguish Building</h2> */}
              <h2>Pemadam Api gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Extinguish: {categoryData?.extinguish ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link5 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link5}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={house} alt="finishing" />
              {/* <h2>Finishing Building</h2> */}
              <h2>Finishing Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Ceiling: {categoryData?.ceiling ?? 0}</p>
              <p>Ceramic: {categoryData?.ceramic ?? 0}</p>
              <p>Door: {categoryData?.door ?? 0}</p>
              <p>Mebel: {categoryData?.mebel ?? 0}</p>
              <p>Wallpaper: {categoryData?.wallpaper ?? 0}</p>
              <p>Window: {categoryData?.window ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link6 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link6}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={funiture} alt="furniture" />
              {/* <h2>Furniture</h2> */}
              <h2>Perabotan gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Furniture: {categoryData?.furniture ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link7 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link7}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={lamp} alt="lamp" />
              {/* <h2>Lighting Building</h2> */}
              <h2>Pencahayaan Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Lighting: {categoryData?.lighting ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link8 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link8}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={tank} alt="tank" />
              {/* <h2>Liquid Building</h2> */}
              <h2>Tangki Cairan Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Tangki: {categoryData?.fluid_tank ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link9 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link9}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={server} alt="server" />
              {/* <h2>Network IT</h2> */}
              <h2>Perangkat IT</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Computer: {categoryData?.computer ?? 0}</p>
              <p>Firewalls: {categoryData?.firewalls ?? 0}</p>
              <p>Patch_panels: {categoryData?.patch_panels ?? 0}</p>
              <p>Rack_server: {categoryData?.rack_server ?? 0}</p>
              <p>Routers: {categoryData?.routers ?? 0}</p>
              <p>Storage: {categoryData?.storage ?? 0}</p>
              <p>Switches: {categoryData?.switches ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link10 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link10}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={pump} alt="pump" />
              {/* <h2>Pump Building</h2> */}
              <h2>Pompa gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Pump: {categoryData?.pump ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link11 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link11}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={safety} alt="safety" />
              {/* <h2>Safety Tools</h2> */}
              <h2>Alat Keselamatan</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Safety: {categoryData?.safety ?? 0}</p>
            </div>
          </motion.div>
        )}
        {link12 && (
          <motion.div
            className={styles.cardChoiceGrid}
            whileHover={{
              scale: 1.02,
              boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
              transition: { duration: 0.2 },
              backgroundColor: "rgb(6 151 82)",
            }}
            onClick={() => navigate(`${link12}`)}
          >
            <div className={styles.cardHeadGrid}>
              <img src={security} alt="security" />
              {/* <h2>Security Building</h2> */}
              <h2>Keamanan Gedung</h2>
            </div>
            <div className={styles.groupingDetailCount}>
              <p>Alarm: {categoryData?.alarm ?? 0}</p>
              <p>Button: {categoryData?.button ?? 0}</p>
              <p>Cctv: {categoryData?.cctv ?? 0}</p>
              <p>Detector: {categoryData?.detector ?? 0}</p>
              <p>Sound: {categoryData?.sound ?? 0}</p>
              <p>Video_recording: {categoryData?.video_recording ?? 0}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
