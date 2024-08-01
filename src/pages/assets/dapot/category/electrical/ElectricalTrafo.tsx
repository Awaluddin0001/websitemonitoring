import { useState, useEffect } from "react";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPageMonitoring";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import { getTrafos } from "@/services/electrical/dapotTrafo";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";

interface Trafo {
  id: string;
  vendor_id: string;
  vendor_name: string;
  name: string;
  model: string;
  manufactur: string;
  transform_ratio: number;
  serial_number: string;
  load: number;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

export default function ElectricalTrafo() {
  const [trafos, setTrafos] = useState<Trafo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrafos = async () => {
      try {
        const data = await getTrafos();
        setTrafos(data.data);
      } catch (err) {
        setError("Failed to fetch Trafos");
      }
    };

    fetchTrafos();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeadPage title={`List Trafo`} />
      <DapotButtonsCategory
        listpages={[
          "rectifier",
          "battery",
          "panel",
          "ups",
          "trafo",
          "genset",
          "pdu",
          "cubicle",
        ]}
        subCategory="electrical"
      />
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
      {trafos.length > 0 ? (
        <div className={styles.tableDetail}>
          <table className={styles.assetTable}>
            <thead>
              <tr className={`${styles.sticky} ${styles.stickyHeader}`}>
                <th>Id</th>
                <th>Vendor</th>
                <th>Name</th>
                <th>model</th>
                <th>manufactur</th>
                <th>transform_ratios</th>
                <th>serial_number</th>
                <th>load</th>
                <th>Installation Date</th>
                <th>Maintenance Date</th>
                <th>Remark Aging</th>
                <th>Last update</th>
                <th>Update By</th>
                <th>Action</th>
              </tr>
            </thead>
            {
              <tbody>
                {trafos.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.id}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.vendor_name}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.name}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.model}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.manufactur}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.transform_ratio}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.serial_number}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.load}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.installation_date}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.maintenance_date}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.created_at}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
                      }}
                    >
                      {item.user_name}
                    </td>
                    <td
                      style={{
                        background: index % 2 !== 0 ? "#a5fffa" : "",
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
            }
          </table>
        </div>
      ) : (
        <div className={styles.noData}>
          <Lottie
            animationData={noData}
            loop={true}
            style={{ height: "590px" }}
          />
          <p>Belum Ada Data Yang Tersedia</p>
        </div>
      )}
    </>
  );
}
