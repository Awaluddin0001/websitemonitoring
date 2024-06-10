import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect, useState } from "react";
import loginanimation from "@/assets/lottie/loginAnimation.json";
import styles from "@/css/module/Login.module.css";

export default function Login() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const [animationFrame, setAnimationFrame] = useState<number | undefined>(0);

  setInterval(() => {
    if (animationRef.current?.animationItem?.currentFrame) {
      setAnimationFrame(
        Math.floor(animationRef.current?.animationItem?.currentFrame)
      );
    }
  }, 100);

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
        <Lottie
          animationData={loginanimation}
          loop={true}
          lottieRef={animationRef}
          style={{
            width: "80%",
          }}
        />
        <h1>Website Building Management System - TTC Pengayoman</h1>
      </div>
      <div className={styles.cardOutsideLogin}>
        <div className={styles.cardLogin}>
          <div>
            <h2>LOGIN</h2>
            <p>Masuk dengan menggunakan akun anda</p>
          </div>
          <div className={styles.formInput}>
            <input type="text" placeholder="username" />
            <div>
              <input type="password" placeholder="password" />
            </div>
            <a href="#">Lupa Password ?</a>
          </div>
        </div>
        <div className={styles.btnLogin}>Login</div>
      </div>
    </div>
  );
}
