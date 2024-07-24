import DashboardSvg from "@/components/svg/DashboardSvg";
import MonitorSvg from "@/components/svg/MonitorSvg";
import ChecklistSvg from "@/components/svg/ChecklistSvg";
import SettingSvg from "@/components/svg/SettingSvg";
import LogoutSvg from "@/components/svg/LogoutSvg";
import AdminSvg from "@/components/svg/AdminSvg";
import BuildingSvg from "../svg/BuildingSvg";
import styles from "@/css/module/CircleButton.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import RoomSvg from "@/components/svg/RoomSvg";
import { useState } from "react";
export default function DesktopIconBar({
  to,
  icon,
  pressButton,
}: {
  to: string;
  icon: string;
  pressButton?: () => void;
}) {
  const [showButton, setShowButton] = useState(true);
  const location = useLocation();
  const isActive =
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(`${to}`);

  const showLabel2 = () => {
    setShowButton(false);
    setTimeout(() => setShowButton(true), 2000);
  };

  return (
    <motion.div
      onHoverStart={showLabel2}
      onHoverEnd={() => setShowButton(true)}
      onClick={pressButton}
    >
      <Link to={to} className={styles.buttonWrapper}>
        <motion.div
          className={
            showButton
              ? styles.circleButton
              : styles.circleButton + " " + styles.hide
          }
          // whileHover={{ scale: 0.9 }}
          // whileTap={{ scale: 0.9 }}
          animate={{
            // scale: isActive ? 1.0 : 0.8,
            backgroundColor: isActive ? "#FFD700" : "#FFFFFF",
            boxShadow: isActive
              ? "inset 0px 0px 10px 5px rgba(139,0,0,0.2)"
              : "inset 0px 0px 10px 5px rgba(0,0,0,0.2)",
          }}
          // transition={{
          //   type: "spring",
          //   stiffness: 500,
          //   damping: 30,
          //   delay: isActive ? 0 : 0.1,
          // }}
          // onHoverStart={() => setShowButton(false)}
          // onHoverEnd={() => setShowButton(true)}
        >
          {icon === "dashboard" ? (
            <DashboardSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="30"
              height="30"
            />
          ) : icon === "monitoring" ? (
            <MonitorSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="31"
              height="30"
            />
          ) : icon === "asset" ? (
            <BuildingSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="26"
              height="30"
            />
          ) : icon === "checklist" ? (
            <ChecklistSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="26"
              height="30"
            />
          ) : icon === "setting" ? (
            <SettingSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="30"
              height="30"
            />
          ) : icon === "admin" ? (
            <AdminSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="27"
              height="30"
            />
          ) : (
            <LogoutSvg
              color={isActive ? "#8b0000" : "#000000"}
              width="31"
              height="30"
            />
          )}
        </motion.div>
        <motion.div
          className={
            showButton
              ? styles.buttonName + " " + styles.hide
              : styles.buttonName
          }
          animate={{
            color: showButton ? "#FFFFFF" : "#FFD700",
          }}
        >
          <h4>
            {icon === "dashboard"
              ? "Ringkasan"
              : icon === "monitoring"
              ? "Pantauan"
              : icon === "asset"
              ? "Aset"
              : icon === "checklist"
              ? "Checklist"
              : icon === "setting"
              ? "Pengaturan"
              : icon === "admin"
              ? "Admin"
              : "Keluar"}
          </h4>
        </motion.div>
      </Link>
    </motion.div>
  );
}
