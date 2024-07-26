import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Input.module.css";
import React, { useState } from "react";
export default function NewVendorConveyance() {
  const [vendorInput, setVendorInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(vendorInput);
      console.log(userInput);
      console.log(phoneInput);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeadPage title={`Input Data Vendor Untuk Conveyance`} />
      <div className={styles.inputContainer}>
        <div className={styles.inputGrouping}>
          <h2 className={styles.titleInput}>Nama Perusahaan</h2>
          <input
            type="text"
            placeholder="PT. XXXX"
            className={styles.inputText}
            onChange={(e) => setVendorInput(e.target.value)}
          />
        </div>
        <div className={styles.inputGrouping}>
          <h2 className={styles.titleInput}>Nama Penanggung Jawab</h2>
          <input
            type="text"
            placeholder="Abbas"
            className={styles.inputText}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className={styles.inputGrouping}>
          <h2 className={styles.titleInput}>Nomor Telefon</h2>
          <input
            type="text"
            placeholder="085xxxxxxxx"
            className={styles.inputText}
            onChange={(e) => setPhoneInput(e.target.value)}
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
  );
}
