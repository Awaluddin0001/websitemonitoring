import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import { postVendorPump } from "@/services/pump/dapotPump";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  initialStateUpdatePumpVendor,
  updatePumpVendorReducer,
} from "src/reducers/pumpReducer";
export default function NewVendorPump() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updatePumpVendorReducer,
    initialStateUpdatePumpVendor
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
      const result = await postVendorPump(
        company,
        company_user_name,
        number_phone,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/vendor/list/pump?page=1`);
      }
    };

    postnew(company, company_user_name, number_phone);
  };
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Data Vendor Pump`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Vendor Untuk Pump`} />
          <div className={styles.inputContainer}>
            <div className={styles.inputGrouping}>
              <h2 className={styles.titleInput}>Nama Perusahaan</h2>
              <input
                type="text"
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
