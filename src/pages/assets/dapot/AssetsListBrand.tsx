import CategoryNavbar from "@/components/navbar/CategoryNavbar";

/*
  link1 = "air"
  link2 = "Conveyance"
  link3 = "electrical"
  link4 = "extinguish"
  link5 = "finishing"
  link6 = "furniture"
  link7 = "lamp"
  link8 = "tank"
  link9 = "network"
  link10 = "pump"
  link11 = "safety"
  link12 = "security"

*/

export default function AssetListBrand() {
  return (
    <>
      <CategoryNavbar
        link1="/main/assets/datapotensi/brand/list/airconditioning/air"
        link3="/main/assets/datapotensi/brand/list/electrical/rectifier"
        link4="/main/assets/datapotensi/brand/list/extinguish/cylinder"
        link6="/main/assets/datapotensi/brand/list/furniture/furniture"
        link7="/main/assets/datapotensi/brand/list/lighting/lighting"
        link8="/main/assets/datapotensi/brand/list/fluidtank/tank"
        link9="/main/assets/datapotensi/brand/list/networkit/rak_server"
        link10="/main/assets/datapotensi/brand/list/pump/pump"
        link11="/main/assets/datapotensi/brand/list/safety/safety"
        link12="/main/assets/datapotensi/brand/list/security/access_control"
      />
    </>
  );
}
