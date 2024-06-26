import { useState, useEffect } from "react";
import { getRectifiers } from "@/services/apiServices";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPage";
import { useNavigate, useParams } from "react-router-dom";

interface Rectifier {
  id: string;
  vendor_id: string;
  brand_id: string;
  name: string;
  role: string;
  type: string;
  capacity: number;
  modul: string;
  capacity_modul: number;
  load_current: number;
  occupancy: number;
  system: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  created_at: string;
  user_id: string;
}

export default function ElectricalRectifier() {
  const pages = [
    "rectifier",
    "battery",
    "panel",
    "ups",
    "trafo",
    "genset",
    "pdu",
    "cubicle",
  ];
  const [rectifiers, setRectifiers] = useState<Rectifier[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRectifiers = async () => {
      try {
        const data = await getRectifiers();
        setRectifiers(data);
      } catch (err) {
        setError("Failed to fetch rectifiers");
      }
    };

    fetchRectifiers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeadPage title={`List Rectifier`} />
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
        onClick={() => navigate(`/assets/brand/addElectrical/${type}`)}
        className={styles.addButton}
      >
        + Add New Brand
      </div>
      {/* <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div className={styles.headerDashboard}>
          <DapotHeader
            setSelectedCategory={setSelectedCategory}
            defaultValue={selectedCategory}
          />{" "}
        </div>
        <div className={styles.headerDashboard}>
          <DapotNavbar selectedCategory={selectedCategory} />
        </div>
      </div> */}
      <div className={styles.tableDetail}>
        <table className={styles.assetTable}>
          <thead>
            <tr className={`${styles.sticky} ${styles.stickyHeader}`}>
              <th>Id_rectifier</th>
              <th>Vendor_id</th>
              <th>Brand_id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Role</th>
              <th>Capacity (A)</th>
              <th>Modul</th>
              <th>Modul Capacity (A)</th>
              <th>load Current</th>
              <th>Occupancy</th>
              <th>System</th>
              <th>Installation Date</th>
              <th>Maintenance Id</th>
              <th>Remark Aging</th>
              <th>Last update</th>
              <th>Update By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rectifiers.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.vendor_id}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.brand_id}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.type}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.role}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.capacity}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.modul}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.capacity_modul}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.load_current}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.occupancy}%
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.system} Sytem
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.installation_date}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.maintenance_id}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.remark_aging}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.created_at}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
                  {item.user_id}
                </td>
                <td
                  style={{
                    background: index % 2 !== 0 ? "rgb(255 194 194)" : "",
                  }}
                >
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
