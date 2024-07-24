import styles from "@/css/module/Asset.module.css";
import { useNavigate, useParams } from "react-router-dom";
export default function DapotButtons({ listpages }: { listpages: string[] }) {
  const pages = [...listpages];
  const { type } = useParams();
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "8px",
          justifyContent: "flex-start",
        }}
      >
        {pages.map((page, index) => (
          <div
            onClick={() => navigate(`/assets/brand/list/electrical/${page}`)}
            className={styles.pageButton}
            key={index}
            style={{ color: page === type ? "yellow" : "white" }}
          >
            {page}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <div
          onClick={() => navigate(`/assets/brand/addElectrical/${type}`)}
          className={styles.addButton}
        >
          + Add New Brand
        </div>
      </div>
    </div>
  );
}
