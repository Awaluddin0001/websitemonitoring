import ErrorFetch from "@/components/error/ErrorFetch";
import HeadPage from "@/components/header/HeadPageMonitoring";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import {
  getOneBrandFurniture,
  updateBrandFurniture,
} from "@/services/furniture/dapotFurniture";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateFurnitureBrand,
  updateFurnitureBrandReducer,
} from "src/reducers/furnitureReducer";
export default function UpdateBrandFurniture() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateFurnitureBrandReducer,
    initialStateUpdateFurnitureBrand
  );
  const { name, isLoading, isError } = state;

  useEffect(() => {
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneBrandFurniture(
          dispatch,
          searchParams.get("id")
        );
        console.log(result);
        if (result) {
          dispatch({
            type: "SET_NAME",
            payload: result.data.name,
          });
        }
      }
    };
    getdata();
  }, [searchParams.get("id")]);

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (name: any) => {
      const result = await updateBrandFurniture(
        name,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/brand/list/furniture?page=1`);
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
          <HeadPage title={`Update Data Brand Furniture`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Update Data Brand Furniture`} />
          <div className={styles.container}>
            <h2 className={styles.titleInput}>Nama Brand</h2>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={name}
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
