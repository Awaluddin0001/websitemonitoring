import styles from "@/css/module/Asset.module.css";
import { useNavigate, useLocation } from "react-router-dom";
export default function DapotButtonsCategory({
  listpages,
  subCategory,
}: {
  listpages: string[];
  subCategory: string;
}) {
  const pages = [...listpages];
  const navigate = useNavigate();
  const location = useLocation();
  const takeLastPath = location.pathname.slice(
    34,
    location.pathname.length + 1
  );
  const parameter = takeLastPath.split("/");
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
            onClick={() =>
              navigate(
                `/main/assets/datapotensi/category/${subCategory}/${page}/list`
              )
            }
            className={styles.pageButton}
            key={index}
            style={{ color: page === parameter[1] ? "yellow" : "white" }}
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
          onClick={() =>
            navigate(
              `/main/assets/datapotensi/category/${subCategory}/${parameter[1]}/add`
            )
          }
          className={styles.addButton}
        >
          + Tambah Asset
        </div>
        <div
          // onClick={() =>
          //   navigate(`/assets/brand/addElectrical/${parameter[1]}`)
          // }
          className={styles.addButton}
        >
          Export Data
        </div>
      </div>
    </div>
  );
}
