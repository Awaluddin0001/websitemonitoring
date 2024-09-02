import { createBrowserRouter } from "react-router-dom";
import Desktopdash from "@/components/navbar/Desktopdash";
import Home from "@/pages/monitoring/Home";
import Monitoring from "@/pages/monitoring/Monitoring";
import Power from "@/pages/monitoring/Power";
import Thermal from "@/pages/monitoring/Thermal";
import Fire from "@/pages/monitoring/Fire";
import Bbm from "@/pages/monitoring/Bbm";
import Assets from "@/pages/assets/Assets";

import NewBrandElectrical from "@/pages/assets/dapot/brand/electrical/NewBrandElectrical";
import ListBrandElectrical from "@/pages/assets/dapot/brand/electrical/ListBrandElectrical";
import NewVendorElectrical from "@/pages/assets/dapot/vendor/electrical/NewVendorElectrical";

import ListVendorElectrical from "@/pages/assets/dapot/vendor/electrical/ListVendorElectrical";
import AssetsList from "@/pages/assets/AssetsList";
import AssetListCategory from "@/pages/assets/dapot/AssetsListCategory";
import SpaceList from "@/pages/assets/space/SpaceList";
import SpacePlan from "@/pages/assets/space/SpacePlan";

import Login from "@/pages/login/Login";
import NotFound from "@/pages/NotFound";
import ElectricalRectifier from "@/pages/assets/dapot/category/electrical/ElectricalRectifier";
import ElectricalBattery from "@/pages/assets/dapot/category/electrical/ElectricalBattery";
import ElectricalPanel from "@/pages/assets/dapot/category/electrical/ElectricalPanel";
import ElectricalUps from "@/pages/assets/dapot/category/electrical/ElectricalUps";
import ElectricalTrafo from "@/pages/assets/dapot/category/electrical/ElectricalTrafo";
import ElectricalGenset from "@/pages/assets/dapot/category/electrical/ElectricalGenset";
import ElectricalLvmdp from "@/pages/assets/dapot/category/electrical/ElectricalLvmdp";
import ElectricalCubicle from "@/pages/assets/dapot/category/electrical/ElectricalCubicle";
import ElectricalRectifierAdd from "@/pages/assets/dapot/category/electrical/ElectricalRectifierAdd";
import ElectricalRectifierUpdate from "@/pages/assets/dapot/category/electrical/ElectricalRectifierUpdate";

import AuthWrapper from "@/utils/AuthWrapper";
import UpdateBrandElectrical from "@/pages/assets/dapot/brand/electrical/UpdateBrandElectrical";
import UpdateVendorElectrical from "@/pages/assets/dapot/vendor/electrical/UpdateVendorElectrical";
import ListTypeElectrical from "@/pages/assets/dapot/type/electrical/ListTypeElectrical";
import NewTypeElectrical from "@/pages/assets/dapot/type/electrical/NewTypeElectrical";
import UpdateTypeElectrical from "@/pages/assets/dapot/type/electrical/UpdateTypeElectrical";
import ListMaintenanceElectrical from "@/pages/assets/dapot/maintenance/electrical/ListMaintenanceElectrical";
import NewMaintenanceElectrical from "@/pages/assets/dapot/maintenance/electrical/NewMaintenanceElectrical";
import UpdateMaintenanceElectrical from "@/pages/assets/dapot/maintenance/electrical/UpdateMaintenanceElectrical";
import ElectricalAll from "@/pages/assets/dapot/category/electrical/ElectricalAll";
import RoomManagement from "@/pages/assets/dapot/category/RoomManagement";
import ElectricalRectifierDetail from "@/pages/assets/dapot/detail/electrical/ElectricalRectifierDetail";
import ElectricalBatteryAdd from "@/pages/assets/dapot/category/electrical/ElectricalBatteryAdd";
import ElectricalBatteryUpdate from "@/pages/assets/dapot/category/electrical/ElectricalBatteryUpdate";
import ElectricalBatteryDetail from "@/pages/assets/dapot/detail/electrical/ElectricalBatteryDetail";
import ElectricalCubicleAdd from "@/pages/assets/dapot/category/electrical/ElectricalCubicleAdd";
import ElectricalCubicleUpdate from "@/pages/assets/dapot/category/electrical/ElectricalCubicleUpdate";
import ElectricalCubicleDetail from "@/pages/assets/dapot/detail/electrical/ElectricalCubicleDetail";
import RectifierManualInput from "@/pages/monitoring/RectifierManualInput";
import ElectricalGensetAdd from "@/pages/assets/dapot/category/electrical/ElectricalGensetAdd";
import ElectricalGensetUpdate from "@/pages/assets/dapot/category/electrical/ElectricalGensetUpdate";
import ElectricalGensetDetail from "@/pages/assets/dapot/detail/electrical/ElectricalGensetDetail";
import ElectricalLvmdpAdd from "@/pages/assets/dapot/category/electrical/ElectricalLvmdpAdd";
import ElectricalLvmdpUpdate from "@/pages/assets/dapot/category/electrical/ElectricalLvmdpUpdate";
import ElectricalLvmdpDetail from "@/pages/assets/dapot/detail/electrical/ElectricalLvmdpDetail";
import ElectricalPanelAdd from "@/pages/assets/dapot/category/electrical/ElectricalPanelAdd";
import ElectricalPanelUpdate from "@/pages/assets/dapot/category/electrical/ElectricalPanelUpdate";
import ElectricalPanelDetail from "@/pages/assets/dapot/detail/electrical/ElectricalPanelDetail";
import ElectricalTrafoDetail from "@/pages/assets/dapot/detail/electrical/ElectricalTrafoDetail";
import ElectricalUpsDetail from "@/pages/assets/dapot/detail/electrical/ElectricalUpsDetail";
import ElectricalTrafoUpdate from "@/pages/assets/dapot/category/electrical/ElectricalTrafoUpdate";
import ElectricalUpsUpdate from "@/pages/assets/dapot/category/electrical/ElectricalUpsUpdate";
import ElectricalTrafoAdd from "@/pages/assets/dapot/category/electrical/ElectricalTrafoAdd";
import ElectricalUpsAdd from "@/pages/assets/dapot/category/electrical/ElectricalUpsAdd";
import ListLinkElectrical from "@/pages/assets/dapot/link/electrical/ListLinkElectrical";
import NewLinkElectrical from "@/pages/assets/dapot/link/electrical/NewLinkElectrical";
import UpdateLinkElectrical from "@/pages/assets/dapot/link/electrical/UpdateLinkElectrical";
import NetworkAll from "@/pages/assets/dapot/category/network/NetworkAll";
import NetworkComputer from "@/pages/assets/dapot/category/network/NetworkComputer";
import ListVendorNetwork from "@/pages/assets/dapot/vendor/network/ListVendorNetwork";
import NewVendorNetwork from "@/pages/assets/dapot/vendor/network/NewVendorNetwork";
import UpdateVendorNetwork from "@/pages/assets/dapot/vendor/network/UpdateVendorNetwork";
import NewBrandNetwork from "@/pages/assets/dapot/brand/network/NewBrandNetwork";
import UpdateBrandNetwork from "@/pages/assets/dapot/brand/network/UpdateBrandNetwork";
import ListBrandNetwork from "@/pages/assets/dapot/brand/network/ListBrandNetwork";
import ListTypeNetwork from "@/pages/assets/dapot/type/network/ListTypeNetwork";
import NewTypeNetwork from "@/pages/assets/dapot/type/network/NewTypeNetwork";
import UpdateTypeNetwork from "@/pages/assets/dapot/type/network/UpdateTypeNetwork";
import ListMaintenanceNetwork from "@/pages/assets/dapot/maintenance/network/ListMaintenanceNetwork";
import NewMaintenanceNetwork from "@/pages/assets/dapot/maintenance/network/NewMaintenanceNetwork";
import UpdateMaintenanceNetwork from "@/pages/assets/dapot/maintenance/network/UpdateMaintenanceNetwork";

import NetworkComputerAdd from "@/pages/assets/dapot/category/network/NetworkComputerAdd";
import NetworkComputerUpdate from "@/pages/assets/dapot/category/network/NetworkComputerUpdate";
import NetworkComputerDetail from "@/pages/assets/dapot/detail/network/NetworkComputerDetail";
import NetworkRackServer from "@/pages/assets/dapot/category/network/NetworkRackServer";
import NetworkRackserverAdd from "@/pages/assets/dapot/category/network/NetworkRackServerAdd";
import NetworkRackserverUpdate from "@/pages/assets/dapot/category/network/NetworkRackServerUpdate";
import NetworkRackServerDetail from "@/pages/assets/dapot/detail/network/NetworkRackServerDetail";
import NetworkStorage from "@/pages/assets/dapot/category/network/NetworkStorage";
import NetworkStorageAdd from "@/pages/assets/dapot/category/network/NetworkStorageAdd";
import NetworkStorageUpdate from "@/pages/assets/dapot/category/network/NetworkStorageUpdate";
import NetworkStorageDetail from "@/pages/assets/dapot/detail/network/NetworkStorageDetail";
import NetworkFirewall from "@/pages/assets/dapot/category/network/NetworkFirewall";
import NetworkFirewallAdd from "@/pages/assets/dapot/category/network/NetworkFirewallAdd";
import NetworkFirewallUpdate from "@/pages/assets/dapot/category/network/NetworkFirewallUpdate";
import NetworkFirewallDetail from "@/pages/assets/dapot/detail/network/NetworkFirewallDetail";
import NetworkSwitchesAdd from "@/pages/assets/dapot/category/network/NetworkSwitchesAdd";
import NetworkPatchPanelsAdd from "@/pages/assets/dapot/category/network/NetworkPatchPanelsAdd";
import NetworkRoutersAdd from "@/pages/assets/dapot/category/network/NetworkRoutersAdd";
import NetworkSwitchesUpdate from "@/pages/assets/dapot/category/network/NetworkSwitchesUpdate";
import NetworkPatchPanelsUpdate from "@/pages/assets/dapot/category/network/NetworkPatchPanelsUpdate";
import NetworkRoutersUpdate from "@/pages/assets/dapot/category/network/NetworkRoutersUpdate";
import NetworkSwitches from "@/pages/assets/dapot/category/network/NetworkSwitches";
import NetworkPatchPanels from "@/pages/assets/dapot/category/network/NetworkPatchPanels";
import NetworkRouters from "@/pages/assets/dapot/category/network/NetworkRouters";
import NetworkSwitchesDetail from "@/pages/assets/dapot/detail/network/NetworkSwitchesDetail";
import NetworkPatchPanelsDetail from "@/pages/assets/dapot/detail/network/NetworkPatchPanelsDetail";
import NetworkRoutersDetail from "@/pages/assets/dapot/detail/network/NetworkRoutersDetail";
import ListLinkNetwork from "@/pages/assets/dapot/link/network/ListLinkNetwork";
import NewLinkNetwork from "@/pages/assets/dapot/link/network/NewLinkNetwork";
import UpdateLinkNetwork from "@/pages/assets/dapot/link/network/UpdateLinkNetwork";
import SecurityAll from "@/pages/assets/dapot/category/security/SecurityAll";
import SecurityCctv from "@/pages/assets/dapot/category/security/SecurityCctv";
import SecurityCctvUpdate from "@/pages/assets/dapot/category/security/SecurityCctvUpdate";
import SecurityCctvAdd from "@/pages/assets/dapot/category/security/SecurityCctvAdd";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/roommanagement",
    element: (
      <AuthWrapper>
        <RoomManagement />
      </AuthWrapper>
    ),
  },
  {
    path: "/roommanagement/:floor",
    element: (
      <AuthWrapper>
        <RoomManagement />
      </AuthWrapper>
    ),
  },
  {
    path: "/main/",
    element: (
      <AuthWrapper>
        <Desktopdash />
      </AuthWrapper>
    ),
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "monitoring/",
        element: <Monitoring />,
      },
      {
        path: "monitoring/manual/add/rectifier",
        element: <RectifierManualInput />,
      },
      {
        path: "monitoring/thermal",
        element: <Thermal />,
      },
      {
        path: "monitoring/fire",
        element: <Fire />,
      },
      {
        path: "monitoring/bbm",
        element: <Bbm />,
      },
      {
        path: "monitoring/power",
        element: <Power />,
      },
      {
        path: "assets/",
        element: <Assets />,
      },
      {
        path: "assets/datapotensi/",
        element: <AssetsList />,
      },
      {
        path: "assets/datapotensi/brand/add/electrical",
        element: <NewBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/update/electrical",
        element: <UpdateBrandElectrical />,
      },

      {
        path: "assets/datapotensi/brand/list/electrical",
        element: <ListBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/add/network",
        element: <NewBrandNetwork />,
      },
      {
        path: "assets/datapotensi/brand/update/network",
        element: <UpdateBrandNetwork />,
      },

      {
        path: "assets/datapotensi/brand/list/network",
        element: <ListBrandNetwork />,
      },
      {
        path: "assets/datapotensi/category/",
        element: <AssetListCategory />,
      },
      // Category Add
      {
        path: "assets/datapotensi/category/add/electrical/rectifier",
        element: <ElectricalRectifierAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/battery",
        element: <ElectricalBatteryAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/cubicle",
        element: <ElectricalCubicleAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/genset",
        element: <ElectricalGensetAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/lvmdp",
        element: <ElectricalLvmdpAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/panel",
        element: <ElectricalPanelAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/trafo",
        element: <ElectricalTrafoAdd />,
      },
      {
        path: "assets/datapotensi/category/add/electrical/ups",
        element: <ElectricalUpsAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/computer",
        element: <NetworkComputerAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/rack_server",
        element: <NetworkRackserverAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/storage",
        element: <NetworkStorageAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/firewalls",
        element: <NetworkFirewallAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/network_switches",
        element: <NetworkSwitchesAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/patch_panels",
        element: <NetworkPatchPanelsAdd />,
      },
      {
        path: "assets/datapotensi/category/add/network/routers",
        element: <NetworkRoutersAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/cctv",
        element: <SecurityCctvAdd />,
      },
      // Category Update
      {
        path: "assets/datapotensi/category/update/electrical/rectifier",
        element: <ElectricalRectifierUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/battery",
        element: <ElectricalBatteryUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/cubicle",
        element: <ElectricalCubicleUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/genset",
        element: <ElectricalGensetUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/lvmdp",
        element: <ElectricalLvmdpUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/panel",
        element: <ElectricalPanelUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/trafo",
        element: <ElectricalTrafoUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/electrical/ups",
        element: <ElectricalUpsUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/computer",
        element: <NetworkComputerUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/rack_server",
        element: <NetworkRackserverUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/storage",
        element: <NetworkStorageUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/firewalls",
        element: <NetworkFirewallUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/network_switches",
        element: <NetworkSwitchesUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/patch_panels",
        element: <NetworkPatchPanelsUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/network/routers",
        element: <NetworkRoutersUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/cctv",
        element: <SecurityCctvUpdate />,
      },
      // category list
      {
        path: "assets/datapotensi/category/list/electrical/all",
        element: <ElectricalAll />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/rectifier",
        element: <ElectricalRectifier />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/battery",
        element: <ElectricalBattery />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/panel",
        element: <ElectricalPanel />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/ups",
        element: <ElectricalUps />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/trafo",
        element: <ElectricalTrafo />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/genset",
        element: <ElectricalGenset />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/lvmdp",
        element: <ElectricalLvmdp />,
      },
      {
        path: "assets/datapotensi/category/list/electrical/cubicle",
        element: <ElectricalCubicle />,
      },
      {
        path: "assets/datapotensi/category/list/network/all",
        element: <NetworkAll />,
      },
      {
        path: "assets/datapotensi/category/list/network/computer",
        element: <NetworkComputer />,
      },
      {
        path: "assets/datapotensi/category/list/network/rack_server",
        element: <NetworkRackServer />,
      },
      {
        path: "assets/datapotensi/category/list/network/storage",
        element: <NetworkStorage />,
      },
      {
        path: "assets/datapotensi/category/list/network/firewalls",
        element: <NetworkFirewall />,
      },
      {
        path: "assets/datapotensi/category/list/network/network_switches",
        element: <NetworkSwitches />,
      },
      {
        path: "assets/datapotensi/category/list/network/patch_panels",
        element: <NetworkPatchPanels />,
      },
      {
        path: "assets/datapotensi/category/list/network/routers",
        element: <NetworkRouters />,
      },
      {
        path: "assets/datapotensi/category/list/security/all",
        element: <SecurityAll />,
      },
      {
        path: "assets/datapotensi/category/list/security/cctv",
        element: <SecurityCctv />,
      },
      // vendor list
      {
        path: "assets/datapotensi/vendor/list/electrical",
        element: <ListVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/add/electrical",
        element: <NewVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/update/electrical",
        element: <UpdateVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/list/network",
        element: <ListVendorNetwork />,
      },
      {
        path: "assets/datapotensi/vendor/add/network",
        element: <NewVendorNetwork />,
      },
      {
        path: "assets/datapotensi/vendor/update/network",
        element: <UpdateVendorNetwork />,
      },
      {
        path: "assets/datapotensi/type/list/electrical",
        element: <ListTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/add/electrical",
        element: <NewTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/update/electrical",
        element: <UpdateTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/list/network",
        element: <ListTypeNetwork />,
      },
      {
        path: "assets/datapotensi/type/add/network",
        element: <NewTypeNetwork />,
      },
      {
        path: "assets/datapotensi/type/update/network",
        element: <UpdateTypeNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/list/electrical",
        element: <ListMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/add/electrical",
        element: <NewMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/update/electrical",
        element: <UpdateMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/list/network",
        element: <ListMaintenanceNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/add/network",
        element: <NewMaintenanceNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/update/network",
        element: <UpdateMaintenanceNetwork />,
      },
      // Category Detail
      {
        path: "assets/datapotensi/detail/electrical/rectifier",
        element: <ElectricalRectifierDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/battery",
        element: <ElectricalBatteryDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/cubicle",
        element: <ElectricalCubicleDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/genset",
        element: <ElectricalGensetDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/lvmdp",
        element: <ElectricalLvmdpDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/panel",
        element: <ElectricalPanelDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/trafo",
        element: <ElectricalTrafoDetail />,
      },
      {
        path: "assets/datapotensi/detail/electrical/ups",
        element: <ElectricalUpsDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/computer",
        element: <NetworkComputerDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/rack_server",
        element: <NetworkRackServerDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/storage",
        element: <NetworkStorageDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/firewalls",
        element: <NetworkFirewallDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/network_switches",
        element: <NetworkSwitchesDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/patch_panels",
        element: <NetworkPatchPanelsDetail />,
      },
      {
        path: "assets/datapotensi/detail/network/routers",
        element: <NetworkRoutersDetail />,
      },
      // Link List
      {
        path: "assets/datapotensi/link/list/electrical",
        element: <ListLinkElectrical />,
      },
      {
        path: "assets/datapotensi/link/list/network",
        element: <ListLinkNetwork />,
      },
      // link add
      {
        path: "assets/datapotensi/link/add/electrical",
        element: <NewLinkElectrical />,
      },
      {
        path: "assets/datapotensi/link/add/network",
        element: <NewLinkNetwork />,
      },

      // link update
      {
        path: "assets/datapotensi/link/update/electrical",
        element: <UpdateLinkElectrical />,
      },
      {
        path: "assets/datapotensi/link/update/network",
        element: <UpdateLinkNetwork />,
      },
      {
        path: "assets/space/",
        element: <SpaceList />,
      },
      {
        path: "assets/space/:floor",
        element: <SpacePlan />,
      },
    ],
  },
  {
    path: "/v1/",
  },

  {
    path: "*",
    element: (
      <AuthWrapper>
        <Desktopdash />
      </AuthWrapper>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
