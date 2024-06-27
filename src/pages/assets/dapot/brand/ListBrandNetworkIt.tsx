import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPage";
import styles from "@/css/module/Asset.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function ListBrandNetworkIt() {
  const pages = [
    "rack_server",
    "storage",
    "network_switches",
    "routers",
    "firewalls",
    "patch_panel",
  ];
  const { type } = useParams();
  const navigate = useNavigate();
  const data = [
    {
      id: "ARC01",
      name: "Daikin",
      created_at: "6-juni-2024",
      user_id: "ME01",
    },
  ];
  return (
    <>
      <HeadPage title={`List Brand Network It - ${type}`} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "16px",
        }}
      >
        {pages.map((page, index) => (
          <div
            onClick={() => navigate(`/assets/brand/list/networkit/${page}`)}
            className={styles.pageButton}
            key={index}
            style={{ color: page === type ? "yellow" : "white" }}
          >
            {page}
          </div>
        ))}
      </div>
      <div
        onClick={() => navigate(`/assets/brand/addNetworkIt/${type}`)}
        className={styles.addButton}
      >
        + Add New Brand
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
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                id brand
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Name Brand
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
                <td>{item.name}</td>
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
