import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import { postBrandLighting } from "@/services/lighting/dapotLighting";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  initialStateUpdateLightBrand,
  updateLightBrandReducer,
} from "src/reducers/lightingReducer";
export default function NewBrandLighting() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateLightBrandReducer,
    initialStateUpdateLightBrand
  );

  const { name, isLoading, isError } = state;

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (name: any) => {
      const result = await postBrandLighting(name, dispatch);
      if (result.success) {
        navigate(`/main/assets/datapotensi/brand/list/lighting?page=1`);
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
          <HeadPage title={`Input Data Brand Lighting`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Brand Lighting`} />
          <div className={styles.container}>
            <h2 className={styles.titleInput}>Nama Brand</h2>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Input Nama Brand"
                className={styles.inputText}
                onChange={(e) =>
                  dispatch({
                    type: "SET_NAME",
                    payload: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className={styles.btnInput}
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
