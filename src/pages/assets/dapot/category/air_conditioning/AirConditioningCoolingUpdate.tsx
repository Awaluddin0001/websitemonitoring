import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getFloors, getRooms } from "@/services/electrical/dapotPosition";
interface Options {
  value: string;
  label: string;
}
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fetchBrand,
  fetchFloor,
  fetchMaintenance,
  fetchRoom,
  fetchType,
  fetchVendor,
} from "@/utils/fetchData";
import {
  initialStateCoolingDevice,
  updateCoolingDeviceReducer,
} from "src/reducers/airConditioningReducer";
import {
  getBrandAirconditioning,
  getMaintenanceAirconditioning,
  getTypeAirconditioning,
  getVendorAirconditioning,
} from "@/services/air_conditioning/dapotAirConditioning";
import {
  getCooling,
  updateCooling,
} from "@/services/air_conditioning/dapotCooling";

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

export default function AirConditioningCoolingUpdate() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateCoolingDeviceReducer,
    initialStateCoolingDevice
  );
  const {
    asset_id,
    ne_id,
    site_id,
    floor_id,
    room_id,
    brand_id,
    vendor_id,
    type_id,
    maintenance_id,
    name,
    manufactur,
    indoor_sn,
    type_indoor,
    outdoor_sn,
    type_outdoor,
    paard_kracht,
    btu_hour,
    refrigerant,
    power,
    installation_date,
    condition_asset,
    status,
    waranty,
    amount,
    notes,
    listVendor,
    listBrand,
    listSite,
    listFloors,
    listRooms,
    listAllRooms,
    listMaintenance,
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
    formData.append("sub_category_id", "ASC02");
    formData.append("ne_id", ne_id);
    formData.append("site_id", site_id.value || "");
    formData.append("floor_id", floor_id.value || "");
    formData.append("room_id", room_id.value || "");
    formData.append("brand_id", brand_id.value || "");
    formData.append("vendor_id", vendor_id.value || "");
    formData.append("maintenance_id", maintenance_id.value || "");
    formData.append("type_id", type_id.value || "");
    formData.append("name", name);
    formData.append("manufactur", manufactur);
    formData.append("indoor_sn", indoor_sn);
    formData.append("type_indoor", type_indoor);
    formData.append("outdoor_sn", outdoor_sn);
    formData.append("type_outdoor", type_outdoor);
    formData.append("paard_kracht", paard_kracht);
    formData.append("btu_hour", btu_hour);
    formData.append("refrigerant", refrigerant);
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
      const result = await updateCooling(
        data,
        dispatch,
        searchParams.get("id") || "",
        asset_id
      );
      console.log(result);
      if (result.success) {
        navigate(
          `/main/assets/datapotensi/category/list/airconditioning/cooling?page=1`
        );
      }
    };

    postnew(formData);
  };

  useEffect(() => {
    const getRecti = async () => {
      try {
        const data = await getCooling(searchParams.get("id"), dispatch);
        dispatch({
          type: "GET_COOLINGDEVICE",
          payload: {
            asset_id: data.asset_id,
            ne_id: data.ne_id,
            site_id: { value: data.site_id, label: data.site_name },
            floor_id: { value: data.floor_id, label: data.floor_name },
            room_id: { value: data.room_id, label: data.room_name },
            brand_id: { value: data.brand_id, label: data.brand_name },
            vendor_id: { value: data.vendor_id, label: data.vendor_name },
            maintenance_id: {
              value: data.maintenance_id,
              label: data.maintenance_date,
            },
            type_id: { value: data.type_id, label: data.type_name },
            name: data.name,
            manufactur: data.manufactur,
            indoor_sn: data.indoor_sn,
            type_indoor: data.type_indoor,
            outdoor_sn: data.outdoor_sn,
            type_outdoor: data.type_outdoor,
            paard_kracht: data.paard_kracht,
            btu_hour: data.btu_hour,
            refrigerant: data.refrigerant,
            power: data.power,

            waranty: data.waranty,
            amount: data.amount,
            remark_aging: data.remark_aging,
            installation_date: data.installation_date,
            condition_asset: data.condition_asset,
            status: data.status,
            notes: data.notes,
          },
        });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch air",
        });
      }
    };

    getRecti();
    fetchFloor(getFloors, dispatch);
    fetchRoom(getRooms, dispatch);
    fetchBrand(getBrandAirconditioning, dispatch);
    fetchVendor(getVendorAirconditioning, dispatch);
    fetchType(getTypeAirconditioning, dispatch, "ASC02");
    fetchMaintenance(getMaintenanceAirconditioning, dispatch);
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
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Brand</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>LIST BRAND</p>
                  <Select
                    value={brand_id}
                    onChange={(e) =>
                      dispatch({ type: "SET_BRAND_ID", payload: e })
                    }
                    options={listBrand}
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
                  <p className={styles.textTitleInput}>Manufactur</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={manufactur || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_MANUFACTUR",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Serial Number Indoor</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={indoor_sn || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_INDOOR_SN",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p className={styles.textTitleInput}>Type Indoor</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={type_indoor || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_TYPE_INDOOR",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Serial Number Outdoor</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={outdoor_sn || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_OUTDOOR_SN",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p className={styles.textTitleInput}>Type Outdoor</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={type_outdoor || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_TYPE_OUTDOOR",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p className={styles.textTitleInput}>Paard Kracht</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={paard_kracht || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PAARD_KRACHT",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p className={styles.textTitleInput}>BTU/H</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={btu_hour || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BTU_HOUR",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p className={styles.textTitleInput}>Refrigerant</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={refrigerant || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_REFRIGERANT",
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
