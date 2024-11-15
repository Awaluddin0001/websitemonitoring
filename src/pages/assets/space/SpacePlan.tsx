import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Room.module.css";

function SpacePlan() {
  const { floor } = useParams();
  console.log(floor);
  const navigate = useNavigate();
  const [lantai, _] = useState(floor ? floor : "lantai1");

  // URL gambar yang ingin ditampilkan
  const imageUrl1 = `http://192.168.1.62:3001/gambar/lantai1.png`;
  const imageUrl2 = `http://192.168.1.62:3001/gambar/lantai2.png`;
  const imageUrl3 = `http://192.168.1.62:3001/gambar/lantai3.png`;
  const imageUrl4 = `http://192.168.1.62:3001/gambar/lantai4.png`;
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
        <HeadPage
          title={`Denah ${
            floor ? "Lantai " + floor[floor.length - 1] : "Loading..."
          }`}
        />
        <div className={styles.headerDashboard}>
          <div className={styles.navRooms}>
            <div onClick={() => navigate(`/roomManagement/${lantai}`)}>
              EDIT LANTAI
            </div>
          </div>
          {/* <div className={styles.inputDateWraper}>
            <div className="wraper--date__filter">
              <label htmlFor="start" className="date-label">
                BUILDING FLOOR
              </label>
              <select
                name="floor"
                className="select-input bebasneue--regular"
                onChange={(e) => {
                  setLantai(e.target.value);
                }}
              >
                <option value="lantai1">Floor 1</option>
                <option value="lantai2">Floor 2</option>
                <option value="lantai3">Floor 3</option>
                <option value="lantai4">Floor 4</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.imgDenahCenter}>
        {lantai === "lantai1" ? (
          <img src={imageUrl1} alt="Denah" style={{ width: "75%" }} />
        ) : lantai === "lantai2" ? (
          <img src={imageUrl2} alt="Denah" style={{ width: "75%" }} />
        ) : lantai === "lantai3" ? (
          <img src={imageUrl3} alt="Denah" style={{ width: "75%" }} />
        ) : (
          <img src={imageUrl4} alt="Denah" style={{ width: "75%" }} />
        )}
      </div>
    </>
  );
}

export default SpacePlan;
