import CircleButton from "./CircleButton";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "@/css/module/Navbar.module.css";

const NavBar = ({
  isLabel,
  setIsLabel,
}: {
  isLabel: boolean;
  setIsLabel: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className={styles.navbarContainer}
      animate={{
        width: isLabel ? "8%" : "4%",
      }}
    >
      <motion.div
        className={styles.labelSwitch}
        onClick={() => setIsLabel(!isLabel)}
      >
        <motion.p
          animate={{
            transform: isLabel ? "rotate(0deg)" : "rotate(-180deg)",
          }}
        >
          {isLabel ? "-" : "+"}
        </motion.p>
      </motion.div>
      <nav className={styles.navbarWrapper}>
        <CircleButton to="/" label="Home" icon="home" isLabel={isLabel} />
        <CircleButton
          to="/power"
          label="Power"
          icon="power"
          isLabel={isLabel}
        />
        <CircleButton
          to="/cooling"
          label="Thermal"
          icon="snow"
          isLabel={isLabel}
        />
        <CircleButton to="/gas" label="Fire" icon="gas" isLabel={isLabel} />
        <CircleButton
          to="/liquid"
          label="Fuel"
          icon="liquid"
          isLabel={isLabel}
        />
        <CircleButton
          to="/assets"
          label="Asset"
          icon="asset"
          isLabel={isLabel}
        />
        <CircleButton to="/space" label="Room" icon="room" isLabel={isLabel} />
      </nav>
    </motion.div>
  );
};

export default NavBar;
