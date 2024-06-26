import { motion } from "framer-motion";
import styles from "@/css/module/Desktop.module.css";
// import logo from "@/assets/svg/logowhite.svg";
import logo from "@/assets/svg/logoonly.svg";
import DesktopIconBar from "./DesktopIconBar";
import { useSelector } from "react-redux";

const variants = {
  hidden: {
    width: "0rem",
    transform: "translateX(-100px)",
    opacity: 0,
    transition: { duration: 0.1 },
  },
  visible: {
    // width: "16.5rem",
    width: "10rem",
    transform: "translateX(0px)",
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

export default function DekstopNavbar() {
  const showNavbar = useSelector(
    (state: { navbar: { showNavbar: boolean } }) => state.navbar.showNavbar
  );
  return (
    <motion.nav
      className={styles.navbarDesktop}
      variants={variants}
      initial="hidden"
      animate={showNavbar ? "visible" : "hidden"}
    >
      <motion.div className={styles.navbarGroupingTop}>
        <div style={{ width: "60%" }}>
          <img src={logo} alt="logo pagetsel" className={styles.logo} />
        </div>
        <div className={styles.navbarGrouping}>
          <DesktopIconBar to="/" label="dashboard" icon="dashboard" />
          <DesktopIconBar
            to="/monitoring"
            label="monitoring"
            icon="monitoring"
          />
          <DesktopIconBar to="/assets" label="assets" icon="asset" />
          <DesktopIconBar to="/checklist" label="checklist" icon="checklist" />
          <DesktopIconBar to="/admin" label="admin" icon="admin" />
        </div>
      </motion.div>
      <motion.div className={styles.navbarGroupingBottom}>
        <DesktopIconBar to="/setting" label="setting" icon="setting" />
        <DesktopIconBar to="/logout" label="logout" icon="logout" />
      </motion.div>
    </motion.nav>
  );
}
