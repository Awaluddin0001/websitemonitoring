import { useState } from "react";
import NavBar from "@/components/oldnavbar/NavBar";
import { BasicReactProps } from "@/types/basicTypes";
import styles from "@/css/module/FullScreen.module.css";
import { motion } from "framer-motion";

export default function FullScreen({ children }: BasicReactProps) {
  const [isLabel, setIsLabel] = useState<boolean>(true);
  return (
    <div className={styles.fullScreen}>
      <div className="centerPanel">
        <div className="container">
          <NavBar isLabel={isLabel} setIsLabel={setIsLabel} />
          <motion.div
            className={styles.pageAction}
            animate={{
              width: isLabel ? "90%" : "94%",
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
