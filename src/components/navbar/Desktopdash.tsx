import styles from "@/css/module/Desktop.module.css";
import DekstopNavbar from "./DekstopNavbar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Desktopdash() {
  const showNavbar = useSelector(
    (state: { navbar: { showNavbar: boolean } }) => state.navbar.showNavbar
  );
  return (
    <div className={styles.fullScreen}>
      <motion.div
        className={styles.centerPanel}
        animate={{
          gap: showNavbar ? "2.4rem" : "0rem",
        }}
      >
        <DekstopNavbar />
        <motion.div
          className={styles.pageAction}
          animate={{
            width: showNavbar ? "calc(100% - 8.5rem)" : "100%",
          }}
          transition={{ duration: 0.1 }}
        >
          {/* {children} */}
          <Outlet />
        </motion.div>
      </motion.div>
    </div>
  );
}
