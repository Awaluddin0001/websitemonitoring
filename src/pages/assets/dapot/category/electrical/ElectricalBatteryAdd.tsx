import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getBrandElectrical,
  getLinkElectrical,
  getMaintenanceElectrical,
  getTypeElectrical,
  getVendorElectrical,
} from "@/services/electrical/dapotElectrical";
import { getFloors, getRooms } from "@/services/electrical/dapotPosition";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate } from "react-router-dom";
import {
  initialBatteryState,
  updateBatteryReducer,
} from "src/reducers/electricalReducer";
import { postNewBattery } from "@/services/electrical/dapotBattery";

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

export default function ElectricalBatteryAdd() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateBatteryReducer,
    initialBatteryState
  );
  const {
    ne_id,
    site_id,
    floor_id,
    room_id,
    brand_id,
    vendor_id,
    maintenance_id,
    link_id,
    name,
    type_id,
    capacity,
    capacity_bank,
    amount,
    bank_amount,
    system_device,
    warranty,
    remark_aging,
    installation_date,
    condition_asset,
    status,
    notes,
    listVendorElectrical,
    listBrandRectifier,
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
    formData.append("sub_category_id", "ESC001");
    formData.append("ne_id", ne_id);
    formData.append("site_id", site_id.value || "");
    formData.append("floor_id", floor_id.value || "");
    formData.append("room_id", room_id.value || "");
    formData.append("brand_id", brand_id.value || "");
    formData.append("vendor_id", vendor_id.value || "");
    formData.append("maintenance_id", maintenance_id.value || "");
    formData.append("link_id", link_id.value || "");
    formData.append("name", name);
    formData.append("type_id", type_id.value || "");
    formData.append("capacity", capacity);
    formData.append("capacity_bank", capacity_bank);
    formData.append("amount", amount);
    formData.append("bank_amount", bank_amount);
    formData.append("system_device", system_device);
    formData.append("warranty", warranty);
    formData.append("remark_aging", remark_aging);
    formData.append(
      "installation_date",
      formatDate(new Date(installation_date))
    );
    formData.append("condition_asset", condition_asset);
    formData.append("status", status);
    formData.append("notes", notes);

    const postnew = async (data: any) => {
      const result = await postNewBattery(data, dispatch);
      if (result.success) {
        navigate(
          `/main/assets/datapotensi/category/list/electrical/battery?page=1`
        );
      }
    };

    postnew(formData);
  };

  useEffect(() => {
    const fetchFloor = async () => {
      try {
        const data = await getFloors();
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        dispatch({ type: "LIST_FLOORS", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch floors" });
      }
    };
    const fetchRoom = async () => {
      try {
        const data = await getRooms();
        const selectOptions = data.data.map((item: any) => {
          return {
            value: item.id,
            label: item.name,
          };
        });
        const filterRooms = selectOptions.filter(
          (item: any) => item.value.slice(2, 3) === "1"
        );
        dispatch({
          type: "FETCH_ROOMS",
          payload: {
            listRooms: filterRooms,
            listAllRooms: selectOptions,
          },
        });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch rooms" });
      }
    };
    const fetchBrand = async () => {
      try {
        const data = await getBrandElectrical("1", dispatch, null, "no");
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        dispatch({ type: "LIST_BRAND_RECTIFIER", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch brands" });
      }
    };
    const fetchVendor = async () => {
      try {
        const data = await getVendorElectrical("1", dispatch, null, "no");
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.company,
        }));
        dispatch({ type: "LIST_VENDOR_ELECTRICAL", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch vendors" });
      }
    };
    const fetchMaintenance = async () => {
      try {
        const data = await getMaintenanceElectrical("1", dispatch, null, "no");
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.activity,
        }));
        dispatch({ type: "LIST_MAINTENANCE", payload: selectOptions });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch maintenance",
        });
      }
    };
    const fetchLink = async () => {
      try {
        const data = await getLinkElectrical(dispatch);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.id,
        }));
        dispatch({ type: "LIST_LINK", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch links" });
      }
    };
    const fetchType = async () => {
      try {
        const data = await getTypeElectrical("1", dispatch, null, "no");
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        dispatch({ type: "LIST_TYPES", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch links" });
      }
    };

    fetchFloor();
    fetchRoom();
    fetchBrand();
    fetchVendor();
    fetchLink();
    fetchType();
    fetchMaintenance();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Aset Baru Untuk Battery`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Aset Baru Untuk Battery`} />
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
                    options={listVendorElectrical}
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
                    options={listBrandRectifier}
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
                  <p className={styles.textTitleInput}>Capacity</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={capacity || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_CAPACITY",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Capacity Bank</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={capacity_bank || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_CAPACITY_BANK",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Amount</p>
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
                  <p className={styles.textTitleInput}>Bank Amount</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={bank_amount || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BANK_AMOUNT",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Remark Aging</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={remark_aging || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_REMARK_AGING",
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
                    value={warranty || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_WARRANTY",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>System</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={system_device || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_SYSTEM", payload: e.target.value })
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
