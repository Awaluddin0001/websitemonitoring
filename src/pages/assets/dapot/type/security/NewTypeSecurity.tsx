import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import {
  getSubCategoriesSecurity,
  postTypeSecurity,
} from "@/services/security/dapotSecurity";
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  initialStateUpdateSecurityType,
  updateSecurityTypeReducer,
} from "src/reducers/securityReducer";
import Select from "react-select";

interface Options {
  value: string;
  label: string;
}

const styleSelect = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#0ecbc0" : "#333",
    fontSize: "5rem",
    padding: "1px 3px",
    borderRadius: "5px",
    border: "1px solid #333",
  }),
};

const themeSelect = (theme: any) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: "#fcd100",
    primary: "#0ecbc0",
  },
});

export default function NewTypeSecurity() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateSecurityTypeReducer,
    initialStateUpdateSecurityType
  );

  const { name, sub_category_id, list_sub_category, isLoading, isError } =
    state;

  const handleSubCategoryHandler = (selectedOption: Options | null) => {
    dispatch({
      type: "SET_SUB_CATEGORY_CHANGE",
      payload: {
        sub_category_id: selectedOption,
      },
    });
  };

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const data = await getSubCategoriesSecurity();
        const selectOptions = data.data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        dispatch({ type: "LIST_SUB_CATEGORY", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch floors" });
      }
    };
    fetchSubCategories();
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postnew = async (
      name: string,
      sub_category_id: { value: string; label: string }
    ) => {
      const result = await postTypeSecurity(
        name,
        sub_category_id.value!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/type/list/security?page=1`);
      }
    };

    postnew(name, sub_category_id);
  };
  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Data Type Security`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Type Untuk Security`} />
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
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>SUB CATEGORY</p>
                  <Select
                    value={sub_category_id}
                    onChange={handleSubCategoryHandler}
                    options={list_sub_category}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
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
