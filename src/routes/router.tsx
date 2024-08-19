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

import AssetListBrand from "@/pages/assets/dapot/AssetsListBrand";
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
        path: "assets/datapotensi/brand/",
        element: <AssetListBrand />,
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
        path: "assets/datapotensi/category/",
        element: <AssetListCategory />,
      },
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
        path: "assets/datapotensi/link/list/electrical",
        element: <ListLinkElectrical />,
      },
      {
        path: "assets/datapotensi/link/add/electrical",
        element: <NewLinkElectrical />,
      },
      {
        path: "assets/datapotensi/link/update/electrical",
        element: <UpdateLinkElectrical />,
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
