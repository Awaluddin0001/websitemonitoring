import { createBrowserRouter } from "react-router-dom";
import Desktopdash from "@/components/navbar/Desktopdash";
import Home from "@/pages/monitoring/Home";
import Monitoring from "@/pages/monitoring/Monitoring";
import Power from "@/pages/monitoring/Power";
import Thermal from "@/pages/monitoring/Thermal";
import Fire from "@/pages/monitoring/Fire";
import Bbm from "@/pages/monitoring/Bbm";
import Assets from "@/pages/inventory/Assets";
import NewBrandAirConditioning from "@/pages/inventory/brand/NewBrandAirConditioning";
import NewBrandElectrical from "@/pages/inventory/brand/NewBrandElectrical";
import NewBrandExtinguish from "@/pages/inventory/brand/NewBrandExtinguish";
import NewBrandFurniture from "@/pages/inventory/brand/NewBrandFurniture";
import NewBrandFluidTank from "@/pages/inventory/brand/NewBrandFluidTank";
import NewBrandLighting from "@/pages/inventory/brand/NewBrandLighting";
import NewBrandNetworkIt from "@/pages/inventory/brand/NewBrandNetworkIt";
import NewBrandPump from "@/pages/inventory/brand/NewBrandPump";
import NewBrandSafety from "@/pages/inventory/brand/NewBrandSafety";
import NewBrandSecurity from "@/pages/inventory/brand/NewBrandSecurity";
import ListBrandAirConditioning from "@/pages/inventory/brand/ListBrandAirConditioning";
import ListBrandElectrical from "@/pages/inventory/brand/ListBrandElectrical";
import ListBrandExtinguish from "@/pages/inventory/brand/ListBrandExtinguish";
import ListBrandFluidTank from "@/pages/inventory/brand/ListBrandFluidTank";
import ListBrandFurniture from "@/pages/inventory/brand/ListBrandFurniture";
import ListBrandLighting from "@/pages/inventory/brand/ListBrandLighting";
import ListBrandNetworkIt from "@/pages/inventory/brand/ListBrandNetworkIt";
import ListBrandPump from "@/pages/inventory/brand/ListBrandPump";
import ListBrandSafety from "@/pages/inventory/brand/ListBrandSafety";
import ListBrandSecurity from "@/pages/inventory/brand/ListBrandSecurity";
import NewVendorAirConditioning from "@/pages/inventory/vendor/NewVendorAirConditioning";
import NewVendorConveyance from "@/pages/inventory/vendor/NewVendorConveyance";
import NewVendorElectrical from "@/pages/inventory/vendor/NewVendorElectrical";
import NewVendorExtinguish from "@/pages/inventory/vendor/NewVendorExtinguish";
import NewVendorFinishing from "@/pages/inventory/vendor/NewVendorFinishing";
import NewVendorFluidTank from "@/pages/inventory/vendor/NewVendorFluidTank";
import NewVendorNetworkIt from "@/pages/inventory/vendor/NewVendorNetworkIt";
import NewVendorPump from "@/pages/inventory/vendor/NewVendorPump";
import NewVendorSafety from "@/pages/inventory/vendor/NewVendorSafety";
import NewVendorSecurity from "@/pages/inventory/vendor/NewVendorSecurity";
import ListVendorAirConditioning from "@/pages/inventory/vendor/ListVendorAirConditioning";
import ListVendorConveyance from "@/pages/inventory/vendor/ListVendorConveyance";
import ListVendorElectrical from "@/pages/inventory/vendor/ListVendorElectrical";
import ListVendorExtinguish from "@/pages/inventory/vendor/ListVendorExtinguish";
import ListVendorFinishing from "@/pages/inventory/vendor/ListVendorFinishing";
import ListVendorFluidTank from "@/pages/inventory/vendor/ListVendorFluidTank";
import ListVendorNetworkIt from "@/pages/inventory/vendor/ListVendorNetworkIt";
import ListVendorPump from "@/pages/inventory/vendor/ListVendorPump";
import ListVendorSafety from "@/pages/inventory/vendor/ListVendorSafety";
import ListVendorSecurity from "@/pages/inventory/vendor/ListVendorSecurity";
import AssetListBrand from "@/pages/inventory/AssetsListBrand";
import AssetListVendor from "@/pages/inventory/AssetsListVendor";
import AssetsList from "@/pages/inventory/AssetsList";
import AssetListCategory from "@/pages/inventory/AssetsListCategory";
import SpaceList from "@/pages/inventory/SpaceList";
import SpacePlan from "@/pages/inventory/SpacePlan";

import Login from "@/pages/login/Login";
import RoomManagement from "@/pages/inventory/RoomManagement";

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
      },
      {
        path: "assets/datapotensi/category/electrical/rectifier/list",
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
        path: ":floor",
        element: <SpacePlan />,
      },
    ],
  },
  {
    path: "/v1/",
  },
]);
