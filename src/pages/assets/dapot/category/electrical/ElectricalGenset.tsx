import { useState, useEffect } from "react";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPageMonitoring";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";
import { getGensets } from "@/services/electrical/dapotGenset";

interface Genset {
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  model: string;
  manufactur: string;
  serial_number: string;
  load: number;
  fuel: number;
  fuel_capacity: number;
  runtime: number;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

export default function ElectricalGenset() {
  const [gensets, setGensets] = useState<Genset[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGensets = async () => {
      try {
        const data = await getGensets();
        setGensets(data.data);
      } catch (err) {
        setError("Failed to fetch Gensets");
      }
    };

    fetchGensets();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeadPage title={`List Genset`} />
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
      {gensets.length > 0 ? (
        <div className={styles.tableDetail}>
          <table className={styles.assetTable}>
            <thead>
              <tr className={`${styles.sticky} ${styles.stickyHeader}`}>
                <th>Id</th>
                <th>Vendor</th>
                <th>Brand</th>
                <th>Name</th>
                <th>Model</th>
                <th>Manufactur</th>
                <th>Serial Number</th>
                <th>Load</th>
                <th>Fuel</th>
                <th>Fuel Capacity</th>
                <th>Runtime</th>
                <th>Installation Date</th>
                <th>Maintenance Date</th>
                <th>Remark Aging</th>
                <th>Last update</th>
                <th>Update By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gensets.map((item, index) => (
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
                    {item.brand_name}
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
                    {item.fuel}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.fuel_capacity}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.runtime}
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
