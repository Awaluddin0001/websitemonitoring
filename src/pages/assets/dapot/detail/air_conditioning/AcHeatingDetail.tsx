import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CardDetail from "@/components/card/CardDetail";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useSearchParams } from "react-router-dom";
import {
  initialStateHeatingDevice,
  updateHeatingDeviceReducer,
} from "src/reducers/airConditioningReducer";
import { getHeater } from "@/services/air_conditioning/dapotHeater";

export default function AirConditioningHeatingDetail() {
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(
    updateHeatingDeviceReducer,
    initialStateHeatingDevice
  );
  const {
    asset_id,
    ne_id,
    site_id,
    floor_id,
    room_id,
    vendor_id,
    vendor_phone,
    vendor_user_name,
    maintenance_id,
    maintenance_activity,
    name,
    temperature_max,
    power,
    installation_date,
    condition_asset,
    status,
    waranty,
    amount,
    notes,
    link_in,
    link_out,
    isLoading,
    isError,
    photo1,
    photo2,
    photo3,
  } = state;

  useEffect(() => {
    const getRecti = async () => {
      try {
        const data = await getHeater(searchParams.get("id"), dispatch);
        console.log(data);
        dispatch({
          type: "GET_HEATINGDEVICE",
          payload: {
            asset_id: data.asset_id,
            ne_id: data.ne_id,
            maintenance_activity: data.maintenance_activity,
            vendor_user_name: data.vendor_user_name,
            vendor_phone: data.vendor_phone,
            site_id: { value: data.site_id, label: data.site_name },
            floor_id: { value: data.floor_id, label: data.floor_name },
            room_id: { value: data.room_id, label: data.room_name },
            brand_id: { value: data.brand_id, label: data.brand_name },
            vendor_id: { value: data.vendor_id, label: data.vendor_name },
            maintenance_id: {
              value: data.maintenance_id,
              label: data.maintenance_date,
            },
            document_name: data.document_name,
            link_in: data.incoming,
            link_out: [data.outgoing],
            link_id: { value: data.link_id, label: data.link_id },
            type_id: { value: data.type_id, label: data.type_name },
            name: data.name,
            temperature_max: data.temperature_max,
            power: data.power,
            waranty: data.waranty,
            amount: data.amount,
            installation_date: data.installation_date,
            condition_asset: data.condition_asset,
            status: data.status,
            notes: data.notes,
            photo1: data.photo1,
            photo2: data.photo2,
            photo3: data.photo3,
          },
        });
      } catch (err) {
        dispatch({
          type: "SET_IS_ERROR",
          payload: "Failed to fetch Air",
        });
      }
    };

    getRecti();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingFetch />
      ) : isError ? (
        <>
          <HeadPage title={`Detail Data untuk ${searchParams.get("id")}`} />
          <ErrorFetch message={isError} />
        </>
      ) : (
        <>
          <HeadPage title={`Detail Data untuk ${searchParams.get("id")}`} />
          <div className={styles.detailSubCategory}>
            <div className={styles.cardsDetailDeck}>
              <CardDetail
                title="Position"
                type="position"
                siteId={site_id.value}
                siteName={site_id.label}
                floorName={floor_id.label}
                roomName={room_id.label}
                neId={ne_id}
              />
              <CardDetail
                title="Vendor"
                type="vendor"
                companyName={vendor_id.label}
                personName={vendor_user_name}
                numberPhone={vendor_phone}
              />
              <CardDetail
                title="Model"
                type="model"
                typeName={"Tidak ada"}
                brandName={"tidak ada"}
              />
              <CardDetail
                title="Maintenance"
                type="maintenance"
                deviceId={asset_id}
                maintenanceDate={maintenance_id.label}
                maintenanceActivity={maintenance_activity}
              />
              <CardDetail
                title="Link"
                type="link"
                linkIn={link_in}
                linkOut={link_out}
              />
            </div>
            <CardDetail
              title="Detail"
              type="detail"
              detail={{
                nama: name,
                temperature_max: temperature_max,
                status: status,
                notes: notes,
                amount: amount,
                garansi: waranty,
                power: power,
                installation_date: installation_date,
                condition_asset: condition_asset,
              }}
            />
            <CardDetail
              title="Foto"
              type="foto"
              urlImage="https://192.168.1.62:2001/images/airconditioning"
              imageTitle1={photo1}
              imageTitle2={photo2}
              imageTitle3={photo3}
            />
          </div>
        </>
      )}
    </>
  );
}
