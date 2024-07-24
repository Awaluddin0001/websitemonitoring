import style from "@/css/module/Modal.module.css";
import close from "@/assets/png/close.png";

export default function HomeModal({
  display,
  action,
  children,
}: {
  display: boolean;
  action: any;
  children: React.ReactNode;
}) {
  return (
    <div
      className={style.foreshadow}
      style={{ display: display ? "block" : "none" }}
    >
      <div className={style.card}>
        <div className={style.motherCard}>
          <img
            src={close}
            alt="close page tsel"
            className={style.close}
            onClick={() => action(!display)}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
