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
        link1="/assets/air/all"
        link2="/assets/conveyance/all"
        link3="/assets/electrical/all"
        link4="/assets/extinguish/all"
        link5="/assets/finishing/all"
        link6="/assets/comfort/all"
        link7="/assets/lighting/all"
        link8="/assets/fuel/all"
        link9="/assets/network/all"
        link10="/assets/pump/all"
        link11="/assets/safety/all"
        link12="/assets/security/all"
      />
    </>
  );
}
