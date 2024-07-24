import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect, useState } from "react";
import loginanimation from "@/assets/lottie/loginAnimation.json";
import styles from "@/css/module/Login.module.css";
import Captcha from "@/components/captcha/Captcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const [animationFrame, setAnimationFrame] = useState<number | undefined>(0);
  const navigate = useNavigate();
  setInterval(() => {
    if (animationRef.current?.animationItem?.currentFrame) {
      setAnimationFrame(
        Math.floor(animationRef.current?.animationItem?.currentFrame)
      );
    }
  }, 100);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaText, setCaptchaText] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/main/dashboard"); // Redirect to the desired page if token exists
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // `http://localhost:2061/api/v1/user/login`,
        `/api/v1/user/login`,
        {
          username,
          password,
          captchaText,
        },
        { withCredentials: true }
      );
      console.log("User logged in:", response.data);
      const { token, user } = response.data;

      // Save data to local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/main/dashboard");

      // Optionally redirect to another page
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    const updateAnimation = () => {
      if (animationRef.current) {
        const frame = animationRef.current?.animationItem?.currentFrame;
        const duration = animationRef.current.getDuration(true);
        if (frame !== undefined && duration !== undefined) {
          if (Math.floor(frame) === Math.floor(duration) - 1) {
            animationRef.current.setSpeed(-1);
          } else if (Math.floor(frame) === 0) {
            animationRef.current.setSpeed(1);
          }
        }
      }
    };
    updateAnimation();
  }, [animationFrame]);

  return (
    <div className={styles.container}>
      <div className={styles.animationLogin}>
        <h1>Dashboard Automatis Pantau Gedung Telkomsel</h1>
        <Lottie
          animationData={loginanimation}
          loop={true}
          lottieRef={animationRef}
          style={{
            width: "80%",
          }}
        />
      </div>
      <div className={styles.cardOutsideLogin}>
        <div className={styles.cardLogin}>
          <div>
            <h2>LOGIN</h2>
            <p>Masuk dengan menggunakan akun anda</p>
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <a href="#">Lupa Password ?</a>
          </div>
          <div>
            <Captcha />
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaText}
              onChange={(e) => setCaptchaText(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.btnLogin} onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
}
