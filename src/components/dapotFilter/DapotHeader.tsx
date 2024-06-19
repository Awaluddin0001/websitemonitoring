import styles from "@/css/module/Asset.module.css";
import { useNavigate } from "react-router-dom";

export default function DapotHeader({
  setSelectedCategory,
  defaultValue,
}: {
  setSelectedCategory: (value: string) => void;
  defaultValue: string;
}) {
  const navigate = useNavigate();

  const routeChoice = (value: string) => {
    setSelectedCategory(value);
    navigate(`/assets/${value}/all`);
  };
  return (
    <>
      <h1>DATA POTENSI - TTC PENGAYOMAN</h1>
      <div className={styles.inputDateWraper}>
        <div className="wraper--date__filter">
          <label htmlFor="start" className="date-label">
            CATEGORY
          </label>
          <select
            name="floor"
            className="select-input bebasneue--regular"
            onChange={(e) => routeChoice(e.target.value)}
            defaultValue={defaultValue}
          >
            <option value="air">AIR BUILDING</option>
            <option value="comfort">COMFORT BUILDING</option>
            <option value="conveyance">CONVEYANCE BUILDING</option>
            <option value="electrical">ELECTRICAL BUILDING</option>
            <option value="extinguish">EXTINGUISH BUILDING</option>
            <option value="finishing">FINISHING BUILDING</option>
            <option value="fuel">Liquid BUILDING</option>
            <option value="installation">INSTALLATION MATERIALS</option>
            <option value="lighting">LIGHTING BUILDING</option>
            <option value="network">NETWORK IT DEVICE</option>
            <option value="pump">PUMP BUILDING</option>
            <option value="safety">SAFETY BUILDING</option>
            <option value="security">SECURITY BUILDING</option>
            <option value="tools">TOOLS BUILDING</option>
          </select>
        </div>
      </div>
    </>
  );
}
