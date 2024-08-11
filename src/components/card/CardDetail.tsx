import styles from "@/css/module/Card.module.css";
import PinCard from "@/assets/svg/pinCard.svg";
import detailActivity from "@/assets/svg/detailActivity.svg";
import detailBrand from "@/assets/svg/detailBrand.svg";
import detailCompany from "@/assets/svg/detailCompany.svg";
import detailDate from "@/assets/svg/detailDate.svg";
import detailImage from "@/assets/svg/detailImage.svg";
import detailPerson from "@/assets/svg/detailPerson.svg";
import detailPin from "@/assets/svg/detailPin.svg";
import detailRoom from "@/assets/svg/detailRoom.svg";
import detailType from "@/assets/svg/detailType.svg";
import detailIn from "@/assets/svg/detailIn.svg";
import detailOut from "@/assets/svg/detailOut.svg";
import detailDocument from "@/assets/svg/detailDocument.svg";

type CardDetailProps = {
  title: string;
  type: string;
  siteName?: string;
  siteId?: string;
  floorName?: string;
  roomName?: string;
  neId?: string;
  companyName?: string;
  personName?: string;
  numberPhone?: string;
  typeName?: string;
  brandName?: string;
  deviceId?: string;
  maintenanceDate?: string;
  maintenanceActivity?: string;
  linkIn?: string;
  linkOut?: string[];
  detail?: { [key: string]: string };
  urlDocument?: string;
  urlImage?: string;
  document_name?: string;
  imageTitle1?: string;
  imageTitle2?: string;
  imageTitle3?: string;
};

export default function CardDetail({
  title,
  type,
  siteName,
  siteId,
  floorName,
  roomName,
  neId,
  companyName,
  personName,
  numberPhone,
  typeName,
  brandName,
  deviceId,
  maintenanceDate,
  maintenanceActivity,
  linkIn,
  linkOut,
  detail,
  urlDocument,
  urlImage,
  document_name,
  imageTitle1,
  imageTitle2,
  imageTitle3,
}: CardDetailProps) {
  return (
    <div
      className={styles.cardDetail}
      style={{
        backgroundColor:
          type === "position"
            ? "#F3AF7E"
            : type === "vendor"
            ? "#E3F37E"
            : type === "model"
            ? "#AAF37E"
            : type === "maintenance"
            ? "#7EF3EC"
            : type === "link"
            ? "#F37E7E"
            : "#FFF",
      }}
      key={type}
    >
      <div className={styles.cardDetailTitle}>
        <img src={PinCard} alt="Pin For Title Card" />
        <p className={styles.title}>{title}:</p>
      </div>
      {type === "position" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentRow}>
            <img src={detailPin} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {siteName || ""} - {siteId || ""}
            </p>
          </div>
          <div className={styles.cardDetailContentRow}>
            <img src={detailRoom} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {floorName || ""} - {roomName || ""} - {neId || ""}
            </p>
          </div>
        </div>
      ) : type === "vendor" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentRow}>
            <img src={detailCompany} alt="Pin For Title Card" />
            <p className={styles.subtitle}>{companyName || ""}</p>
          </div>
          <div className={styles.cardDetailContentRow}>
            <img src={detailPerson} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {personName || ""} - {numberPhone || ""}
            </p>
          </div>
        </div>
      ) : type === "model" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentRow}>
            <img src={detailType} alt="Pin For Title Card" />
            <p className={styles.subtitle}>{typeName || ""}</p>
          </div>
          <div className={styles.cardDetailContentRow}>
            <img src={detailBrand} alt="Pin For Title Card" />
            <p className={styles.subtitle}>{brandName || ""}</p>
          </div>
        </div>
      ) : type === "maintenance" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentRow}>
            <img src={detailDate} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {deviceId || ""} - {maintenanceDate || "Belum Ada"}
            </p>
          </div>
          <div className={styles.cardDetailContentRow}>
            <img src={detailActivity} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {maintenanceActivity || "Belum Ada"}
            </p>
            {document_name && (
              <>
                <p className={styles.subtitle}>-</p>
                <a href={`${urlDocument}/${document_name}`} download>
                  <img src={detailDocument} alt="Pin For Title Card" />
                </a>
              </>
            )}
          </div>
        </div>
      ) : type === "link" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentRow}>
            <img src={detailIn} alt="Pin For Title Card" />
            <p className={styles.subtitle}>{linkIn || "Tidak ada"}</p>
          </div>
          <div className={styles.cardDetailContentRow}>
            <img src={detailOut} alt="Pin For Title Card" />
            <p className={styles.subtitle}>
              {(linkOut && linkOut[0] && linkOut?.map((item) => item)) ||
                "Tidak ada"}
            </p>
          </div>
        </div>
      ) : type === "detail" ? (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardDetailContentAll}>
            {detail &&
              Object.entries(detail)?.map(([key, value]) => {
                return (
                  <div
                    className={[
                      styles.cardDetailContentRow,
                      styles.fixedWidthRow,
                    ].join(" ")}
                    key={key}
                  >
                    <p className={styles.subtitle}>
                      {key.slice(0, 1).toUpperCase() + key.slice(1)}
                    </p>
                    <p className={styles.subtitle}> : </p>
                    <p className={styles.subtitle}>{value}</p>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className={styles.cardDetailContent}>
          <div className={styles.cardImageContentRow}>
            <div className={styles.cardImageContentColumn}>
              <div className={styles.cardDetailContentRow}>
                <img src={detailImage} alt="Pin For Title Card" />
                <p className={styles.subtitle}>{imageTitle1 || ""}</p>
              </div>
              <img
                src={`${urlImage}/${imageTitle1}`}
                alt="image device"
                className={styles.imageDeviceDetail}
              />
            </div>
            <div className={styles.cardImageContentColumn}>
              <div className={styles.cardDetailContentRow}>
                <img src={detailImage} alt="Pin For Title Card" />
                <p className={styles.subtitle}>{imageTitle2 || ""}</p>
              </div>
              <img
                src={`${urlImage}/${imageTitle2}`}
                alt="image device"
                className={styles.imageDeviceDetail}
              />
            </div>
            <div className={styles.cardImageContentColumn}>
              <div className={styles.cardDetailContentRow}>
                <img src={detailImage} alt="Pin For Title Card" />
                <p className={styles.subtitle}>{imageTitle3 || ""}</p>
              </div>
              <img
                src={`${urlImage}/${imageTitle3}`}
                alt="image device"
                className={styles.imageDeviceDetail}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
