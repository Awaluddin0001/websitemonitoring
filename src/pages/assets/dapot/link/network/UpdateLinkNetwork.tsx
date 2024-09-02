import HeadPage from "@/components/header/HeadPageMonitoring";
import ErrorFetch from "@/components/error/ErrorFetch";
import LoadingFetch from "@/components/loading/LoadingFetch";
import styles from "@/css/module/Asset.module.css";
import {
  getNetworksLink,
  updateLinkNetwork,
} from "@/services/network/dapotNetwork";
import React, { useEffect, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  initialStateUpdateNetworkLink,
  updateNetworkLinkReducer,
} from "src/reducers/networkReducer";
import Select, { MultiValue } from "react-select";

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

export default function UpdateLinkNetwork() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    updateNetworkLinkReducer,
    initialStateUpdateNetworkLink
  );

  const { incoming, outgoing, list_network, isLoading, isError } = state;
  const [searchParams, _] = useSearchParams();
  const handleIncoming = (selectedOption: Options | null) => {
    dispatch({
      type: "SET_INCOMING",
      payload: selectedOption,
    });
  };
  const handleOutgoing = (selectedOption: MultiValue<Options> | null) => {
    dispatch({
      type: "SET_OUTGOING",
      payload: selectedOption,
    });
  };

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const data = await getNetworksLink();
        const selectOptions = data.data.map((item: any) => ({
          value: item.device_id,
          label: item.device_id,
        }));
        dispatch({ type: "LIST_NETWORK", payload: selectOptions });
      } catch (err) {
        dispatch({ type: "SET_IS_ERROR", payload: "Failed to fetch floors" });
      }
    };
    fetchSubCategories();
  }, []);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const stringOutgoing = outgoing.map((item: any) => item.value).join(", ");
    const postnew = async (
      incoming: { value: string; label: string },
      outgoing: string
    ) => {
      const result = await updateLinkNetwork(
        incoming.value!,
        outgoing,
        searchParams.get("id")!,
        dispatch
      );
      if (result.success) {
        navigate(`/main/assets/datapotensi/link/list/network?page=1`);
      }
    };

    postnew(incoming, stringOutgoing);
  };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Data Type Network`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Data Type Untuk Network`} />
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Incoming</p>
                  <Select
                    value={incoming}
                    onChange={handleIncoming}
                    options={list_network}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                  />
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Outgoing</p>
                  <Select
                    value={outgoing}
                    onChange={handleOutgoing}
                    options={list_network}
                    className={styles.selectAsset}
                    styles={styleSelect}
                    theme={themeSelect}
                    isMulti={true}
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
