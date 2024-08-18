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

export default function AssetListCategory() {
  return (
    <>
      <CategoryNavbar
        link1="/main/assets/datapotensi/category/list/airconditioning/all?page=1"
        link2="/main/assets/datapotensi/category/list/conveyance/all?page=1"
        link3="/main/assets/datapotensi/category/list/electrical/all?page=1"
        link4="/main/assets/datapotensi/category/list/extinguish/all?page=1"
        link5="/main/assets/datapotensi/category/list/buildingfinishing/all?page=1"
        link6="/main/assets/datapotensi/category/list/furniture/all?page=1"
        link7="/main/assets/datapotensi/category/list/lighting/all?page=1"
        link8="/main/assets/datapotensi/category/list/fluid/all?page=1"
        link9="/main/assets/datapotensi/category/list/network/all?page=1"
        link10="/main/assets/datapotensi/category/list/pump/all?page=1"
        link11="/main/assets/datapotensi/category/list/safety/all?page=1"
        link12="/main/assets/datapotensi/category/list/security/all?page=1"
      />
    </>
  );
}
