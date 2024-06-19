import { Route, Routes, useLocation } from "react-router-dom";

/* pages */
import Desktopdash from "@/components/navbar/Desktopdash";
import Assets from "@/pages/inventory/Assets";
import Monitoring from "@/pages/monitoring/Monitoring";
import Cooling from "@/pages/monitoring/Cooling.tsx";
import Gas from "@/pages/monitoring/Gas.tsx";
import Home from "@/pages/monitoring/Home.tsx";
import Liquid from "@/pages/monitoring/Liquid.tsx";
import Login from "@/pages/login/Login";
import Power from "@/pages/monitoring/Power.tsx";
import SpacePlan from "@/pages/inventory/SpacePlan";
import RoomManagement from "@/pages/inventory/RoomManagement.tsx";

/* Inventory */
import AssetsList from "@/pages/inventory/AssetsList";
import AssetListBrand from "@/pages/inventory/AssetsListBrand";
import AssetListRoom from "@/pages/inventory/AssetsListRoom";
import AssetListCategory from "@/pages/inventory/AssetsListCategory";
import AssetListVendor from "@/pages/inventory/AssetsListVendor";
import AirAll from "@/pages/inventory/AirAll";
import ComfortAll from "@/pages/inventory/ComfortAll";
import ConveyanceAll from "@/pages/inventory/ConveyanceAll";
import ElectricalAll from "@/pages/inventory/ElectricalAll";
import ElectricalBattery from "@/pages/inventory/ElectricalBattery";
import ElectricalCubicle from "@/pages/inventory/ElectricalCubicle";
import ElectricalPanel from "@/pages/inventory/ElectricalPanel";
import ElectricalPdu from "@/pages/inventory/ElectricalPdu";
import ElectricalRectifier from "@/pages/inventory/ElectricalRectifier";
import ElectricalTrafo from "@/pages/inventory/ElectricalTrafo";
import ElectricalUps from "@/pages/inventory/ElectricalUps";
import ExtinguishAll from "@/pages/inventory/ExtinguishAll";
import FinishingAll from "@/pages/inventory/FinishingAll";
import FuelAll from "@/pages/inventory/FuelAll";
import InstallationAll from "@/pages/inventory/InstalationAll";
import LightingAll from "@/pages/inventory/LightingAll";
import NetworkAll from "@/pages/inventory/NetworkAll";
import PumpAll from "@/pages/inventory/PumpAll";
import SafetyAll from "@/pages/inventory/SafetyAll";
import SecurityAll from "@/pages/inventory/SecurityAll";
import ToolAll from "@/pages/inventory/ToolAll";
import SpaceList from "@/pages/inventory/SpaceList";

function App() {
  const location = useLocation();

  // Check if the current path starts with "/login" or "/roomManagement"
  const isLoginRoute = location.pathname.startsWith("/login");
  const isRoomManagementRoute = location.pathname.startsWith("/roomManagement");

  return isLoginRoute ? (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/:id" element={<Login />} />
    </Routes>
  ) : isRoomManagementRoute ? (
    <Routes>
      <Route path="/roomManagement" element={<RoomManagement />} />
      <Route path="/roomManagement/:floor" element={<RoomManagement />} />
    </Routes>
  ) : (
    <Desktopdash>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/power" element={<Power />} />
        <Route path="/thermal" element={<Cooling />} />
        <Route path="/fire" element={<Gas />} />
        <Route path="/bbm" element={<Liquid />} />
        {/* <Route path="/assets" element={<Navigate to="/assets/air/all" />} /> */}
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/list" element={<AssetsList />} />
        <Route path="/assets/list/brand" element={<AssetListBrand />} />
        <Route path="/assets/list/room" element={<AssetListRoom />} />
        <Route path="/assets/list/category" element={<AssetListCategory />} />
        <Route path="/assets/list/vendor" element={<AssetListVendor />} />
        <Route path="/assets/air/all" element={<AirAll />} />
        <Route path="/assets/comfort/all" element={<ComfortAll />} />
        <Route path="/assets/conveyance/all" element={<ConveyanceAll />} />
        <Route path="/assets/electrical/all" element={<ElectricalAll />} />
        <Route
          path="/assets/electrical/battery"
          element={<ElectricalBattery />}
        />
        <Route
          path="/assets/electrical/cubicle"
          element={<ElectricalCubicle />}
        />
        <Route path="/assets/electrical/panel" element={<ElectricalPanel />} />
        <Route path="/assets/electrical/pdu" element={<ElectricalPdu />} />
        <Route
          path="/assets/electrical/rectifier"
          element={<ElectricalRectifier />}
        />
        <Route path="/assets/electrical/trafo" element={<ElectricalTrafo />} />
        <Route path="/assets/electrical/ups" element={<ElectricalUps />} />
        <Route path="/assets/extinguish/all" element={<ExtinguishAll />} />
        <Route path="/assets/finishing/all" element={<FinishingAll />} />
        <Route path="/assets/fuel/all" element={<FuelAll />} />
        <Route path="/assets/installation/all" element={<InstallationAll />} />
        <Route path="/assets/lighting/all" element={<LightingAll />} />
        <Route path="/assets/network/all" element={<NetworkAll />} />
        <Route path="/assets/pump/all" element={<PumpAll />} />
        <Route path="/assets/safety/all" element={<SafetyAll />} />
        <Route path="/assets/security/all" element={<SecurityAll />} />
        <Route path="/assets/tool/all" element={<ToolAll />} />
        <Route path="/space/list" element={<SpaceList />} />
        <Route path="/space/plan/:floor" element={<SpacePlan />} />
      </Routes>
    </Desktopdash>
  );
}

export default App;

/**
 * Author: Awaluddin .
 * Github: https://github.com/Awaluddin0001
 * Date: 2024-06-10
 * Copyright © 2024 Awaluddin. All rights reserved.
 */
