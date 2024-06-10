import { useState } from "react";

import styles from "@/css/module/Asset.module.css";
import Pen from "@/assets/svg/pen.svg";
import Trash from "@/assets/svg/trash.svg";
import DapotHeader from "@/components/dapotFilter/DapotHeader";
import DapotNavbar from "@/components/dapotFilter/DapotNavbar";

export default function SecurityAll() {
  const [selectedCategory, setSelectedCategory] = useState("security");

  const data = [
    {
      no: "",
      nama: "",
      type: "",
      jumlah: "",
      satuan: "",
      status: "",
      lantai: "",
      ruangan: "",
      brand: "",
      keterangan: "",
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
                Nama
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Type
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Jumlah
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Satuan
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Status
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Lantai
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Ruangan
              </th>
              <th className={`${styles.sticky} ${styles.stickyHeader}`}>
                Brand
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
                  {item.no}
                </td>
                <td>{item.nama}</td>
                <td>{item.type}</td>
                <td>{item.jumlah}</td>
                <td>{item.satuan}</td>
                <td>{item.status}</td>
                <td>{item.lantai}</td>
                <td>{item.ruangan}</td>
                <td>{item.brand}</td>
                <td>{item.keterangan}</td>
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
