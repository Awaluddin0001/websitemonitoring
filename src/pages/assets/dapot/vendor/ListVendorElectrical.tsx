import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPage";
import styles from "@/css/module/Asset.module.css";
import { useNavigate } from "react-router-dom";

export default function ListVendorElectrical() {
  const navigate = useNavigate();
  const data = [
    {
      id: "ARC01",
      company: "Daikin",
      company_user_name: "Abbas",
      number_phone: "08517249174",
      created_at: "6-juni-2024",
      user_id: "ME01",
    },
  ];
  return (
    <>
      <HeadPage title={`List Vendor Electrical `} />
      <div
        onClick={() =>
          navigate(`/main/assets/datapotensi/vendor/add/electrical`)
        }
        className={styles.addButton}
      >
        + Add New Vendor
      </div>
      <div className={styles.tableDetail}>
        <table className={styles.assetTable}>
          <thead>
            <tr>
              <th
                className={`${styles.sticky} ${styles.stickyHeader} ${styles.stickyColumn}`}
              >
                No
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>Id</th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Perusahaan
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Penanggung Jawab
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Nomor Telefon
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Last updated
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Updated By
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className={`${styles.sticky} ${styles.stickyColumn}`}>
                  {index + 1}
                </td>
                <td>{item.id}</td>
                <td>{item.company}</td>
                <td>{item.company_user_name}</td>
                <td>{item.number_phone}</td>
                <td>{item.created_at}</td>
                <td>{item.user_id}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <div className={styles.btnEdit}>
                      <img src={Pen} alt="" />
                    </div>
                    <div className={styles.btnDelete}>
                      <img src={Trash} alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
