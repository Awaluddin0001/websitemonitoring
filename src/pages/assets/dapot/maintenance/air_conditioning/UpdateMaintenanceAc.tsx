import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  initialStateUpdateAirconditioningMaintenance,
  updateAirconditioningMaintenanceReducer,
} from "src/reducers/airConditioningReducer";
import {
  getOneMaintenanceAirconditioning,
  updateMaintenanceAirconditioning,
} from "@/services/air_conditioning/dapotAirConditioning";
export default function UpdateMaintenanceAirconditioning() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateAirconditioningMaintenanceReducer,
    initialStateUpdateAirconditioningMaintenance
  );

  const { activity, isLoading, isError, errorMessagesFiles, selectedFiles } =
    state;

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const formData = new FormData();
    formData.append("activity", activity);
    formData.append("document_name", selectedFiles.file1 as File);
    formData.append("user_id", user_id);
    formData.append("id", searchParams.get("id")!);
    const postnew = async (data: any) => {
      const result = await updateMaintenanceAirconditioning(data, dispatch);
      if (result.success) {
        navigate(
          `/main/assets/datapotensi/maintenance/list/airconditioning?page=1`
        );
      }
    };

    postnew(formData);
  };

  useEffect(() => {
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneMaintenanceAirconditioning(
          dispatch,
          searchParams.get("id")
        );
        if (result) {
          dispatch({
            type: "SET_ACTIVITY",
            payload: result.data.activity,
          });
        }
      }
    };
    getdata();
  }, []);

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
          <HeadPage title={`Update Data Maintenance Air Conditioning`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Update Data Maintenance Air Conditioning`} />
          <div className={styles.inputGroup}>
            <div className={styles.containerInput}>
              <h2 className={styles.textTitleInput}>Aktifitas</h2>
              <input
                type="text"
                placeholder="Membersihkan Perangkat"
                className={styles.inputAsset}
                value={activity}
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
