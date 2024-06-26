import DashboardSvg from "@/components/svg/DashboardSvg";
import MonitorSvg from "@/components/svg/MonitorSvg";
import RoomSvg from "@/components/svg/RoomSvg";
import ChecklistSvg from "@/components/svg/ChecklistSvg";
import SettingSvg from "@/components/svg/SettingSvg";
import LogoutSvg from "@/components/svg/LogoutSvg";
import AdminSvg from "@/components/svg/AdminSvg";
import styles from "@/css/module/Desktop.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export default function DesktopIconBar({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: string;
}) {
  const location = useLocation();
  const isActive =
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(`${to}`);

  return (
    <Link to={to} className={styles.buttonWrapper}>
      {isActive ? <div className={styles.boxLabel}></div> : ""}
      <motion.div
        className={styles.choiceButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: isActive ? 0 : 0.1,
        }}
      >
        {icon === "dashboard" ? (
          <DashboardSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="18"
            height="18"
          />
        ) : icon === "monitoring" ? (
          <MonitorSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="20"
            height="18"
          />
        ) : icon === "asset" ? (
          <RoomSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="16"
            height="18"
          />
        ) : icon === "checklist" ? (
          <ChecklistSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="16"
            height="18"
          />
        ) : icon === "setting" ? (
          <SettingSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="18"
            height="18"
          />
        ) : icon === "admin" ? (
          <AdminSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="16"
            height="18"
          />
        ) : (
          <LogoutSvg
            color={isActive ? "#FFD700" : "#FFFFFF"}
            width="19"
            height="18"
          />
        )}

        <motion.span
          className={styles.label}
          animate={{
            color: isActive ? "#FFD700" : "#FFFFFF",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: isActive ? 0 : 0.1,
          }}
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}
