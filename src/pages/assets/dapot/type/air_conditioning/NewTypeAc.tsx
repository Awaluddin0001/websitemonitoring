import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";

import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import {
  initialStateUpdateAirconditioningType,
  updateAirconditioningTypeReducer,
} from "src/reducers/airConditioningReducer";
import {
  getSubCategoriesAirconditioning,
  postTypeAirconditioning,
} from "@/services/air_conditioning/dapotAirConditioning";

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

export default function NewTypeAirconditioning() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateAirconditioningTypeReducer,
    initialStateUpdateAirconditioningType
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
        const data = await getSubCategoriesAirconditioning();
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
      const result = await postTypeAirconditioning(
        name,
        sub_category_id.value!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/type/list/airconditioning?page=1`);
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
          <HeadPage title={`Input Data Type Air Conditioning`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Type Untuk Air Conditioning`} />
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
