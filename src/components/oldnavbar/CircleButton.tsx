import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "@/css/module/CircleButton.module.css";
import AssetSvg from "@/components/svg/AssetSvg";
import GasSvg from "@/components/svg/GasSvg";
import HomeSvg from "@/components/svg/HomeSvg";
import LiquidSvg from "@/components/svg/LiquidSvg";
import PowerSvg from "@/components/svg/PowerSvg";
import RoomSvg from "@/components/svg/RoomSvg";
import SnowSvg from "@/components/svg/SnowSvg";

const CircleButton = ({
  to,
  label,
  icon,
  isLabel,
}: {
  to: string;
  label: string;
  icon: string;
  isLabel?: boolean;
}) => {
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
        {icon === "asset" ? (
          <AssetSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : icon === "gas" ? (
          <GasSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : icon === "home" ? (
          <HomeSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : icon === "liquid" ? (
          <LiquidSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : icon === "power" ? (
          <PowerSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : icon === "room" ? (
          <RoomSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        ) : (
          <SnowSvg
            width="28"
            height="31"
            color={isActive ? "#8b0000" : "#000000"}
          />
        )}
      </motion.div>

      {isLabel && (
        <motion.span
          className={styles.label}
          animate={{
            color: isActive ? "#FFD700" : "#FFFFFF",
            opacity: isLabel ? 1 : 0,
            visibility: isLabel ? "visible" : "hidden",
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
      )}
    </Link>
  );
};

export default CircleButton;
