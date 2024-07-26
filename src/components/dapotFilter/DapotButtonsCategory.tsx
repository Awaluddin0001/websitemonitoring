import styles from "@/css/module/Asset.module.css";
import { useNavigate, useLocation } from "react-router-dom";
export default function DapotButtonsCategory({
  listpages,
  subCategory,
}: {
  listpages: string[];
  subCategory: string;
}) {
  const pages = [...listpages].sort((a, b) => a.localeCompare(b, "en-US"));
  const navigate = useNavigate();
  const location = useLocation();
  const takeLastPath = location.pathname.slice(
    34,
    location.pathname.length + 1
  );

  const parameter = takeLastPath.split("/");

  return (
    <div className={styles.dapotButtonsCategoryWrapper}>
      {pages.map((page, index) => (
        <div
          onClick={() =>
            navigate(
              `/main/assets/datapotensi/category/list/${subCategory}/${page}`
            )
          }
          className={styles.pageButton}
          key={index}
          style={{
            color: page === parameter[2] ? "yellow" : "#333",
            backgroundColor: page === parameter[2] ? "#8b0000" : "#fff",
          }}
        >
          {page.slice(0, 1).toUpperCase() + page.slice(1)}
        </div>
      ))}
    </div>
  );
}
