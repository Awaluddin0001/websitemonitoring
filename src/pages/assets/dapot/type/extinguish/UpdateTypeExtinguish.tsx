import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import {
  getOneTypeExtinguish,
  updateTypeExtinguish,
} from "@/services/extinguish/dapotExtinguish";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateExtinguishType,
  updateExtinguishTypeReducer,
} from "src/reducers/extinguishReducer";

export default function UpdateTypeExtinguish() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateExtinguishTypeReducer,
    initialStateUpdateExtinguishType
  );

  const { name, isLoading, isError } = state;
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneTypeExtinguish(
          dispatch,
          searchParams.get("id")
        );
        console.log(result);
        if (result) {
          dispatch({
            type: "SET_TYPE",
            payload: result.data,
          });
        }
      }
    };
    getdata();
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (name: string) => {
      const result = await updateTypeExtinguish(
        name,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/type/list/extinguish?page=1`);
      }
    };

    postnew(name);
  };
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Update Data Type Extinguish`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Update Data Type Untuk Extinguish`} />
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Nama Type</p>
                  <input
                    type="text"
                    className={styles.inputAsset}
                    value={name || ""}
                    onChange={(e) =>
                      dispatch({ type: "SET_NAME", payload: e.target.value })
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
