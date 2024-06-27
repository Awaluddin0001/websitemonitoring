import styles from "@/css/module/Monitoring.module.css";
import room from "@/assets/svg/assetRoom.svg";
import item from "@/assets/svg/assetItem.svg";
import vendor from "@/assets/svg/assetVendor.svg";
import brand from "@/assets/svg/assetBrand.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function AssetsList() {
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
          onClick={() => navigate("room/")}
        >
          <img src={room} alt="asset per room" />
          <h2>Data Potensi Tiap Lantai</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("category/")}
        >
          <img src={item} alt="asset per item" />
          <h2>Data Potensi Tiap Category</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("vendor/")}
        >
          <img src={vendor} alt="vendor asset" />
          <h2>Data Vendor Tiap Data Potensi</h2>
        </motion.div>
        <motion.div
          className={styles.cardChoice}
          whileHover={{
            scale: 1.02,
            boxShadow: "10px 15px 20px 4px rgba(131, 8, 8, 0.3)",
            transition: { duration: 0.2 },
          }}
          onClick={() => navigate("brand/")}
        >
          <img src={brand} alt="brand asset" />
          <h2>Data Brand Tiap Data Potensi</h2>
        </motion.div>
      </div>
    </>
  );
}
