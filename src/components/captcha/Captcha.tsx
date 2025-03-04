// src/components/Captcha.tsx
import { useState, useEffect } from "react";
import styles from "@/css/module/Login.module.css";
import re from "@/assets/svg/re.svg";
import { apiUser } from "@/utils/apiUser";

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
      // Use axios to fetch the captcha image
      const response = await apiUser.get("/captcha", {
        responseType: "text", // Ensure the response is treated as text
        withCredentials: true, // Equivalent to credentials: 'include' in fetch
      });

      // Convert the response data to base64
      const data = response.data;
      setCaptchaSrc(`data:image/svg+xml;base64,${btoa(data)}`);

      // If you need to extract and set captcha text (commented out in the original code)
      // const captchaText = atob(data.split(",")[1]);
      // setCaptchaText(captchaText); // Update the parent component with the captcha text
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
