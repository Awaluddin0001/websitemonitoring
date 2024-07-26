import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Input.module.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function NewBrandAirConditioning() {
  const [brandInput, setBrandInput] = useState("");
  const { type } = useParams();

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(brandInput);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeadPage title={`Input Data Brand Untuk ${type}`} />
      <div className={styles.container}>
        <h2 className={styles.titleInput}>Nama Brand</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Input Nama Brand"
            className={styles.inputText}
            onChange={(e) => setBrandInput(e.target.value)}
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
  );
}
