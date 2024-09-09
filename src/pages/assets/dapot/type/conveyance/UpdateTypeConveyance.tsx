import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import {
  getOneTypeConveyance,
  updateTypeConveyance,
} from "@/services/conveyance/dapotConveyance";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateConveyanceType,
  updateConveyanceTypeReducer,
} from "src/reducers/conveyanceReducer";

export default function UpdateTypeConveyance() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateConveyanceTypeReducer,
    initialStateUpdateConveyanceType
  );

  const { name, isLoading, isError } = state;
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneTypeConveyance(
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
      const result = await updateTypeConveyance(
        name,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/type/list/conveyance?page=1`);
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
          <HeadPage title={`Update Data Type Conveyance`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Update Data Type Untuk Conveyance`} />
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
