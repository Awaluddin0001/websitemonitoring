import Lottie, { LottieRefCurrentProps } from "lottie-react";
import loginAnimation from "@/assets/lottie/loginAnimation.json";
import LoadingFetch from "@/components/loading/LoadingFetch";
import { useRef, useEffect, useState } from "react";
import styles from "@/css/module/Login.module.css";
import Captcha from "@/components/captcha/Captcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import openEyes from "@/assets/svg/openEyes.svg";
import closeEyes from "@/assets/svg/closeEyes.svg";

export default function Login() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const [animationFrame, setAnimationFrame] = useState<number | undefined>(0);
  const [errorMessage, setErrorMessage] = useState("");
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
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/main/dashboard"); // Redirect to the desired page if token exists
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/api/v1/user/login`,
        {
          username,
          password,
          captchaText,
        },
        { withCredentials: true }
      );
      const { token, user } = response.data;

      // Save data to local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/main/dashboard");
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      console.error("Error logging in:", error);
    }

    setIsLoading(false);
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
      {isLoading ? (
        <LoadingFetch />
      ) : (
        <>
          <div className={styles.animationLogin}>
            <h1>iPage Dashboard System Monitoring TTC Pengayoman</h1>
            <Lottie
              animationData={loginAnimation}
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
                <div className={styles.wrapperInputPassword}>
                  <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className={styles.inputPassword}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={styles.wrapperInputPassword}>
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className={styles.inputPassword}
                  />
                  {showPassword ? (
                    <img
                      src={openEyes}
                      alt="openEyes"
                      onClick={() => setShowPassword(false)}
                      width={"30rem"}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <img
                      src={closeEyes}
                      alt="closeEyes"
                      onClick={() => setShowPassword(true)}
                      width={"30rem"}
                      style={{ cursor: "pointer" }}
                    />
                  )}
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
                  className={styles.input}
                />
                <h3
                  style={{ color: "red", fontSize: "18px", marginTop: "10px" }}
                >
                  {errorMessage === "Invalid credentials"
                    ? "Password Salah"
                    : errorMessage === "Invalid captcha"
                    ? "Captcha Salah"
                    : errorMessage === "User Not Found"
                    ? "User Tidak Terdaftar"
                    : ""}
                </h3>
              </div>
            </div>

            <div className={styles.btnLogin} onClick={handleLogin}>
              Login
            </div>
          </div>
        </>
      )}
    </div>
  );
}
