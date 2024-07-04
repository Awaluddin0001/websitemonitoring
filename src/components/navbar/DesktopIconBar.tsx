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
export default function DesktopIconBar({
  to,
  icon,
}: {
  to: string;
  label: string;
  icon: string;
  isLabel?: boolean;
}) {
  const location = useLocation();
  const isActive =
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(`${to}`);

  return (
    <Link to={to} className={styles.buttonWrapper}>
      <motion.div
        className={styles.circleButton}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: isActive ? 1.0 : 0.8,
          backgroundColor: isActive ? "#FFD700" : "#FFFFFF",
          boxShadow: isActive
            ? "inset 0px 0px 10px 5px rgba(139,0,0,0.2)"
            : "inset 0px 0px 10px 5px rgba(0,0,0,0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: isActive ? 0 : 0.1,
        }}
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
    </Link>
  );
}
