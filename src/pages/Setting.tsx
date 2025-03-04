import styles from "@/css/module/Setting.module.css";
import HeadPageMonitoring from "@/components/header/HeadPageMonitoring";
// import fotoUser from "@/assets/png/userDefault.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Setting = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [roleName, setRoleName] = useState("");
  // const [userFoto, setUserFoto] = useState("");
  // const [imageFlip, setImageFlip] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const objUserData = JSON.parse(userData);
      setId(objUserData.id);
      // setUserFoto(objUserData.foto);
      setName(objUserData.name);
      setRoleName(objUserData.rolename);
    }
  }, []);

  return (
    <div className={styles.containerNotFound}>
      <HeadPageMonitoring title="Pengaturan Akun" />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            marginTop: "3rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                fontSize: "4rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  fontSize: "4rem",
                  fontWeight: "600",
                }}
              >
                <p>User ID</p>
                <p>:</p>
              </div>
              <p>{id}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                fontSize: "4rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  fontSize: "4rem",
                  fontWeight: "600",
                }}
              >
                <p>Nama</p>
                <p>:</p>
              </div>
              <p>{name}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                fontSize: "4rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  fontSize: "4rem",
                  fontWeight: "600",
                }}
              >
                <p>Posisi</p>
                <p>:</p>
              </div>
              <p>{roleName}</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            <div
              style={{
                fontSize: "2.6rem",
                marginBottom: "5rem",
                fontWeight: "500",
                backgroundColor: "#56CB0E",
                padding: "0.4rem 2rem",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Ganti Detail
            </div>
            <div
              style={{
                fontSize: "2.6rem",
                marginBottom: "5rem",
                fontWeight: "500",
                backgroundColor: "#0ECBC0",
                padding: "0.4rem 2rem",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("password");
              }}
            >
              Ganti Password
            </div>
          </div>
        </div>
        {/* image */}
        {/* <div
          className={styles.imageChange}
          onMouseOver={() => {
            console.log("tes");
            setImageFlip(true);
          }}
          onMouseOut={() => {
            console.log("yes");
            setImageFlip(false);
          }}
        >
          <div className={imageFlip ? styles.imageFront : styles.imageBack}>
            <div className={styles.buttonChangeImage}>Change Image</div>
          </div>
          {userFoto === "default" ? (
            <>
              <img src={fotoUser} alt="user foto" className={styles.logo} />
            </>
          ) : (
            <>
              <img src={fotoUser} alt="user foto" className={styles.logo} />
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Setting;
