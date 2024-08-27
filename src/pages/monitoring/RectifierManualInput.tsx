import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RectifierManualInput() {
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
          <HeadPage title={`Input Manual Apparent Power (kVa) Rectifiers`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Input Manual Apparent Power (kVa) Rectifiers`} />
          <div className={styles.sectionInput}>
            <div className={styles.posisiInput}>
              <p className={styles.textTitle}>Input kVa terbaru</p>
              <div className={styles.inputGroup}>
                <div className={styles.containerInput}>
                  <p className={styles.textTitleInput}>Rectifier</p>
                  <input
                    type="number"
                    className={styles.inputAsset}
                    value={rectifier || ""}
                    onChange={(e) => setRectifier(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionInput}>
            <button className={styles.buttonSubmit} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}