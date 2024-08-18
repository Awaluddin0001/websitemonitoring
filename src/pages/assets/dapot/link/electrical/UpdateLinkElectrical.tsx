import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import {
  getOneTypeElectrical,
  getSubCategoriesElectrical,
  updateTypeElectrical,
} from "@/services/electrical/dapotElectrical";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateElectricalType,
  updateElectricalTypeReducer,
} from "src/reducers/electricalReducer";
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

export default function UpdateLinkElectrical() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateElectricalTypeReducer,
    initialStateUpdateElectricalType
  );

  const { name, sub_category_id, list_sub_category, isLoading, isError } =
    state;
  const [searchParams, _] = useSearchParams();
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
        const data = await getSubCategoriesElectrical();
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
    const getdata = async () => {
      if (searchParams.get("id")) {
        const result = await getOneTypeElectrical(
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
    const postnew = async (
      name: string,
      sub_category_id: { value: string; label: string }
    ) => {
      const result = await updateTypeElectrical(
        name,
        sub_category_id.value!,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/type/list/electrical?page=1`);
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
          <HeadPage title={`Update Data Type Electrical`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Update Data Type Untuk Electrical`} />
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
