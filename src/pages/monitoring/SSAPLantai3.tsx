import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SSAPLantai3() {
  const navigate = useNavigate();
  const [rectifier, setRectifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const postnew = async () => {
      setIsLoading(true);
      const result: any = await axios.post(
        `${
          import.meta.env.VITE_API_POWER
        }/api/v1/monitoring/manual/add/rectifier`,
        {
          rectifier,
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
          <HeadPage title={`Input Manual Fire System Lantai 3`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Manual Fire System Lantai 3`} />
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Input volume tabung terbaru</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR A LOBBY</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR B LOBBY</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR RADIO A</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR LOADING AREA</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR RADIO B</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR TRANSMISI</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>APAR CORE</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                    placeholder="Satuan Bar"
                  />
                  <button
                    className={styles.buttonSubmit}
                    onClick={handleSubmit}
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
