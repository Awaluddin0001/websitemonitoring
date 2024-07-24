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
        link1="/main/assets/datapotensi/category/air/air/list?page=1"
        link2="/main/assets/datapotensi/category/conveyance/lift/list?page=1"
        link3="/main/assets/datapotensi/category/electrical/rectifier/list?page=1"
        link4="/main/assets/datapotensi/category/extinguish/apar/list?page=1"
        link5="/main/assets/datapotensi/category/finishing/ceramic/list?page=1"
        link6="/main/assets/datapotensi/category/comfort/sofa/list?page=1"
        link7="/main/assets/datapotensi/category/lighting/lamp/list?page=1"
        link8="/main/assets/datapotensi/category/fuel/potreleum/list?page=1"
        link9="/main/assets/datapotensi/category/network/rack/list?page=1"
        link10="/main/assets/datapotensi/category/pump/pump/list?page=1"
        link11="/main/assets/datapotensi/category/safety/helmet/list?page=1"
        link12="/main/assets/datapotensi/category/security/cctv/list?page=1"
      />
    </>
  );
}
