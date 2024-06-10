import { useState } from "react";

import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import DapotHeader from "@/components/dapotFilter/DapotHeader";
import DapotNavbar from "@/components/dapotFilter/DapotNavbar";

export default function ElectricalRectifier() {
  const [selectedCategory, setSelectedCategory] = useState("electrical");

  const data = [
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier Cluster1",
      brand: "HUAWEI",
      type: "TP48-1200B",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "392.9",
      occupancy: "29%",
      system: "Large System",
      installation_date: "2016",
      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster2",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "503",
      occupancy: "37.72%",
      system: "Large System",
      installation_date: "2021",
      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster2",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Slave",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "144.9",
      occupancy: "",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 3",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "319",
      occupancy: "26.5%",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 3",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Slave",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "319",
      occupancy: "26.5%",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 4",
      brand: "HUAWEI",
      type: "TP48-1200B",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "583",
      occupancy: "24%",
      system: "Large System",
      installation_date: "2016",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 4",
      brand: "HUAWEI",
      type: "TP48-1200B",
      role: "Slave",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "558",
      occupancy: "24%",
      system: "Large System",
      installation_date: "2016",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 5",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "43.4",
      occupancy: "3.58%",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 5",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Slave",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "400.1",
      occupancy: "33.33%",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 6",
      brand: "HUAWEI",
      type: "MTS9802B-M20A1",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "688",
      occupancy: "57.33%",
      system: "Large System",
      installation_date: "2021",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 7",
      brand: "HUAWEI",
      type: "TB48-1200B",
      role: "Master",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "381",
      occupancy: "14%",
      system: "Large System",
      installation_date: "2016",

      notes: "",
    },
    {
      id: "",
      vendor: "WIRAKI",
      name: "Rectifier MSC Cluster 7",
      brand: "HUAWEI",
      type: "TB48-1200B",
      role: "Slave",
      capacity: "1200",
      modul: "24",
      modul_capacity: "50",
      load_current: "800",
      occupancy: "46%",
      system: "Large System",
      installation_date: "2016",

      notes: "",
    },
  ];

  return (
    <>
      <div
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
                Vendor
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Name
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Brand
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Type
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Role
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Capacity (A)
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Modul
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Modul Capacity (A)
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                load Current
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Occupancy
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                System
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Installation Date
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Keterangan
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
                  {item.id}
                </td>
                <td>{item.vendor}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.type}</td>
                <td>{item.role}</td>
                <td>{item.capacity}</td>
                <td>{item.modul}</td>
                <td>{item.modul_capacity}</td>
                <td>{item.load_current}</td>
                <td>{item.occupancy}</td>
                <td>{item.system}</td>
                <td>{item.installation_date}</td>
                <td>{item.notes}</td>
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
