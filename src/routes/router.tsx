import { createBrowserRouter } from "react-router-dom";
import Desktopdash from "@/components/navbar/Desktopdash";
import Home from "@/pages/monitoring/Home";
import Monitoring from "@/pages/monitoring/Monitoring";
import Power from "@/pages/monitoring/Power";
import Thermal from "@/pages/monitoring/Thermal";
import Fire from "@/pages/monitoring/Fire";
import Bbm from "@/pages/monitoring/Bbm";
import Assets from "@/pages/assets/Assets";
import NewBrandAirConditioning from "@/pages/assets/dapot/brand/NewBrandAirConditioning";
import NewBrandElectrical from "@/pages/assets/dapot/brand/NewBrandElectrical";
import NewBrandExtinguish from "@/pages/assets/dapot/brand/NewBrandExtinguish";
import NewBrandFurniture from "@/pages/assets/dapot/brand/NewBrandFurniture";
import NewBrandFluidTank from "@/pages/assets/dapot/brand/NewBrandFluidTank";
import NewBrandLighting from "@/pages/assets/dapot/brand/NewBrandLighting";
import NewBrandNetworkIt from "@/pages/assets/dapot/brand/NewBrandNetworkIt";
import NewBrandPump from "@/pages/assets/dapot/brand/NewBrandPump";
import NewBrandSafety from "@/pages/assets/dapot/brand/NewBrandSafety";
import NewBrandSecurity from "@/pages/assets/dapot/brand/NewBrandSecurity";
import ListBrandAirConditioning from "@/pages/assets/dapot/brand/ListBrandAirConditioning";
import ListBrandElectrical from "@/pages/assets/dapot/brand/ListBrandElectrical";
import ListBrandExtinguish from "@/pages/assets/dapot/brand/ListBrandExtinguish";
import ListBrandFluidTank from "@/pages/assets/dapot/brand/ListBrandFluidTank";
import ListBrandFurniture from "@/pages/assets/dapot/brand/ListBrandFurniture";
import ListBrandLighting from "@/pages/assets/dapot/brand/ListBrandLighting";
import ListBrandNetworkIt from "@/pages/assets/dapot/brand/ListBrandNetworkIt";
import ListBrandPump from "@/pages/assets/dapot/brand/ListBrandPump";
import ListBrandSafety from "@/pages/assets/dapot/brand/ListBrandSafety";
import ListBrandSecurity from "@/pages/assets/dapot/brand/ListBrandSecurity";
import NewVendorAirConditioning from "@/pages/assets/dapot/vendor/NewVendorAirConditioning";
import NewVendorConveyance from "@/pages/assets/dapot/vendor/NewVendorConveyance";
import NewVendorElectrical from "@/pages/assets/dapot/vendor/NewVendorElectrical";
import NewVendorExtinguish from "@/pages/assets/dapot/vendor/NewVendorExtinguish";
import NewVendorFinishing from "@/pages/assets/dapot/vendor/NewVendorFinishing";
import NewVendorFluidTank from "@/pages/assets/dapot/vendor/NewVendorFluidTank";
import NewVendorNetworkIt from "@/pages/assets/dapot/vendor/NewVendorNetworkIt";
import NewVendorPump from "@/pages/assets/dapot/vendor/NewVendorPump";
import NewVendorSafety from "@/pages/assets/dapot/vendor/NewVendorSafety";
import NewVendorSecurity from "@/pages/assets/dapot/vendor/NewVendorSecurity";
import ListVendorAirConditioning from "@/pages/assets/dapot/vendor/ListVendorAirConditioning";
import ListVendorConveyance from "@/pages/assets/dapot/vendor/ListVendorConveyance";
import ListVendorElectrical from "@/pages/assets/dapot/vendor/ListVendorElectrical";
import ListVendorExtinguish from "@/pages/assets/dapot/vendor/ListVendorExtinguish";
import ListVendorFinishing from "@/pages/assets/dapot/vendor/ListVendorFinishing";
import ListVendorFluidTank from "@/pages/assets/dapot/vendor/ListVendorFluidTank";
import ListVendorNetworkIt from "@/pages/assets/dapot/vendor/ListVendorNetworkIt";
import ListVendorPump from "@/pages/assets/dapot/vendor/ListVendorPump";
import ListVendorSafety from "@/pages/assets/dapot/vendor/ListVendorSafety";
import ListVendorSecurity from "@/pages/assets/dapot/vendor/ListVendorSecurity";
import AssetListBrand from "@/pages/assets/dapot/AssetsListBrand";
import AssetListVendor from "@/pages/assets/dapot/AssetsListVendor";
import AssetsList from "@/pages/assets/AssetsList";
import AssetListCategory from "@/pages/assets/dapot/AssetsListCategory";
import SpaceList from "@/pages/assets/space/SpaceList";
import SpacePlan from "@/pages/assets/space/SpacePlan";

import Login from "@/pages/login/Login";
import RoomManagement from "@/pages/assets/dapot/category/RoomManagement";
import NotFound from "@/pages/NotFound";
import ElectricalRectifier from "@/pages/assets/dapot/category/ElectricalRectifier";
import ElectricalBattery from "@/pages/assets/dapot/category/ElectricalBattery";
import ElectricalPanel from "@/pages/assets/dapot/category/ElectricalPanel";
import ElectricalUps from "@/pages/assets/dapot/category/ElectricalUps";
import ElectricalTrafo from "@/pages/assets/dapot/category/ElectricalTrafo";
import ElectricalGenset from "@/pages/assets/dapot/category/ElectricalGenset";
import ElectricalPdu from "@/pages/assets/dapot/category/ElectricalPdu";
import ElectricalCubicle from "@/pages/assets/dapot/category/ElectricalCubicle";
import ElectricalRectifieAdd from "@/pages/assets/dapot/category/ElectricalRectifierAdd";
import ElectricalRectifieUpdate from "@/pages/assets/dapot/category/ElectricalRectifierUpdate";

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
    element: <RoomManagement />,
  },
  {
    path: "/roommanagement/:floor",
    element: <RoomManagement />,
  },
  {
    path: "/main/",
    element: <Desktopdash />,
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
        path: "assets/datapotensi/brand/add/airconditioning/:type",
        element: <NewBrandAirConditioning />,
      },
      {
        path: "assets/datapotensi/brand/add/electrical/:type",
        element: <NewBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/add/extinguish/:type",
        element: <NewBrandExtinguish />,
      },
      {
        path: "assets/datapotensi/brand/add/furniture/:type",
        element: <NewBrandFurniture />,
      },
      {
        path: "assets/datapotensi/brand/add/fluidtank/:type",
        element: <NewBrandFluidTank />,
      },
      {
        path: "assets/datapotensi/brand/add/lighting/:type",
        element: <NewBrandLighting />,
      },
      {
        path: "assets/datapotensi/brand/add/networkit/:type",
        element: <NewBrandNetworkIt />,
      },
      {
        path: "assets/datapotensi/brand/add/pump/:type",
        element: <NewBrandPump />,
      },
      {
        path: "assets/datapotensi/brand/add/safety/:type",
        element: <NewBrandSafety />,
      },
      {
        path: "assets/datapotensi/brand/add/security/:type",
        element: <NewBrandSecurity />,
      },
      {
        path: "assets/datapotensi/brand/list/airconditioning/:type",
        element: <ListBrandAirConditioning />,
      },
      {
        path: "assets/datapotensi/brand/list/electrical/:type",
        element: <ListBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/list/extinguish/:type",
        element: <ListBrandExtinguish />,
      },
      {
        path: "assets/datapotensi/brand/list/fluidtank/:type",
        element: <ListBrandFluidTank />,
      },
      {
        path: "assets/datapotensi/brand/list/furniture/:type",
        element: <ListBrandFurniture />,
      },
      {
        path: "assets/datapotensi/brand/list/lighting/:type",
        element: <ListBrandLighting />,
      },
      {
        path: "assets/datapotensi/brand/list/networkit/:type",
        element: <ListBrandNetworkIt />,
      },
      {
        path: "assets/datapotensi/brand/list/pump/:type",
        element: <ListBrandPump />,
      },
      {
        path: "assets/datapotensi/brand/list/safety/:type",
        element: <ListBrandSafety />,
      },
      {
        path: "assets/datapotensi/brand/list/security/:type",
        element: <ListBrandSecurity />,
      },
      {
        path: "assets/datapotensi/category/",
        element: <AssetListCategory />,
      },
      {
        path: "assets/datapotensi/category/air/",
      },
      {
        path: "assets/datapotensi/category/conveyance/",
      },
      {
        path: "assets/datapotensi/category/electrical/rectifier/add",
        element: <ElectricalRectifieAdd />,
      },
      {
        path: "assets/datapotensi/category/electrical/rectifier/update",
        element: <ElectricalRectifieUpdate />,
      },
      {
        path: "assets/datapotensi/category/electrical/rectifier/list",
        element: <ElectricalRectifier />,
      },
      {
        path: "assets/datapotensi/category/electrical/battery/list",
        element: <ElectricalBattery />,
      },
      {
        path: "assets/datapotensi/category/electrical/panel/list",
        element: <ElectricalPanel />,
      },
      {
        path: "assets/datapotensi/category/electrical/ups/list",
        element: <ElectricalUps />,
      },
      {
        path: "assets/datapotensi/category/electrical/trafo/list",
        element: <ElectricalTrafo />,
      },
      {
        path: "assets/datapotensi/category/electrical/genset/list",
        element: <ElectricalGenset />,
      },
      {
        path: "assets/datapotensi/category/electrical/pdu/list",
        element: <ElectricalPdu />,
      },
      {
        path: "assets/datapotensi/category/electrical/cubicle/list",
        element: <ElectricalCubicle />,
      },
      {
        path: "assets/datapotensi/category/electrical/rectifier/edit",
      },
      {
        path: "assets/datapotensi/category/extinguish/",
      },
      {
        path: "assets/datapotensi/category/finishing/",
      },
      {
        path: "assets/datapotensi/category/fluidtank/",
      },
      {
        path: "assets/datapotensi/category/finishing/",
      },
      {
        path: "assets/datapotensi/category/networkit/",
      },
      {
        path: "assets/datapotensi/category/pump/",
      },
      {
        path: "assets/datapotensi/category/safety/",
      },
      {
        path: "assets/datapotensi/category/security/",
      },
      {
        path: "assets/datapotensi/vendor/",
        element: <AssetListVendor />,
      },
      {
        path: "assets/datapotensi/vendor/add/airconditioning",
        element: <NewVendorAirConditioning />,
      },
      {
        path: "assets/datapotensi/vendor/add/conveyance",
        element: <NewVendorConveyance />,
      },
      {
        path: "assets/datapotensi/vendor/add/electrical",
        element: <NewVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/add/extinguish",
        element: <NewVendorExtinguish />,
      },
      {
        path: "assets/datapotensi/vendor/add/finishing",
        element: <NewVendorFinishing />,
      },
      {
        path: "assets/datapotensi/vendor/add/fluidtank",
        element: <NewVendorFluidTank />,
      },
      {
        path: "assets/datapotensi/vendor/add/networkit",
        element: <NewVendorNetworkIt />,
      },
      {
        path: "assets/datapotensi/vendor/add/pump",
        element: <NewVendorPump />,
      },
      {
        path: "assets/datapotensi/vendor/add/safety",
        element: <NewVendorSafety />,
      },
      {
        path: "assets/datapotensi/vendor/add/security",
        element: <NewVendorSecurity />,
      },
      {
        path: "assets/datapotensi/vendor/list/airconditioning",
        element: <ListVendorAirConditioning />,
      },
      {
        path: "assets/datapotensi/vendor/list/conveyance",
        element: <ListVendorConveyance />,
      },
      {
        path: "assets/datapotensi/vendor/list/electrical",
        element: <ListVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/list/extinguish",
        element: <ListVendorExtinguish />,
      },
      {
        path: "assets/datapotensi/vendor/list/finishing",
        element: <ListVendorFinishing />,
      },
      {
        path: "assets/datapotensi/vendor/list/fluidtank",
        element: <ListVendorFluidTank />,
      },
      {
        path: "assets/datapotensi/vendor/list/networkit",
        element: <ListVendorNetworkIt />,
      },
      {
        path: "assets/datapotensi/vendor/list/pump",
        element: <ListVendorPump />,
      },
      {
        path: "assets/datapotensi/vendor/list/safety",
        element: <ListVendorSafety />,
      },
      {
        path: "assets/datapotensi/vendor/list/security",
        element: <ListVendorSecurity />,
      },
      {
        path: "assets/datapotensi/room/",
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
    element: <NotFound />,
  },
]);
