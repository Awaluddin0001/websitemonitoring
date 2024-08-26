import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import {
  initialLvmdpState,
  updateLvmdpReducer,
} from "src/reducers/electricalReducer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getLinkElectrical,
  getMaintenanceElectrical,
  getTypeElectrical,
  getVendorElectrical,
} from "@/services/electrical/dapotElectrical";
import { getFloors, getRooms } from "@/services/electrical/dapotPosition";
interface Options {
  value: string;
  label: string;
}
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fetchFloor,
  fetchLink,
  fetchMaintenance,
  fetchRoom,
  fetchType,
  fetchVendor,
} from "@/utils/fetchData";
import { getLvmdp, updateLvmdp } from "@/services/electrical/dapotLvmdp";

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

export default function ElectricalLvmdpUpdate() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(updateLvmdpReducer, initialLvmdpState);
  const {
    asset_id,
    ne_id,
    site_id,
    floor_id,
    room_id,
    vendor_id,
    maintenance_id,
    link_id,
    name,
    type_id,
    voltage_level,
    current_rating,
    breaker_type,
    breaker_rating,
    section,
    installation_date,
    condition_asset,
    status,
    notes,
    listVendor,
    listSite,
    listFloors,
    listRooms,
    listAllRooms,
    listMaintenance,
    listLink,
    listType,
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
    // if (!selectedFiles.file1 || !selectedFiles.file2 || !selectedFiles.file3) {
    //   alert("Please select all three valid files.");
    //   return;
    // }

    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const formData = new FormData();
    formData.append("foto1", selectedFiles.file1 as File);
    formData.append("foto2", selectedFiles.file2 as File);
    formData.append("foto3", selectedFiles.file3 as File);
    formData.append("user_id", user_id);
    formData.append("sub_category_id", "ESC004");
    formData.append("ne_id", ne_id);
    formData.append("site_id", site_id.value || "");
    formData.append("floor_id", floor_id.value || "");
    formData.append("room_id", room_id.value || "");
    formData.append("vendor_id", vendor_id.value || "");
    formData.append("maintenance_id", maintenance_id.value || "");
    formData.append("link_id", link_id.value || "");
    formData.append("name", name);
    formData.append("type_id", type_id.value || "");
    formData.append("voltage_level", voltage_level);
    formData.append("current_rating", current_rating);
    formData.append("breaker_type", breaker_type);
    formData.append("breaker_rating", breaker_rating);
    formData.append("section", section);
    formData.append(
      "installation_date",
      formatDate(new Date(installation_date))
    );
    formData.append("condition_asset", condition_asset);
    formData.append("status", status);
    formData.append("notes", notes);

    const postnew = async (data: any) => {
      const result = await updateLvmdp(
        data,
        dispatch,
        searchParams.get("id") || "",
        asset_id
      );
      console.log(result);
      if (result.success) {
        navigate(
          `/main/assets/datapotensi/category/list/electrical/lvmdp?page=1`
        );
      }
    };

    postnew(formData);
  };

  useEffect(() => {
    const getRecti = async () => {
      try {
        const data = await getLvmdp(searchParams.get("id"), dispatch);
        dispatch({
          type: "GET_LVMDP",
          payload: {
            asset_id: data.asset_id,
            ne_id: data.ne_id,
            site_id: { value: data.site_id, label: data.site_name },
            floor_id: { value: data.floor_id, label: data.floor_name },
            room_id: { value: data.room_id, label: data.room_name },
            vendor_id: { value: data.vendor_id, label: data.vendor_name },
            maintenance_id: {
              value: data.maintenance_id,
              label: data.maintenance_date,
            },
            link_id: { value: data.link_id, label: data.link_id },
            name: data.name,
            type_id: { value: data.type_id, label: data.type_name },
            voltage_level: data.voltage_level,
            current_rating: data.current_rating,
            breaker_type: data.breaker_type,
            breaker_rating: data.breaker_rating,
            section: data.section,
            installation_date: data.installation_date,
            condition_asset: data.condition_asset,
            status: data.status,
            notes: data.notes,
          },
        });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch lvmdp",
        });
      }
    };

    getRecti();
    fetchFloor(getFloors, dispatch);
    fetchRoom(getRooms, dispatch);
    fetchVendor(getVendorElectrical, dispatch);
    fetchLink(getLinkElectrical, dispatch);
    fetchType(getTypeElectrical, dispatch, "ESC004");
    fetchMaintenance(getMaintenanceElectrical, dispatch);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Perbaharui Data Untuk ${searchParams.get("id")}`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Perbaharui Data Untuk ${searchParams.get("id")}`} />
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
                  <p className={styles.textTitleInput}>Type</p>
                  <Select
                    value={type_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_TYPE_ID", payload: e })
                    }
                    options={listType}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Level Tegangan</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={voltage_level || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_VOLTAGE_LEVEL",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Current Rating</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={current_rating || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_CURRENT_RATING",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Breaker Type</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={breaker_type || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BREAKER_TYPE",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Breaker Rating</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={breaker_rating || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BREAKER_RATING",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Section</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={section || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_SECTION",
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
                      console.log(e.target.value);
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
              <p className={styles.textTitle}>Link Device</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>LINK ID</p>
                  <Select
                    value={link_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_LINK_ID", payload: e })
                    }
                    options={listLink}
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
