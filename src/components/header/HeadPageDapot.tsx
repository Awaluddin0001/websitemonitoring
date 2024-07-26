import { motion } from "framer-motion";
import styles from "@/css/module/HeadPage.module.css";
import togleNavbar from "@/assets/svg/toggleNavbar.svg";
import { navbarAction } from "@/store/index";
import { useDispatch } from "react-redux";
import SearchSvg from "../svg/SearchSvg";
import PlusSvg from "../svg/PlusSvg";
import MinusSvg from "../svg/MinusSvg";
import SettingSvg from "../svg/SettingSvg";
import { useState, KeyboardEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
export default function HeadPageDapot({
  title,
  valueGlobalFilter,
  setGlobalFilter,
  subCategory,
  columnTogle,
  setTogle,
}: {
  title: string;
  valueGlobalFilter: string;
  setGlobalFilter: (dispatch: any) => void;
  subCategory: string;
  columnTogle?: any;
  setTogle: any;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [actionShow, setActionShow] = useState<boolean>(false);
  const [settingShow, setSettingShow] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(valueGlobalFilter);
  const location = useLocation();
  const takeLastPath = location.pathname.slice(
    34,
    location.pathname.length + 1
  );
  const parameter = takeLastPath.split("/");

  const toggleNavbar = () => {
    dispatch(navbarAction.setShowNavbar());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setGlobalFilter({ type: "SET_GLOBAL_FILTER", payload: searchValue });
    }
  };

  const handleSearchClick = () => {
    setGlobalFilter({ type: "SET_GLOBAL_FILTER", payload: searchValue });
  };

  return (
    <motion.div className={styles.headerGroupDapot}>
      <div className={styles.sectionGroupDapot}>
        <div className={styles.header}>
          <img
            src={togleNavbar}
            alt="toggle for navbar"
            style={{ cursor: "pointer", height: "2rem" }}
            onClick={toggleNavbar}
          />
          <h1>{title}</h1>
        </div>
        <div className={styles.actionHead}>
          <div className={styles.search}>
            <input
              value={searchValue ?? ""}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              type="search"
              className={styles.searchInput}
              placeholder="Cari Data Potensi..."
            />
            <div className={styles.iconInput} onClick={handleSearchClick}>
              <SearchSvg color="#8b0000" width="20" height="26" />
            </div>
          </div>
          <div className={styles.actionAdd}>
            <div
              className={
                actionShow
                  ? styles.iconPlus + " " + styles.show
                  : styles.iconPlus
              }
              onClick={() => setActionShow(!actionShow)}
            >
              {actionShow ? (
                <MinusSvg color="#8b0000" width="20" height="26" />
              ) : (
                <PlusSvg color="#8b0000" width="20" height="26" />
              )}
            </div>
            <div
              className={
                actionShow
                  ? styles.actionGroup + " " + styles.show
                  : styles.actionGroup
              }
            >
              <div
                onClick={() =>
                  navigate(
                    `/main/assets/datapotensi/category/add/${subCategory}/${parameter[2]}`
                  )
                }
                className={styles.addButton}
                style={{ marginLeft: "10px" }}
              >
                + Tambah Asset
              </div>
              <div
                onClick={() =>
                  navigate(
                    `/main/assets/datapotensi/vendor/list/${subCategory}`
                  )
                }
                className={styles.addButton}
              >
                ⁝ List Vendor
              </div>
              <div
                onClick={() =>
                  navigate(
                    `/main/assets/datapotensi/brand/list/${subCategory}/all`
                  )
                }
                className={styles.addButton}
              >
                ⁝ List Brand
              </div>
              <div
                onClick={() =>
                  navigate(`/main/assets/datapotensi/link/list/${subCategory}`)
                }
                className={styles.addButton}
              >
                ⁝ List Link
              </div>
            </div>
          </div>
          <div className={styles.actionAdd}>
            <div
              className={styles.iconPlus}
              onClick={() => setSettingShow(!settingShow)}
            >
              <SettingSvg color="#8b0000" width="20" height="26" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionGroupDapotBottom}>
        <div
          className={
            settingShow
              ? styles.settingGroup + " " + styles.show
              : styles.settingGroup
          }
        >
          <div>
            <Toggle
              defaultChecked={columnTogle}
              className="custom-classname"
              onChange={() =>
                setTogle({ type: "SET_POSITIONCOLUMN", payload: !columnTogle })
              }
            />
          </div>
          <div>
            <div
              onClick={() =>
                navigate(
                  `/main/assets/datapotensi/category/${subCategory}/${parameter[2]}/add`
                )
              }
              className={styles.addButton}
            >
              + Tambah Asset
            </div>

            <div className={styles.addButton}>⌂ Export Data</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
