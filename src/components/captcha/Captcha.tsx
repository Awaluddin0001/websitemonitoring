// src/components/Captcha.tsx
import { useState, useEffect } from "react";
import styles from "@/css/module/Login.module.css";
import re from "@/assets/svg/re.svg";

// const Captcha: React.FC<{ setCaptchaText: (text: string) => void }> = ({
//   setCaptchaText,
// }) => {
const Captcha = () => {
  const [captchaSrc, setCaptchaSrc] = useState<string>("");

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const fetchCaptcha = async () => {
    try {
      // const response = await fetch("http://localhost:2061/api/v1/captcha", {
      const response = await fetch("/api/v1/captcha", {
        credentials: "include",
      });
      const data = await response.text();
      setCaptchaSrc(`data:image/svg+xml;base64,${btoa(data)}`);
      //   const captchaText = atob(data.split(",")[1]);
      //   setCaptchaText(captchaText); // Update the parent component with the captcha text
    } catch (error) {
      console.error("Error fetching captcha:", error);
    }
  };

  return (
    <div className={styles.captchaWrapper}>
      <img src={captchaSrc} alt="captcha" className={styles.captchaImg} />
      <img src={re} alt="re" onClick={fetchCaptcha} className={styles.re} />
    </div>
  );
};

export default Captcha;
