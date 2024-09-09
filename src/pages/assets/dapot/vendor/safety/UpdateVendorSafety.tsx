import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import {
  getOneVendorSafety,
  updateVendorSafety,
} from "@/services/safety/dapotSafety";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateSafetyVendor,
  updateSafetyVendorReducer,
} from "src/reducers/safetyReducer";
export default function UpdateVendorSafety() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateSafetyVendorReducer,
    initialStateUpdateSafetyVendor
  );

  const { company, company_user_name, number_phone, isLoading, isError } =
    state;
  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (
      company: string,
      company_user_name: string,
      number_phone: string
    ) => {
      const result = await updateVendorSafety(
        company,
        company_user_name,
        number_phone,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/vendor/list/safety?page=1`);
      }
    };

    postnew(company, company_user_name, number_phone);
  };

  useEffect(() => {
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneVendorSafety(
          dispatch,
          searchParams.get("id")
        );
        if (result) {
          dispatch({
            type: "SET_VENDOR",
            payload: result.data,
          });
        }
      }
    };
    getdata();
  }, [searchParams.get("id")]);
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Data Brand Safety`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Vendor Untuk Safety`} />
          <div className={styles.inputContainer}>
            <div className={styles.inputGrouping}>
              <h2 className={styles.titleInput}>Nama Perusahaan</h2>
              <input
                type="text"
                value={company}
                placeholder="PT. XXXX"
                className={styles.inputText}
                onChange={(e) =>
                  dispatch({ type: "SET_COMPANY", payload: e.target.value })
                }
              />
            </div>
            <div className={styles.inputGrouping}>
              <h2 className={styles.titleInput}>Nama Penanggung Jawab</h2>
              <input
                type="text"
                value={company_user_name}
                placeholder="Abbas"
                className={styles.inputText}
                onChange={(e) =>
                  dispatch({
                    type: "SET_COMPANY_USER_NAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.inputGrouping}>
              <h2 className={styles.titleInput}>Nomor Telefon</h2>
              <input
                type="text"
                value={number_phone}
                placeholder="085xxxxxxxx"
                className={styles.inputText}
                onChange={(e) =>
                  dispatch({
                    type: "SET_NUMBER_PHONE",
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className={styles.btnInput}
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}
