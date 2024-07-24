import HeadPage from "@/components/header/HeadPage";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import {
  initialStateRecti,
  updateRectiReducer,
} from "src/reducers/electricalReducer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getBrandRectifiers,
  getLinkRectifiers,
  getMaintenanceRectifiers,
  getRectifier,
  getVendorRectifiers,
  postNewRectifier,
} from "@/services/dapotRectifiers";
import { getFloors, getRooms } from "@/services/dapotPosition";
interface Options {
  value: string;
  label: string;
}
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate, useSearchParams } from "react-router-dom";

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

export default function ElectricalRectifieUpdate() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(updateRectiReducer, initialStateRecti);
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
    role,
    type,
    capacity,
    modul,
    capacity_modul,
    load_current,
    occupancy,
    system,
    warranty,
    remark_aging,
    installation_date,
    condition,
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
    console.log(selectedFiles);
    if (file) {
      const fileType = file.type;
      const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validFileTypes.includes(fileType)) {
        dispatch({
          type: "SET_ERROR_FILES",
          payload: {
            [key]: "Only JPEG, JPG, and PNG files are allowed.",
          },
        });
        dispatch({
          type: "SET_SELECTED_FILES",
          payload: {
            [key]: "",
          },
        });
      } else {
        dispatch({
          type: "SET_ERROR_FILES",
          payload: {
            [key]: "",
          },
        });
        dispatch({
          type: "SET_SELECTED_FILES",
          payload: {
            [key]: "",
          },
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
    formData.append("images", selectedFiles.file1 as File);
    formData.append("images", selectedFiles.file2 as File);
    formData.append("images", selectedFiles.file3 as File);
    formData.append("user_id", user_id);
    formData.append("ne_id", ne_id);
    formData.append("site_id", site_id.value || "");
    formData.append("floor_id", floor_id.value || "");
    formData.append("room_id", room_id.value || "");
    formData.append("brand_id", brand_id.value || "");
    formData.append("vendor_id", vendor_id.value || "");
    formData.append("maintenance_id", maintenance_id.value || "");
    formData.append("link_id", link_id.value || "");
    formData.append("name", name);
    formData.append("role", role);
    formData.append("type", type);
    formData.append("capacity", capacity);
    formData.append("modul", modul);
    formData.append("capacity_modul", capacity_modul);
    formData.append("load_current", load_current);
    formData.append("occupancy", occupancy);
    formData.append("system", system);
    formData.append("warranty", warranty);
    formData.append("remark_aging", remark_aging);
    formData.append("installation_date", formatDate(installation_date));
    formData.append("condition", condition);
    formData.append("status", status);
    formData.append("notes", notes);

    const postnew = async (data: any) => {
      await postNewRectifier(data, dispatch);
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
        const data = await getBrandRectifiers(dispatch);
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
        const data = await getVendorRectifiers(dispatch);
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
        const data = await getMaintenanceRectifiers(dispatch);
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
        const data = await getLinkRectifiers(dispatch);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.id,
        }));
        dispatch({ type: "LIST_LINK", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch links" });
      }
    };

    const getRecti = async () => {
      try {
        const data = await getRectifier(searchParams.get("id"), dispatch);
        console.log(data);
        dispatch({
          type: "GET_RECTI",
          payload: {
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
            link_id: { value: data.link_id, label: data.link_id },
            name: data.name,
            role: data.role,
            type: data.type,
            capacity: data.capacity,
            modul: data.modul,
            capacity_modul: data.capacity_modul,
            load_current: data.load_current,
            occupancy: data.occupancy,
            system: data.system,
            warranty: data.warranty,
            remark_aging: data.remark_aging,
            installation_date: data.installation_date,
          },
        });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch rectifier",
        });
      }
    };

    getRecti();
    fetchFloor();
    fetchRoom();
    fetchBrand();
    fetchVendor();
    fetchLink();
    fetchMaintenance();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Aset Baru Untuk Rectifier`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Aset Baru Untuk Rectifier`} />
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
                  <p className={styles.textTitleInput}>Role</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={role || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_ROLE", payload: e.target.value })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Type</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={type || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_TYPE", payload: e.target.value })
                    }
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
                  <p className={styles.textTitleInput}>Modul</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={modul || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_MODUL", payload: e.target.value })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Capacity Modul</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={capacity_modul || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_CAPACITY_MODUL",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Load Current</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={load_current || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_LOAD_CURRENT",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Occupancy</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={occupancy || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_OCCUPANCY",
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
                    value={system || ""}
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
                    value={condition || ""}
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
