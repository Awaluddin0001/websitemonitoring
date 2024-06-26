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
        link1="/assets/brand/list/airconditioning/air"
        link3="/assets/brand/list/electrical/rectifier"
        link4="/assets/brand/list/extinguish/cylinder"
        link6="/assets/brand/list/furniture/furniture"
        link7="/assets/brand/list/lighting/lighting"
        link8="/assets/brand/list/fluidtank/tank"
        link9="/assets/brand/list/networkit/rak_server"
        link10="/assets/brand/list/pump/pump"
        link11="/assets/brand/list/safety/safety"
        link12="/assets/brand/list/security/access_control"
      />
    </>
  );
}
