import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  initialStateUpdateLicensesMaintenance,
  updateLicensesMaintenanceReducer,
} from "src/reducers/licensesReducer";
import { postMaintenanceLicense } from "@/services/licenses/dapotLicenses";
export default function NewLicense() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateLicensesMaintenanceReducer,
    initialStateUpdateLicensesMaintenance
  );

  const {
    activity,
    expired_at,
    isLoading,
    isError,
    errorMessagesFiles,
    selectedFiles,
  } = state;

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const formData = new FormData();
    formData.append("name", activity);
    formData.append("document_name", selectedFiles.file1 as File);
    formData.append("user_id", user_id);
    formData.append("expired_at", expired_at);
    const postnew = async (data: any) => {
      const result = await postMaintenanceLicense(data, dispatch);
      if (result.success) {
        navigate(`/main/license?page=1`);
      }
    };

    postnew(formData);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      const validFileTypes = ["application/pdf"];
      if (!validFileTypes.includes(fileType)) {
        dispatch({
          type: "SET_SELECTED_ERROR_FILES",
          payload: { key, error: "Only PDF files are allowed." },
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

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Izin Document`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Izin Document`} />
          <div className={styles.inputGroup}>
            <div className={styles.containerInput}>
              <h2 className={styles.textTitleInput}>Nama Document</h2>
              <input
                type="text"
                placeholder="Masukan Nama Documentnya"
                className={styles.inputAsset}
                onChange={(e) =>
                  dispatch({ type: "SET_ACTIVITY", payload: e.target.value })
                }
              />
            </div>
            <div className={styles.containerInput}>
              <p className={styles.textTitleInput}>Document</p>
              <input
                type="file"
                className={styles.inputFile}
                onChange={(e) => handleFileChange(e, "file1")}
                accept=".pdf"
              />
              {errorMessagesFiles && (
                <p className={styles.errorMessage}>{errorMessagesFiles}</p>
              )}
            </div>
            <div className={styles.containerInput}>
              <p className={styles.textTitleInput}>Expire</p>
              <input
                type="date"
                className={styles.inputFile}
                onChange={(e) =>
                  dispatch({ type: "SET_EXPIRED", payload: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className={styles.buttonSubmit}
              onClick={submitHandler}
              style={{
                alignSelf: "flex-end",
              }}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}
