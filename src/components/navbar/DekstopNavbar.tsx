import { motion } from "framer-motion";
import styles from "@/css/module/Desktop.module.css";
// import logo from "@/assets/svg/logowhite.svg";
import logo from "@/assets/svg/logoonly.svg";
import DesktopIconBar from "./DesktopIconBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const objUserData = JSON.parse(userData);
      setUserRole(objUserData.role);
    }
  }, []);

  const logOutHandle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const navigate = useNavigate();
    navigate("/login");
  };

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
          <DesktopIconBar to="/main/dashboard" icon="dashboard" />
          <DesktopIconBar to="/main/monitoring" icon="monitoring" />
          {userRole !== "UR10" && (
            <>
              <DesktopIconBar to="/main/assets" icon="asset" />
              <DesktopIconBar to="/main/checklist" icon="checklist" />
              <DesktopIconBar to="/main/admin" icon="admin" />
              <DesktopIconBar to="/main/supervisor" icon="supervisor" />
            </>
          )}
        </div>
      </motion.div>
      <motion.div className={styles.navbarGroupingBottom}>
        <DesktopIconBar to="/main/setting" icon="setting" />
        <DesktopIconBar to="/login" icon="logout" pressButton={logOutHandle} />
      </motion.div>
    </motion.nav>
  );
}
