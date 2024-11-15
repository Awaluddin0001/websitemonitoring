import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SSAPLantai1() {
  const navigate = useNavigate();
  const [fillValue, setFillValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false); // Menambah state untuk disable input lain
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;

  const handleInputChange = (value: string) => {
    setFillValue(value);
    setIsInputDisabled(value !== ""); // Jika ada input yang diisi, disable input lain
  };

  const handleSubmitApar = (id: string) => {
    const postnew = async () => {
      setIsLoading(true);
      const result: any = await axios.post(
        `${import.meta.env.VITE_API_FIRE}/api/v1/fire/add/manual/apar`,
        {
          value: fillValue,
          id: id,
          user_id,
        }
      );
      console.log(result);
      if (result.data.success) {
        setIsLoading(false);
        navigate(`/main/dashboard`);
      } else {
        setIsError(result.message);
        setIsLoading(false);
      }
    };

    postnew();
  };
  const handleSubmitNn100 = (id: string) => {
    const postnew = async () => {
      setIsLoading(true);
      const result: any = await axios.post(
        `${import.meta.env.VITE_API_FIRE}/api/v1/fire/add/manual/nn100`,
        {
          value: fillValue,
          id: id,
          user_id,
        }
      );
      console.log(result);
      if (result.data.success) {
        setIsLoading(false);
        navigate(`/main/dashboard`);
      } else {
        setIsError(result.message);
        setIsLoading(false);
      }
    };

    postnew();
  };

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Input Manual Fire System Lantai 1`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Manual Fire System Lantai 1`} />
          <div className={styles.sectionInput} style={{ overflowY: "scroll" }}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Input volume tabung terbaru</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR LOBBY</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP102");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR BATTERY A</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP103");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR BATTERY B</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP104");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR INNER GAS</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP105");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR BATTERY C</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP106");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR TRAFO</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP107");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR GENSET</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP108");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR TANGKI</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP109");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR CONTROL ROOM</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP110");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 01</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN101");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 02</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN102");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 03</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN103");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 04</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN104");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 05</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN105");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 06</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN106");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 07</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN107");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 08</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN108");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 09</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN109");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 10</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN110");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 11</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN111");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 12</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN112");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 13</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN113");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 14</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN114");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 15</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN115");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 16</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN116");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 17</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN117");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 18</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN118");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 19</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN119");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 20</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN120");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 21</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN121");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 22</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN122");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 23</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN123");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 24</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN124");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 25</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN125");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 26</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN126");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 27</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN127");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 28</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN128");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 29</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN129");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 30</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN130");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 31</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN131");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 32</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN132");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 33</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN133");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 34</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN134");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 35</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN135");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 36</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN136");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 37</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN137");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 38</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN138");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 39</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN139");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>NN100 40</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan MPa"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNn100("SSNN140");
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR SECURITY</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={fillValue || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                    disabled={isInputDisabled && fillValue === ""}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmitApar("SSAP101");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
