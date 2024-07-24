import HeadPage from "@/components/header/HeadPage";
import styles from "@/css/module/Asset.module.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getBrandRectifiers,
  getLinkRectifiers,
  getMaintenanceRectifiers,
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
import { useNavigate } from "react-router-dom";
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

export default function ElectricalRectifieAdd() {
  const [siteId, setSiteId] = useState<Options | null>(null);
  const [floorId, setFloorId] = useState<Options | null>(null);
  const [roomId, setRoomId] = useState<Options | null>(null);
  const [brandId, setBrandId] = useState<Options | null>(null);
  const [vendorId, setVendorId] = useState<Options | null>(null);
  const [maintenanceId, setMaintenanceId] = useState<Options | null>(null);
  const [linkId, setLinkId] = useState<Options | null>(null);
  const [installationDate, setInstallationData] = useState<Date | null>(
    new Date()
  );
  const [neId, setNeId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityModul, setCapacityModul] = useState("");
  const [modul, setModul] = useState("");
  const [loadCurrent, setLoadCurrent] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [system, setSystem] = useState("");
  const [warranty, setWarranty] = useState("");
  const [remarkAging, setRemarkAging] = useState("");

  const [listBrandRectifier, setListBrandRectifier] = useState([]);
  const [listMaintenance, setlistMaintenance] = useState([]);
  const [listLink, setListLink] = useState([]);
  const [ListVendorElectrical, setListVendorElectrical] = useState([]);
  const [listRooms, setListRooms] = useState([]);
  const [listAllRooms, setListAllRooms] = useState([]);
  const [listFloors, setListFloors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const [selectedFiles, setSelectedFiles] = useState<{
    [key: string]: File | null;
  }>({
    file1: null,
    file2: null,
    file3: null,
  });
  const [errorMessages, setErrorMessages] = useState<{
    [key: string]: string | null;
  }>({
    file1: null,
    file2: null,
    file3: null,
  });

  const siteOptions: Options[] = [{ value: "UPD057", label: "TTC PENGAYOMAN" }];
  const navigate = useNavigate();
  const handleSiteChange = (selectedOption: Options | null) => {
    setSiteId(selectedOption);
  };
  const handleFloorChange = (selectedOption: Options | null) => {
    setFloorId(selectedOption);
    const filterRoom = listAllRooms.filter(
      (item: any) =>
        item.value.slice(2, 3) === selectedOption?.value.slice(2, 3)
    );
    setRoomId(null);
    setListRooms(filterRoom);
  };
  const handleRoomChange = (selectedOption: Options | null) => {
    setRoomId(selectedOption);
  };
  const handleBrandChange = (selectedOption: Options | null) => {
    setBrandId(selectedOption);
  };
  const handleVendorChange = (selectedOption: Options | null) => {
    setVendorId(selectedOption);
  };
  const handleMaintenanceChange = (selectedOption: Options | null) => {
    setMaintenanceId(selectedOption);
  };
  const handleLinkChange = (selectedOption: Options | null) => {
    setLinkId(selectedOption);
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
        setErrorMessages((prev) => ({
          ...prev,
          [key]: "Only JPEG, JPG, and PNG files are allowed.",
        }));
        setSelectedFiles((prev) => ({ ...prev, [key]: null }));
      } else {
        setErrorMessages((prev) => ({ ...prev, [key]: null }));
        setSelectedFiles((prev) => ({ ...prev, [key]: file }));
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
    formData.append("ne_id", neId);
    formData.append("site_id", siteId?.value || "");
    formData.append("floor_id", floorId?.value || "");
    formData.append("room_id", roomId?.value || "");
    formData.append("brand_id", brandId?.value || "");
    formData.append("vendor_id", vendorId?.value || "");
    formData.append("maintenance_id", maintenanceId?.value || "");
    formData.append("link_id", linkId?.value || "");
    formData.append("name", name);
    formData.append("role", role);
    formData.append("type", type);
    formData.append("capacity", capacity);
    formData.append("modul", modul);
    formData.append("capacity_modul", capacityModul);
    formData.append("load_current", loadCurrent);
    formData.append("occupancy", occupancy);
    formData.append("system", system);
    formData.append("warranty", warranty);
    formData.append("remark_aging", remarkAging);
    formData.append("installation_date", formatDate(installationDate));

    const postnew = async (data: any) => {
      const result = await postNewRectifier(data, setIsLoading, setIsError);
      if (result.status === 201) {
        navigate(`/main/assets/datapotensi/category/electrical/rectifier/list`);
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
        setListFloors(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
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
        setListRooms(filterRooms);
        setListAllRooms(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };
    const fetchBrand = async () => {
      try {
        const data = await getBrandRectifiers(setIsLoading, setIsError);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setListBrandRectifier(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };
    const fetchVendor = async () => {
      try {
        const data = await getVendorRectifiers(setIsLoading, setIsError);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.company,
        }));
        setListVendorElectrical(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };
    const fetchMaintenance = async () => {
      try {
        const data = await getMaintenanceRectifiers(setIsLoading, setIsError);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.activity,
        }));
        setlistMaintenance(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };
    const fetchLink = async () => {
      try {
        const data = await getLinkRectifiers(setIsLoading, setIsError);
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.id,
        }));
        setListLink(selectOptions);
      } catch (err) {
        setIsError("Failed to fetch rectifiers");
      }
    };

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
                    value={neId}
                    onChange={(e) => setNeId(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>SITE ID</p>
                  <Select
                    value={siteId}
                    onChange={handleSiteChange}
                    options={siteOptions}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>LANTAI</p>
                  <Select
                    value={floorId}
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
                    value={roomId}
                    onChange={handleRoomChange}
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
                    value={vendorId}
                    onChange={handleVendorChange}
                    options={ListVendorElectrical}
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
                    value={brandId}
                    onChange={handleBrandChange}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Role</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Type</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Capacity</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Modul</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={modul}
                    onChange={(e) => setModul(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Capacity Modul</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={capacityModul}
                    onChange={(e) => setCapacityModul(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Load Current</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={loadCurrent}
                    onChange={(e) => setLoadCurrent(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Occupancy</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={occupancy}
                    onChange={(e) => setOccupancy(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Remark Aging</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={remarkAging}
                    onChange={(e) => setRemarkAging(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Warranty</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={warranty}
                    onChange={(e) => setWarranty(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>System</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={system}
                    onChange={(e) => setSystem(e.target.value)}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Tanggal Instalasi</p>
                  <DatePicker
                    selected={installationDate}
                    onChange={(date) => setInstallationData(date)}
                    className={styles.inputDate}
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
                    value={maintenanceId}
                    onChange={handleMaintenanceChange}
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
                    value={linkId}
                    onChange={handleLinkChange}
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
                  {errorMessages.file1 && (
                    <p className={styles.errorMessage}>{errorMessages.file1}</p>
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
                  {errorMessages.file2 && (
                    <p className={styles.errorMessage}>{errorMessages.file2}</p>
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
                  {errorMessages.file3 && (
                    <p className={styles.errorMessage}>{errorMessages.file3}</p>
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
