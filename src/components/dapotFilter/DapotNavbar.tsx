import { useNavigate } from "react-router-dom";

import styles from "@/css/module/Asset.module.css";

export default function DapotNavbar({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navRooms}>
        {selectedCategory === "air" ? (
          <>
            <div>All</div>
            <div>Air</div>
            <div>Cooling</div>
            <div>Heating</div>
          </>
        ) : selectedCategory === "comfort" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "conveyance" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "electrical" ? (
          <>
            <div onClick={() => navigate(`/assets/electrical/all`)}>All</div>
            <div onClick={() => navigate(`/assets/electrical/battery`)}>
              Battery
            </div>
            <div onClick={() => navigate(`/assets/electrical/cubicle`)}>
              Cubicle
            </div>
            <div onClick={() => navigate(`/assets/electrical/panel`)}>
              Panel
            </div>
            <div onClick={() => navigate(`/assets/electrical/pdu`)}>Pdu</div>
            <div onClick={() => navigate(`/assets/electrical/rectifier`)}>
              Rectifier
            </div>
            <div onClick={() => navigate(`/assets/electrical/trafo`)}>
              Trafo
            </div>
            <div onClick={() => navigate(`/assets/electrical/ups`)}>Ups</div>
          </>
        ) : selectedCategory === "extinguish" ? (
          <>
            <div>All</div>
            <div>APAR</div>
            <div>FM200</div>
          </>
        ) : selectedCategory === "finishing" ? (
          <>
            <div>All</div>
            <div>Ceramic</div>
            <div>Ceiling</div>
            <div>Door</div>
            <div>Wallpaper</div>
            <div>Window</div>
          </>
        ) : selectedCategory === "fuel" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "installation" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "lighting" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "network" ? (
          <>
            <div>All</div>
            <div>Firewalls</div>
            <div>Network Switches</div>
            <div>Patch Panels</div>
            <div>Rack Server</div>
            <div>Routers</div>
            <div>Storage Server</div>
          </>
        ) : selectedCategory === "pump" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "safety" ? (
          <>
            <div>All</div>
          </>
        ) : selectedCategory === "security" ? (
          <>
            <div>All</div>
            <div>Access Control</div>
            <div>Alarm</div>
            <div>Button</div>
            <div>Cctv</div>
            <div>Detector</div>
            <div>Sound</div>
            <div>Video Recording</div>
          </>
        ) : (
          <>
            <div>All</div>
          </>
        )}
      </div>
      <div className={styles.navRooms}>
        <div onClick={() => navigate(`/addRowAsset`)} className={styles.btnRow}>
          Add Row
        </div>
      </div>
    </>
  );
}
