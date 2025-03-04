import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Input.module.css";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "@/services/user/userServices";
import { initialStateUpdateuser, updateUser } from "src/reducers/userReducer";
export default function ChangePassword() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(updateUser, initialStateUpdateuser);

  const { password, isLoading, isError } = state;

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const postnew = async (password: any) => {
      const result = await updatePassword(password, user_id, dispatch);
      if (result.success) {
        navigate(`/main/setting`);
      }
    };

    postnew(password);
  };
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Change Password`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Change Password`} />
          <div className={styles.container}>
            <h2 className={styles.titleInput}>Password</h2>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Password Baru"
                className={styles.inputText}
                onChange={(e) =>
                  dispatch({
                    type: "SET_PASSWORD",
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
