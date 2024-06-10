import  {useState} from "react";
import styles from "@/css/module/Desktop.module.css";
import { BasicReactProps } from "@/types/basicTypes";
import { motion } from "framer-motion";

export default function Desktopdash({children}: BasicReactProps) {
    const [isLabel, setIsLabel] = useState<boolean>(true);
    return (
      <div className={styles.fullScreen}>
        <div className="centerPanel">
          <div className="container">
            {/* <NavBar isLabel={isLabel} setIsLabel={setIsLabel} /> */}
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
}
