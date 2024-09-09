import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import { postBrandExtinguish } from "@/services/extinguish/dapotExtinguish";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  initialStateUpdateExtinguishBrand,
  updateExtinguishBrandReducer,
} from "src/reducers/extinguishReducer";
export default function NewBrandExtinguish() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateExtinguishBrandReducer,
    initialStateUpdateExtinguishBrand
  );

  const { name, isLoading, isError } = state;

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (name: any) => {
      const result = await postBrandExtinguish(name, dispatch);
      if (result.success) {
        navigate(`/main/assets/datapotensi/brand/list/extinguish?page=1`);
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
          <HeadPage title={`Input Data Brand Extinguish`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Brand Extinguish`} />
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
