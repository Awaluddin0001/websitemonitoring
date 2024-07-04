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
        link1="/main/assets/datapotensi/category/air/"
        link2="/main/assets/datapotensi/category/conveyance/"
        link3="/main/assets/datapotensi/category/electrical/rectifier/list"
        link4="/main/assets/datapotensi/category/extinguish/"
        link5="/main/assets/datapotensi/category/finishing/"
        link6="/main/assets/datapotensi/category/comfort/"
        link7="/main/assets/datapotensi/category/lighting/"
        link8="/main/assets/datapotensi/category/fuel/"
        link9="/main/assets/datapotensi/category/network/"
        link10="/main/assets/datapotensi/category/pump/"
        link11="/main/assets/datapotensi/category/safety/"
        link12="/main/assets/datapotensi/category/security/"
      />
    </>
  );
}
