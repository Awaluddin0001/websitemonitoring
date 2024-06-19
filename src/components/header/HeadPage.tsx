import { motion } from "framer-motion";
import styles from "@/css/module/HeadPage.module.css";
import togleNavbar from "@/assets/svg/toggleNavbar.svg";
import { navbarAction } from "@/store/index";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
export default function HeadPage({ title }: { title: string }) {
  const dispatch = useDispatch();

  const toggleNavbar = () => {
    dispatch(navbarAction.setShowNavbar());
  };

  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const utcNow = new Date();
      const utc8Time = new Date(utcNow.getTime() + 8 * 60 * 60 * 1000); // UTC+8

      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu",
      ];
      const dayName = days[utc8Time.getUTCDay()];

      const year = utc8Time.getUTCFullYear();
      const month = (utc8Time.getUTCMonth() + 1).toString().padStart(2, "0");
      const date = utc8Time.getUTCDate().toString().padStart(2, "0");
      const hours = utc8Time.getUTCHours().toString().padStart(2, "0");
      const minutes = utc8Time.getUTCMinutes().toString().padStart(2, "0");
      const seconds = utc8Time.getUTCSeconds().toString().padStart(2, "0");

      setDateTime(
        `${dayName}, ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`
      );
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to set the date and time immediately

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div className={styles.headerGroup}>
      <div className={styles.header}>
        <img
          src={togleNavbar}
          alt="toggle for navbar"
          style={{ cursor: "pointer", height: "2rem" }}
          onClick={toggleNavbar}
        />
        <h1>{title}</h1>
      </div>

      {/* <div className={styles.inputDateWraper}>
        <div className="wraper--date__filter">
          <label htmlFor="start" className="date-label">
            Start Date
          </label>
          <input
            type="date"
            name="start"
            className="date-input bebasneue--regular"
          />
        </div>
        <div className="wraper--date__filter">
          <label htmlFor="end" className="date-label">
            End Date
          </label>
          <input
            type="date"
            name="end"
            className="date-input bebasneue--regular"
          />
        </div>
      </div> */}

      <div className={styles.headerTime}>
        <h2>{dateTime}</h2>
      </div>
    </motion.div>
  );
}
