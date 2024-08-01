import { useState, useEffect } from "react";
import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import HeadPage from "@/components/header/HeadPageMonitoring";
import DapotButtonsCategory from "@/components/dapotFilter/DapotButtonsCategory";
import { getBatteries } from "@/services/electrical/dapotBattery";
import Lottie from "lottie-react";
import noData from "@/assets/lottie/noData.json";

interface Battery {
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  type: string;
  capacity: number;
  capacity_bank: number;
  amount: number;
  bank_amount: number;
  system: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

export default function ElectricalBattery() {
  const [batteries, setBatteris] = useState<Battery[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRectifiers = async () => {
      try {
        const data = await getBatteries();
        setBatteris(data.data);
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
      <HeadPage title="List Battery" />
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
      {batteries.length > 0 ? (
        <div className={styles.tableDetail}>
          <table className={styles.assetTable}>
            <thead>
              <tr className={`${styles.sticky} ${styles.stickyHeader}`}>
                <th>Id</th>
                <th>Vendor</th>
                <th>Brand</th>
                <th>Name</th>
                <th>Type</th>
                <th>Capacity (A)</th>
                <th>Capacity Bank</th>
                <th>amount</th>
                <th>amount bank</th>
                <th>system</th>
                <th>Installation Date</th>
                <th>Maintenance Date</th>
                <th>Remark Aging</th>
                <th>Warranty</th>
                <th>Last update</th>
                <th>Update By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((item, index) => (
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
                    {item.type}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.capacity}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.capacity_bank}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.amount}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.bank_amount}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.system}
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
                    {item.remark_aging}
                  </td>
                  <td
                    style={{
                      background: index % 2 !== 0 ? "#a5fffa" : "",
                    }}
                  >
                    {item.warranty}
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
