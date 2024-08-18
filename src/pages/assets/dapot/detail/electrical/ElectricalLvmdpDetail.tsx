import HeadPage from "@/components/header/HeadPageMonitoring";
import styles from "@/css/module/Asset.module.css";
import { useEffect, useReducer } from "react";
import {
  initialLvmdpState,
  updateLvmdpReducer,
} from "src/reducers/electricalReducer";
import "react-datepicker/dist/react-datepicker.css";
import CardDetail from "@/components/card/CardDetail";
import LoadingFetch from "@/components/loading/LoadingFetch";
import ErrorFetch from "@/components/error/ErrorFetch";
import { useSearchParams } from "react-router-dom";
import { getLvmdp } from "@/services/electrical/dapotLvmdp";

export default function ElectricalLvmdpDetail() {
  const [searchParams, _] = useSearchParams();
  const [state, dispatch] = useReducer(updateLvmdpReducer, initialLvmdpState);
  const {
    asset_id,
    ne_id,
    site_id,
    floor_id,
    room_id,
    brand_id,
    vendor_id,
    vendor_phone,
    vendor_user_name,
    maintenance_id,
    maintenance_activity,
    name,
    type_id,
    voltage_level,
    current_rating,
    breaker_type,
    breaker_rating,
    section,
    installation_date,
    condition_asset,
    status,
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
        const data = await getLvmdp(searchParams.get("id"), dispatch);
        dispatch({
          type: "GET_LVMDP",
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
            name: data.name,
            type_id: { value: data.type_id, label: data.type_name },
            voltage_level: data.voltage_level,
            current_rating: data.current_rating,
            breaker_type: data.breaker_type,
            breaker_rating: data.breaker_rating,
            section: data.section,
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
          payload: "Failed to fetch lvmdp",
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
                typeName={type_id.label}
                brandName={brand_id.label}
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
                status: status,
                notes: notes,
                voltage_level: voltage_level,
                current_rating: current_rating,
                breaker_type: breaker_type,
                breaker_rating: breaker_rating,
                section: section,
                installation_date: installation_date,
                condition_asset: condition_asset,
              }}
            />
            <CardDetail
              title="Foto"
              type="foto"
              urlImage="http://localhost:2001/images/electrical"
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
