import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getFloors, getRooms } from "@/services/electrical/dapotPosition";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate } from "react-router-dom";

import {
  fetchFloor,
  fetchMaintenance,
  fetchRoom,
  fetchVendor,
} from "@/utils/fetchData";
import {
  initialStateHeatingDevice,
  updateHeatingDeviceReducer,
} from "src/reducers/airConditioningReducer";
import {
  getMaintenanceAirconditioning,
  getVendorAirconditioning,
} from "@/services/air_conditioning/dapotAirConditioning";
import { postNewHeater } from "@/services/air_conditioning/dapotHeater";

interface Options {
  value: string;
  label: string;
}

const styleSelect = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#0ecbc0" : "#333",
    fontSize: "5rem",
    padding: "1px 3px",
    borderRadius: "5px",
    border: "1px solid #333",
  }),
};

const themeSelect = (theme: any) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: "#fcd100",
    primary: "#0ecbc0",
  },
});

export default function AirConditioningHeatingAdd() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateHeatingDeviceReducer,
    initialStateHeatingDevice
  );
  const {
    ne_id,
    site_id,
    floor_id,
    room_id,
    vendor_id,
    maintenance_id,
    name,
    temperature_max,
    power,
    installation_date,
    condition_asset,
    status,
    waranty,
    amount,
    notes,
    listVendor,
    listSite,
    listFloors,
    listRooms,
    listAllRooms,
    listMaintenance,
    isLoading,
    isError,
    selectedFiles,
    errorMessagesFiles,
  } = state;

  const handleFloorChange = (selectedOption: Options | null) => {
    const filterRoom = listAllRooms.filter(
      (item: any) =>
        item.value.slice(2, 3) === selectedOption?.value.slice(2, 3)
    );
    dispatch({
      type: "FLOOR_CHANGE",
      payload: {
        floor_id: selectedOption,
        room_id: "",
        listRooms: filterRoom,
      },
    });
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validFileTypes.includes(fileType)) {
        dispatch({
          type: "SET_SELECTED_ERROR_FILES",
          payload: { key, error: "Only JPEG, JPG, and PNG files are allowed." },
        });
        dispatch({
          type: "SET_SELECTED_FILES",
          payload: { key, file: null },
        });
      } else {
        dispatch({
          type: "SET_SELECTED_ERROR_FILES",
          payload: { key, error: null },
        });
        dispatch({
          type: "SET_SELECTED_FILES",
          payload: { key, file },
        });
      }
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const formData = new FormData();
    formData.append("foto1", selectedFiles.file1 as File);
    formData.append("foto2", selectedFiles.file2 as File);
    formData.append("foto3", selectedFiles.file3 as File);
    formData.append("user_id", user_id);
    formData.append("sub_category_id", "ASC03");
    formData.append("ne_id", ne_id);
    formData.append("site_id", site_id.value || "");
    formData.append("floor_id", floor_id.value || "");
    formData.append("room_id", room_id.value || "");
    formData.append("vendor_id", vendor_id.value || "");
    formData.append("maintenance_id", maintenance_id.value || "");
    formData.append("name", name);
    formData.append("temperature_max", temperature_max);
    formData.append("power", power);

    formData.append(
      "installation_date",
      formatDate(new Date(installation_date))
    );
    formData.append("condition_asset", condition_asset);
    formData.append("status", status);
    formData.append("amount", amount);
    formData.append("waranty", waranty);
    formData.append("notes", notes);

    const postnew = async (data: any) => {
      const result = await postNewHeater(data, dispatch);
      if (result.success) {
        navigate(
          `/main/assets/datapotensi/category/list/airconditioning/heating?page=1`
        );
      }
    };

    postnew(formData);
  };

  useEffect(() => {
    fetchFloor(getFloors, dispatch);
    fetchRoom(getRooms, dispatch);
    fetchVendor(getVendorAirconditioning, dispatch);
    fetchMaintenance(getMaintenanceAirconditioning, dispatch);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Aset Baru Untuk Pengatur Pemanas Udara`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Aset Baru Untuk Pengatur Pemanas Udara`} />
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Posisi</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NE ID</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={ne_id || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_NE_ID", payload: e.target.value })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>SITE ID</p>
                  <Select
                    value={site_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_SITE_ID", payload: e })
                    }
                    options={listSite}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>LANTAI</p>
                  <Select
                    value={floor_id}
                    onChange={handleFloorChange}
                    options={listFloors}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>RUANGAN</p>
                  <Select
                    value={room_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_ROOM_ID", payload: e })
                    }
                    options={listRooms}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
              </div>
            </div>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Vendor</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>LIST VENDOR</p>
                  <Select
                    value={vendor_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_VENDOR_ID", payload: e })
                    }
                    options={listVendor}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Detail Aset</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Nama</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={name || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_NAME", payload: e.target.value })
                    }
                  />
                </div>

                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Temperatur Max</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={temperature_max || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_TEMPERATURE_MAX",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Power</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={power || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_POWER",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Warranty</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={waranty || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_WARRANTY",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Jumlah</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={amount || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_AMOUNT",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Tanggal Instalasi</p>
                  <DatePicker
                    selected={installation_date || ""}
                    onChange={(date) =>
                      dispatch({ type: "SET_INSTALLATION_DATE", payload: date })
                    }
                    className={styles.inputDate}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Kondisi</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={condition_asset || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_CONDITION",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Status</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={status || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STATUS",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Keterangan</p>
                  <textarea
                    onChange={(e) => {
                      dispatch({ type: "SET_NOTES", payload: e.target.value });
                    }}
                    className={styles.inputAsset}
                    value={notes || ""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Maintenance Record</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>MAINTENANCE ID</p>
                  <Select
                    value={maintenance_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_MAINTENANCE_ID", payload: e })
                    }
                    options={listMaintenance}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
              </div>
            </div>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Foto Aset</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Foto 1</p>
                  <input
                    type="file"
                    className={styles.inputFile}
                    onChange={(e) => handleFileChange(e, "file1")}
                    accept=".jpeg,.jpg,.png"
                  />
                  {errorMessagesFiles.file1 && (
                    <p className={styles.errorMessage}>
                      {errorMessagesFiles.file1}
                    </p>
                  )}
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Foto 2</p>
                  <input
                    type="file"
                    className={styles.inputFile}
                    onChange={(e) => handleFileChange(e, "file2")}
                    accept=".jpeg,.jpg,.png"
                  />
                  {errorMessagesFiles.file2 && (
                    <p className={styles.errorMessage}>
                      {errorMessagesFiles.file2}
                    </p>
                  )}
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Foto 3</p>
                  <input
                    type="file"
                    className={styles.inputFile}
                    onChange={(e) => handleFileChange(e, "file3")}
                    accept=".jpeg,.jpg,.png"
                  />
                  {errorMessagesFiles.file3 && (
                    <p className={styles.errorMessage}>
                      {errorMessagesFiles.file3}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionInput}>
            <button className={styles.buttonSubmit} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}
