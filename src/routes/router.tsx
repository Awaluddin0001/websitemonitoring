import { createBrowserRouter } from "react-router-dom";
import Desktopdash from "@/components/navbar/Desktopdash";
import Home from "@/pages/monitoring/Home";
import Monitoring from "@/pages/monitoring/Monitoring";
import Power from "@/pages/monitoring/Power";
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
import RoomManagement from "@/pages/assets/space/RoomManagement";
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
import ListVendorSecurity from "@/pages/assets/dapot/vendor/security/ListVendorSecurity";
import NewVendorSecurity from "@/pages/assets/dapot/vendor/security/NewVendorSecurity";
import UpdateVendorSecurity from "@/pages/assets/dapot/vendor/security/UpdateVendorSecurity";
import ListBrandSecurity from "@/pages/assets/dapot/brand/security/ListBrandSecurity";
import NewBrandSecurity from "@/pages/assets/dapot/brand/security/NewBrandSecurity";
import UpdateBrandSecurity from "@/pages/assets/dapot/brand/security/UpdateBrandSecurity";
import ListTypeSecurity from "@/pages/assets/dapot/type/security/ListTypeSecurity";
import NewTypeSecurity from "@/pages/assets/dapot/type/security/NewTypeSecurity";
import UpdateTypeSecurity from "@/pages/assets/dapot/type/security/UpdateTypeSecurity";
import ListMaintenanceSecurity from "@/pages/assets/dapot/maintenance/security/ListMaintenanceSecurity";
import NewMaintenanceSecurity from "@/pages/assets/dapot/maintenance/security/NewMaintenanceSecurity";
import UpdateMaintenanceSecurity from "@/pages/assets/dapot/maintenance/security/UpdateMaintenanceSecurity";
import SecurityCctvDetail from "@/pages/assets/dapot/detail/security/SecurityCctvDetail";
import SecurityVideoRecording from "@/pages/assets/dapot/category/security/SecurityVideoRecording";
import SecurityVideoRecordingAdd from "@/pages/assets/dapot/category/security/SecurityVideoRecordingAdd";
import SecurityVideoRecordingUpdate from "@/pages/assets/dapot/category/security/SecurityVideoRecordingUpdate";
import SecurityVideoRecordingDetail from "@/pages/assets/dapot/detail/security/SecurityVideoRecordingDetail";
import SecurityAccessControlAdd from "@/pages/assets/dapot/category/security/SecurityAccessControlAdd";
import SecurityAccesscontrol from "@/pages/assets/dapot/category/security/SecurityAccessControl";
import SecurityAccessControlUpdate from "@/pages/assets/dapot/category/security/SecurityAccessControlUpdate";
import SecurityAccessControlDetail from "@/pages/assets/dapot/detail/security/SecurityAccessControlDetail";
import SecurityAlarm from "@/pages/assets/dapot/category/security/SecurityAlarm";
import SecurityAlarmAdd from "@/pages/assets/dapot/category/security/SecurityAlarmAdd";
import SecurityAlarmUpdate from "@/pages/assets/dapot/category/security/SecurityAlarmUpdate";
import SecurityAlarmDetail from "@/pages/assets/dapot/detail/security/SecurityAlarmDetail";
import SecurityButtonDetail from "@/pages/assets/dapot/detail/security/SecurityButtonDetail";
import SecurityButton from "@/pages/assets/dapot/category/security/SecurityButton";
import SecurityButtonAdd from "@/pages/assets/dapot/category/security/SecurityButtonAdd";
import SecurityButtonUpdate from "@/pages/assets/dapot/category/security/SecurityButtonUpdate";
import SecurityDetectorDetail from "@/pages/assets/dapot/detail/security/SecurityDetectorDetail";
import SecurityDetector from "@/pages/assets/dapot/category/security/SecurityDetector";
import SecurityDetectorAdd from "@/pages/assets/dapot/category/security/SecurityDetectorAdd";
import SecurityDetectorUpdate from "@/pages/assets/dapot/category/security/SecurityDetectorUpdate";
import SecuritySoundDetail from "@/pages/assets/dapot/detail/security/SecuritySoundDetail";
import SecuritySound from "@/pages/assets/dapot/category/security/SecuritySound";
import SecuritySoundAdd from "@/pages/assets/dapot/category/security/SecuritySoundAdd";
import SecuritySoundUpdate from "@/pages/assets/dapot/category/security/SecuritySoundUpdate";
import ListLinkSecurity from "@/pages/assets/dapot/link/security/ListLinkSecurity";
import NewLinkSecurity from "@/pages/assets/dapot/link/security/NewLinkSecurity";
import UpdateLinkSecurity from "@/pages/assets/dapot/link/security/UpdateLinkSecurity";
import AirAll from "@/pages/assets/dapot/category/air_conditioning/AirAll";
import AirconditioningAir from "@/pages/assets/dapot/category/air_conditioning/AirConditioningAir";
import AirConditioningAirAdd from "@/pages/assets/dapot/category/air_conditioning/AirConditioningAirAdd";
import AirConditionongAirUpdate from "@/pages/assets/dapot/category/air_conditioning/AirCondtioningAirUpdate";
import ListVendorAirConditioning from "@/pages/assets/dapot/vendor/air_conditioning/ListVendorAc";
import NewVendorAirConditioning from "@/pages/assets/dapot/vendor/air_conditioning/NewVendoAc";
import UpdateVendorAirConditioning from "@/pages/assets/dapot/vendor/air_conditioning/UpdateVendorAc";
import ListBrandAircondtioning from "@/pages/assets/dapot/brand/air_conditioning/ListBrandAc";
import NewBrandairconditioning from "@/pages/assets/dapot/brand/air_conditioning/NewBrandAc";
import UpdateBrandAirConditioning from "@/pages/assets/dapot/brand/air_conditioning/UpdateBrandAc";
import ListTypeAirconditioning from "@/pages/assets/dapot/type/air_conditioning/ListTypeAc";
import NewTypeAirconditioning from "@/pages/assets/dapot/type/air_conditioning/NewTypeAc";
import UpdateTypeAirConditioning from "@/pages/assets/dapot/type/air_conditioning/UpdateTypeAc";
import ListMaintenanceAir from "@/pages/assets/dapot/maintenance/air_conditioning/ListMaintenanceAc";
import UpdateMaintenanceAirconditioning from "@/pages/assets/dapot/maintenance/air_conditioning/UpdateMaintenanceAc";
import NewMaintenanceAirconditioning from "@/pages/assets/dapot/maintenance/air_conditioning/NewMaintenanceAc";
import AirConditioningAirDetail from "@/pages/assets/dapot/detail/air_conditioning/AcAirDetail";
import AirconditioningCooling from "@/pages/assets/dapot/category/air_conditioning/AirConditioningCooling";
import AirConditioningCoolingAdd from "@/pages/assets/dapot/category/air_conditioning/AirConditioningCoolingAdd";
import AirConditioningCoolingUpdate from "@/pages/assets/dapot/category/air_conditioning/AirConditioningCoolingUpdate";
import AirConditioningCoolingDetail from "@/pages/assets/dapot/detail/air_conditioning/AcCoolingDetail";
import AirConditioningHeatingDetail from "@/pages/assets/dapot/detail/air_conditioning/AcHeatingDetail";
import AirconditioningHeating from "@/pages/assets/dapot/category/air_conditioning/AirConditioningHeating";
import AirConditioningHeatingAdd from "@/pages/assets/dapot/category/air_conditioning/AirConditioningHeatingAdd";
import AirConditioningHeatingUpdate from "@/pages/assets/dapot/category/air_conditioning/AirConditioningHeatingUpdate";
import FinishingAll from "@/pages/assets/dapot/category/finishing_building/FinishingAll";
import FinishingCeramic from "@/pages/assets/dapot/category/finishing_building/FinishingCeramic";
import FinishingCeramicAdd from "@/pages/assets/dapot/category/finishing_building/FinishingCeramicAdd";
import FinishingCeramicUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingCeramicUpdate";
import ListVendorFinishing from "@/pages/assets/dapot/vendor/finishing_building/ListVendorFinishing";
import NewVendorFinishing from "@/pages/assets/dapot/vendor/finishing_building/NewVendorFinishing";
import UpdateVendorFinishing from "@/pages/assets/dapot/vendor/finishing_building/UpdateVendorFinishing";
import ListBrandFinishing from "@/pages/assets/dapot/brand/finishing_building/ListBrandFinishing";
import NewBrandFinishing from "@/pages/assets/dapot/brand/finishing_building/NewBrandFinishing";
import UpdateBrandFinishing from "@/pages/assets/dapot/brand/finishing_building/UpdateBrandFinishing";
import ListTypeFinishing from "@/pages/assets/dapot/type/finishing/ListTypeFinishing";
import NewTypeFinishing from "@/pages/assets/dapot/type/finishing/NewTypeFinishing";
import UpdateTypeFinishing from "@/pages/assets/dapot/type/finishing/UpdateTypeFinishing";
import ListMaintenanceFinishing from "@/pages/assets/dapot/maintenance/finishing_building/ListMaintenanceFinishing";
import NewMaintenanceFinishing from "@/pages/assets/dapot/maintenance/finishing_building/NewMaintenanceFinishing";
import UpdateMaintenanceFinishing from "@/pages/assets/dapot/maintenance/finishing_building/UpdateMaintenanceFinishing";
import FinishingCeramicDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingCeramicDetail";
import FinishingCeilingDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingCeilingDetail";
import FinishingCeiling from "@/pages/assets/dapot/category/finishing_building/FinishingCeiling";
import FinishingCeilingAdd from "@/pages/assets/dapot/category/finishing_building/FinishingCeilingAdd";
import FinishingCeilingUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingCeilingUpdate";
import FinishingDoor from "@/pages/assets/dapot/category/finishing_building/FinishingDoor";
import FinishingWindow from "@/pages/assets/dapot/category/finishing_building/FinishingWindow";
import FinishingMebel from "@/pages/assets/dapot/category/finishing_building/FinishingMebel";
import FinishingDoorAdd from "@/pages/assets/dapot/category/finishing_building/FinishingDoorAdd";
import FinishingWindowAdd from "@/pages/assets/dapot/category/finishing_building/FinishingWindowAdd";
import FinishingMebelAdd from "@/pages/assets/dapot/category/finishing_building/FinishingMebelAdd";
import FinishingDoorUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingDoorUpdate";
import FinishingWindowUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingWindowUpdate";
import FinishingMebelUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingMebelUpdate";
import FinishingDoorDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingDoorDetail";
import FinishingWindowDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingWindowDetail";
import FinishingMebelDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingMebelDetail";
import FinishingWallpaperDetail from "@/pages/assets/dapot/detail/finishing_building/FinishingWallpaperDetail";
import FinishingWallpaper from "@/pages/assets/dapot/category/finishing_building/FinishingWallpaper";
import FinishingWallpaperAdd from "@/pages/assets/dapot/category/finishing_building/FinishingWallpaperAdd";
import FinishingWallpaperUpdate from "@/pages/assets/dapot/category/finishing_building/FinishingWallpaperUpdate";
import ConveyanceAll from "@/pages/assets/dapot/category/conveyance/ConveyanceAll";
import ListVendorConveyance from "@/pages/assets/dapot/vendor/conveyance/ListVendorConveyance";
import NewVendorConveyance from "@/pages/assets/dapot/vendor/conveyance/NewVendorConveyance";
import UpdateVendorConveyance from "@/pages/assets/dapot/vendor/conveyance/UpdateVendorConveyance";
import ListBrandConveyance from "@/pages/assets/dapot/brand/conveyance/ListBrandConveyance";
import NewBrandConveyance from "@/pages/assets/dapot/brand/conveyance/NewBrandConveyance";
import UpdateBrandConveyance from "@/pages/assets/dapot/brand/conveyance/UpdateBrandConveyance";
import ListTypeConveyance from "@/pages/assets/dapot/type/conveyance/ListTypeConveyance";
import NewTypeConveyance from "@/pages/assets/dapot/type/conveyance/NewTypeConveyance";
import UpdateTypeConveyance from "@/pages/assets/dapot/type/conveyance/UpdateTypeConveyance";
import ListMaintenanceConveyance from "@/pages/assets/dapot/maintenance/conveyance/ListMaintenanceConveyance";
import NewMaintenanceConveyance from "@/pages/assets/dapot/maintenance/conveyance/NewMaintenanceConveyance";
import UpdateMaintenanceConveyance from "@/pages/assets/dapot/maintenance/conveyance/UpdateMaintenanceConveyance";
import ConveyanceConveyance from "@/pages/assets/dapot/category/conveyance/Conveyance";
import ConveyanceConveyanceAdd from "@/pages/assets/dapot/category/conveyance/ConveyanceAdd";
import ConveyanceConveyanceUpdate from "@/pages/assets/dapot/category/conveyance/ConveyanceUpdate";
import ConveyanceConveyanceDetail from "@/pages/assets/dapot/detail/conveyance/ConveyanceDetail";
import ExtinguishAll from "@/pages/assets/dapot/category/extinguish/ExtinguishAll";
import ListVendorExtinguish from "@/pages/assets/dapot/vendor/extinguish/ListVendorExtinguish";
import ListVendorFluid from "@/pages/assets/dapot/vendor/fluid/ListVendorFluid";
import ListVendorFurniture from "@/pages/assets/dapot/vendor/furniture/ListVendorFurniture";
import ListVendorLighting from "@/pages/assets/dapot/vendor/lighting/ListVendorLighting";
import ListVendorPump from "@/pages/assets/dapot/vendor/pump/ListVendorPump";
import NewVendorExtinguish from "@/pages/assets/dapot/vendor/extinguish/NewVendorExtinguish";
import NewVendorFluid from "@/pages/assets/dapot/vendor/fluid/NewVendorFluid";
import NewVendorFurniture from "@/pages/assets/dapot/vendor/furniture/NewVendorFurniture";
import NewVendorLighting from "@/pages/assets/dapot/vendor/lighting/NewVendorLighting";
import NewVendorPump from "@/pages/assets/dapot/vendor/pump/NewVendorPump";
import UpdateVendorExtinguish from "@/pages/assets/dapot/vendor/extinguish/UpdateVendorExtinguish";
import UpdateVendorFluid from "@/pages/assets/dapot/vendor/fluid/UpdateVendorFluid";
import UpdateVendorFurniture from "@/pages/assets/dapot/vendor/furniture/UpdateVendorFurniture";
import UpdateVendorLighting from "@/pages/assets/dapot/vendor/lighting/UpdateVendorLighting";
import UpdateVendorPump from "@/pages/assets/dapot/vendor/pump/UpdateVendorPump";
import ListTypeExtinguish from "@/pages/assets/dapot/type/extinguish/ListTypeExtinguish";
import ListTypeFluid from "@/pages/assets/dapot/type/fluid/ListTypeFluid";
import NewTypeExtinguish from "@/pages/assets/dapot/type/extinguish/NewTypeExtinguish";
import NewTypeFluid from "@/pages/assets/dapot/type/fluid/NewTypeFluid";
import UpdateTypeExtinguish from "@/pages/assets/dapot/type/extinguish/UpdateTypeExtinguish";
import UpdateTypeFluid from "@/pages/assets/dapot/type/fluid/UpdateTypeFluid";
import ListMaintenanceExtinguish from "@/pages/assets/dapot/maintenance/extinguish/ListMaintenanceExtinguish";
import ListMaintenanceFluid from "@/pages/assets/dapot/maintenance/fluid/ListMaintenanceFluid";
import ListMaintenanceLighting from "@/pages/assets/dapot/maintenance/lighting/ListMaintenanceLighting";
import ListMaintenancePump from "@/pages/assets/dapot/maintenance/pump/ListMaintenancePump";
import NewMaintenanceExtinguish from "@/pages/assets/dapot/maintenance/extinguish/NewMaintenanceExtinguish";
import NewMaintenanceFluid from "@/pages/assets/dapot/maintenance/fluid/NewMaintenanceFluid";
import NewMaintenanceLighting from "@/pages/assets/dapot/maintenance/lighting/NewMaintenanceLighting";
import NewMaintenancePump from "@/pages/assets/dapot/maintenance/pump/NewMaintenancePump";
import UpdateMaintenanceExtinguish from "@/pages/assets/dapot/maintenance/extinguish/UpdateMaintenanceExtinguish";
import UpdateMaintenanceFluid from "@/pages/assets/dapot/maintenance/fluid/UpdateMaintenanceFluid";
import UpdateMaintenanceLighting from "@/pages/assets/dapot/maintenance/lighting/UpdateMaintenanceLighting";
import UpdateMaintenancePump from "@/pages/assets/dapot/maintenance/pump/UpdateMaintenancePump";
import ListBrandExtinguish from "@/pages/assets/dapot/brand/extinguish/ListBrandExtinguish";
import ListBrandFluid from "@/pages/assets/dapot/brand/fluid/ListBrandFluid";
import ListBrandFurniture from "@/pages/assets/dapot/brand/furniture/ListBrandFurniture";
import ListBrandLighting from "@/pages/assets/dapot/brand/lighting/ListBrandLighting";
import ListBrandPump from "@/pages/assets/dapot/brand/pump/ListBrandPumo";
import ListBrandSafety from "@/pages/assets/dapot/brand/safety/ListBrandSafety";
import NewBrandExtinguish from "@/pages/assets/dapot/brand/extinguish/NewBrandExtinguish";
import NewBrandFluid from "@/pages/assets/dapot/brand/fluid/NewBrandFluid";
import NewBrandFurniture from "@/pages/assets/dapot/brand/furniture/NewBrandFurniture";
import NewBrandLighting from "@/pages/assets/dapot/brand/lighting/NewBrandLighting";
import NewBrandPump from "@/pages/assets/dapot/brand/pump/NewBrandPump";
import NewBrandSafety from "@/pages/assets/dapot/brand/safety/NewBrandSafety";
import UpdateBrandExtinguish from "@/pages/assets/dapot/brand/extinguish/UpdateBrandExtinguish";
import UpdateBrandFluid from "@/pages/assets/dapot/brand/fluid/UpdateBrandFluid";
import UpdateBrandFurniture from "@/pages/assets/dapot/brand/furniture/UpdateBrandFurniture";
import UpdateBrandLighting from "@/pages/assets/dapot/brand/lighting/UpdateBrandLighting";
import UpdateBrandPump from "@/pages/assets/dapot/brand/pump/UpdateBrandPump";
import UpdateBrandSafety from "@/pages/assets/dapot/brand/safety/UpdateBrandSafety";
import ExtinguishDevice from "@/pages/assets/dapot/category/extinguish/ExtinguishDevice";
import ExtinguishDeviceAdd from "@/pages/assets/dapot/category/extinguish/ExtinguishDeviceAdd";
import ExtinguishDeviceUpdate from "@/pages/assets/dapot/category/extinguish/ExtinguishDeviceUpdate";
import ExtinguishDetail from "@/pages/assets/dapot/detail/extinguish/ExtinguishDetail";
import FluidAll from "@/pages/assets/dapot/category/fluid/FluidAll";
import FluidDevice from "@/pages/assets/dapot/category/fluid/FluidDevice";
import FluidDeviceAdd from "@/pages/assets/dapot/category/fluid/FluidDeviceAdd";
import FluidDeviceUpdate from "@/pages/assets/dapot/category/fluid/FluidDeviceUpdate";
import FluidDetail from "@/pages/assets/dapot/detail/fluid/FluidDetail";
import LightingAll from "@/pages/assets/dapot/category/lighting/LightingAll";
import LightingDevice from "@/pages/assets/dapot/category/lighting/LightingDevice";
import LightingDeviceAdd from "@/pages/assets/dapot/category/lighting/LightingDeviceAdd";
import LightingDeviceUpdate from "@/pages/assets/dapot/category/lighting/LightingDeviceUpdate";
import LightingDetail from "@/pages/assets/dapot/detail/lighting/lightingDetail";
import PumpDetail from "@/pages/assets/dapot/detail/pump/PumpDetail";
import PumpDevice from "@/pages/assets/dapot/category/pump/PumpDevice";
import PumpDeviceAdd from "@/pages/assets/dapot/category/pump/PumpDeviceAdd";
import PumpDeviceUpdate from "@/pages/assets/dapot/category/pump/PumpDeviceUpdate";
import PumpAll from "@/pages/assets/dapot/category/pump/PumpAll";
import FurnitureDevice from "@/pages/assets/dapot/category/furniture/FurnitureDevice";
import FurnitureDeviceUpdate from "@/pages/assets/dapot/category/furniture/FurnitureDeviceUpdate";
import FurnitureDeviceAdd from "@/pages/assets/dapot/category/furniture/FurnitureDeviceAdd";
import FurnitureDetail from "@/pages/assets/dapot/detail/furniture/FurnitureDetail";
import SafetyDetail from "@/pages/assets/dapot/detail/safety/SafetyDetail";
import SafetyDevice from "@/pages/assets/dapot/category/safety/SafetyDevice";
import SafetyDeviceAdd from "@/pages/assets/dapot/category/safety/SafetyDeviceAdd";
import SafetyDeviceUpdate from "@/pages/assets/dapot/category/safety/SafetyDeviceUpdate";
import ListVendorSafety from "@/pages/assets/dapot/vendor/safety/ListVendorSafety";
import NewVendorSafety from "@/pages/assets/dapot/vendor/safety/NewVendorSafety";
import UpdateVendorSafety from "@/pages/assets/dapot/vendor/safety/UpdateVendorSafety";
import ThermalPage from "@/pages/monitoring/Thermal";
import SSAPLantai1 from "@/pages/monitoring/SSAPLantai1";
import SSAPLantai2 from "@/pages/monitoring/SSAPLantai2";
import SSAPLantai3 from "@/pages/monitoring/SSAPLantai3";
import SSAPLantai4 from "@/pages/monitoring/SSAPLantai4";
import SSAPLantai5 from "@/pages/monitoring/SSAPLantai5";
// import Pac from "@/pages/monitoring/Pac";
import NewLicense from "@/pages/licenses/NewLicense";
import ListLicense from "@/pages/licenses/ListLicense";
import UpdateLicense from "@/pages/licenses/UpdateLicense";
import Setting from "@/pages/Setting";
import ChangePassword from "@/pages/setting/ChangePassword";
import ListUser from "@/pages/admin/ListUser";

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
        path: "admin",
        element: <ListUser />,
      },
      // {
      //   path: "pac",
      //   element: <Pac />,
      // },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "setting/password",
        element: <ChangePassword />,
      },
      {
        path: "license",
        element: <ListLicense />,
      },
      {
        path: "license/add",
        element: <NewLicense />,
      },
      {
        path: "license/update",
        element: <UpdateLicense />,
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
        element: <ThermalPage />,
      },
      {
        path: "monitoring/fire",
        element: <Fire />,
      },
      {
        path: "monitoring/manual/add/ssap1",
        element: <SSAPLantai1 />,
      },
      {
        path: "monitoring/manual/add/ssap2",
        element: <SSAPLantai2 />,
      },
      {
        path: "monitoring/manual/add/ssap3",
        element: <SSAPLantai3 />,
      },
      {
        path: "monitoring/manual/add/ssap4",
        element: <SSAPLantai4 />,
      },
      {
        path: "monitoring/manual/add/ssap5",
        element: <SSAPLantai5 />,
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

      // Brand list
      {
        path: "assets/datapotensi/brand/list/electrical",
        element: <ListBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/list/network",
        element: <ListBrandNetwork />,
      },
      {
        path: "assets/datapotensi/brand/list/security",
        element: <ListBrandSecurity />,
      },
      {
        path: "assets/datapotensi/brand/list/airconditioning",
        element: <ListBrandAircondtioning />,
      },
      {
        path: "assets/datapotensi/brand/list/buildingfinishing",
        element: <ListBrandFinishing />,
      },
      {
        path: "assets/datapotensi/brand/list/conveyance",
        element: <ListBrandConveyance />,
      },
      {
        path: "assets/datapotensi/brand/list/extinguish",
        element: <ListBrandExtinguish />,
      },
      {
        path: "assets/datapotensi/brand/list/fluid",
        element: <ListBrandFluid />,
      },
      {
        path: "assets/datapotensi/brand/list/furniture",
        element: <ListBrandFurniture />,
      },
      {
        path: "assets/datapotensi/brand/list/lighting",
        element: <ListBrandLighting />,
      },
      {
        path: "assets/datapotensi/brand/list/pump",
        element: <ListBrandPump />,
      },
      {
        path: "assets/datapotensi/brand/list/safety",
        element: <ListBrandSafety />,
      },

      // Brand Add
      {
        path: "assets/datapotensi/brand/add/network",
        element: <NewBrandNetwork />,
      },
      {
        path: "assets/datapotensi/brand/add/electrical",
        element: <NewBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/add/security",
        element: <NewBrandSecurity />,
      },
      {
        path: "assets/datapotensi/brand/add/airconditioning",
        element: <NewBrandairconditioning />,
      },
      {
        path: "assets/datapotensi/brand/add/buildingfinishing",
        element: <NewBrandFinishing />,
      },
      {
        path: "assets/datapotensi/brand/add/conveyance",
        element: <NewBrandConveyance />,
      },
      {
        path: "assets/datapotensi/brand/add/extinguish",
        element: <NewBrandExtinguish />,
      },
      {
        path: "assets/datapotensi/brand/add/fluid",
        element: <NewBrandFluid />,
      },
      {
        path: "assets/datapotensi/brand/add/furniture",
        element: <NewBrandFurniture />,
      },
      {
        path: "assets/datapotensi/brand/add/lighting",
        element: <NewBrandLighting />,
      },
      {
        path: "assets/datapotensi/brand/add/pump",
        element: <NewBrandPump />,
      },
      {
        path: "assets/datapotensi/brand/add/safety",
        element: <NewBrandSafety />,
      },

      // Brand Update
      {
        path: "assets/datapotensi/brand/update/electrical",
        element: <UpdateBrandElectrical />,
      },
      {
        path: "assets/datapotensi/brand/update/network",
        element: <UpdateBrandNetwork />,
      },
      {
        path: "assets/datapotensi/brand/update/security",
        element: <UpdateBrandSecurity />,
      },
      {
        path: "assets/datapotensi/brand/update/airconditioning",
        element: <UpdateBrandAirConditioning />,
      },
      {
        path: "assets/datapotensi/brand/update/buildingfinishing",
        element: <UpdateBrandFinishing />,
      },
      {
        path: "assets/datapotensi/brand/update/conveyance",
        element: <UpdateBrandConveyance />,
      },
      {
        path: "assets/datapotensi/brand/update/extinguish",
        element: <UpdateBrandExtinguish />,
      },
      {
        path: "assets/datapotensi/brand/update/fluid",
        element: <UpdateBrandFluid />,
      },
      {
        path: "assets/datapotensi/brand/update/furniture",
        element: <UpdateBrandFurniture />,
      },
      {
        path: "assets/datapotensi/brand/update/lighting",
        element: <UpdateBrandLighting />,
      },
      {
        path: "assets/datapotensi/brand/update/pump",
        element: <UpdateBrandPump />,
      },
      {
        path: "assets/datapotensi/brand/update/safety",
        element: <UpdateBrandSafety />,
      },

      // category list
      {
        path: "assets/datapotensi/category/",
        element: <AssetListCategory />,
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
      {
        path: "assets/datapotensi/category/list/security/video_recording",
        element: <SecurityVideoRecording />,
      },
      {
        path: "assets/datapotensi/category/list/security/access_control",
        element: <SecurityAccesscontrol />,
      },
      {
        path: "assets/datapotensi/category/list/security/alarm",
        element: <SecurityAlarm />,
      },
      {
        path: "assets/datapotensi/category/list/security/button",
        element: <SecurityButton />,
      },
      {
        path: "assets/datapotensi/category/list/security/detector",
        element: <SecurityDetector />,
      },
      {
        path: "assets/datapotensi/category/list/security/sound",
        element: <SecuritySound />,
      },
      {
        path: "assets/datapotensi/category/list/airconditioning/all",
        element: <AirAll />,
      },
      {
        path: "assets/datapotensi/category/list/airconditioning/air",
        element: <AirconditioningAir />,
      },
      {
        path: "assets/datapotensi/category/list/airconditioning/cooling",
        element: <AirconditioningCooling />,
      },
      {
        path: "assets/datapotensi/category/list/airconditioning/heating",
        element: <AirconditioningHeating />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/all",
        element: <FinishingAll />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/ceramic",
        element: <FinishingCeramic />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/ceiling",
        element: <FinishingCeiling />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/door",
        element: <FinishingDoor />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/window",
        element: <FinishingWindow />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/mebel",
        element: <FinishingMebel />,
      },
      {
        path: "assets/datapotensi/category/list/buildingfinishing/wallpaper",
        element: <FinishingWallpaper />,
      },
      {
        path: "assets/datapotensi/category/list/conveyance/all",
        element: <ConveyanceAll />,
      },
      {
        path: "assets/datapotensi/category/list/conveyance/conveyance",
        element: <ConveyanceConveyance />,
      },
      {
        path: "assets/datapotensi/category/list/extinguish/all",
        element: <ExtinguishAll />,
      },
      {
        path: "assets/datapotensi/category/list/extinguish/extinguish",
        element: <ExtinguishDevice />,
      },
      {
        path: "assets/datapotensi/category/list/fluid/all",
        element: <FluidAll />,
      },
      {
        path: "assets/datapotensi/category/list/fluid/fluid",
        element: <FluidDevice />,
      },
      {
        path: "assets/datapotensi/category/list/lighting/all",
        element: <LightingAll />,
      },
      {
        path: "assets/datapotensi/category/list/lighting/lighting",
        element: <LightingDevice />,
      },
      {
        path: "assets/datapotensi/category/list/pump/pump",
        element: <PumpDevice />,
      },
      {
        path: "assets/datapotensi/category/list/pump/all",
        element: <PumpAll />,
      },
      {
        path: "assets/datapotensi/category/list/furniture/furniture",
        element: <FurnitureDevice />,
      },
      {
        path: "assets/datapotensi/category/list/safety/safety",
        element: <SafetyDevice />,
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
      {
        path: "assets/datapotensi/category/add/security/video_recording",
        element: <SecurityVideoRecordingAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/access_control",
        element: <SecurityAccessControlAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/alarm",
        element: <SecurityAlarmAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/button",
        element: <SecurityButtonAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/detector",
        element: <SecurityDetectorAdd />,
      },
      {
        path: "assets/datapotensi/category/add/security/sound",
        element: <SecuritySoundAdd />,
      },
      {
        path: "assets/datapotensi/category/add/airconditioning/air",
        element: <AirConditioningAirAdd />,
      },
      {
        path: "assets/datapotensi/category/add/airconditioning/cooling",
        element: <AirConditioningCoolingAdd />,
      },
      {
        path: "assets/datapotensi/category/add/airconditioning/heating",
        element: <AirConditioningHeatingAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/ceramic",
        element: <FinishingCeramicAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/ceiling",
        element: <FinishingCeilingAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/door",
        element: <FinishingDoorAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/window",
        element: <FinishingWindowAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/mebel",
        element: <FinishingMebelAdd />,
      },
      {
        path: "assets/datapotensi/category/add/buildingfinishing/wallpaper",
        element: <FinishingWallpaperAdd />,
      },
      {
        path: "assets/datapotensi/category/add/conveyance/conveyance",
        element: <ConveyanceConveyanceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/extinguish/extinguish",
        element: <ExtinguishDeviceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/fluid/fluid",
        element: <FluidDeviceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/lighting/lighting",
        element: <LightingDeviceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/pump/pump",
        element: <PumpDeviceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/furniture/furniture",
        element: <FurnitureDeviceAdd />,
      },
      {
        path: "assets/datapotensi/category/add/safety/safety",
        element: <SafetyDeviceAdd />,
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
      {
        path: "assets/datapotensi/category/update/security/video_recording",
        element: <SecurityVideoRecordingUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/access_control",
        element: <SecurityAccessControlUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/alarm",
        element: <SecurityAlarmUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/button",
        element: <SecurityButtonUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/detector",
        element: <SecurityDetectorUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/security/sound",
        element: <SecuritySoundUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/airconditioning/air",
        element: <AirConditionongAirUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/airconditioning/cooling",
        element: <AirConditioningCoolingUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/airconditioning/heating",
        element: <AirConditioningHeatingUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/ceramic",
        element: <FinishingCeramicUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/ceiling",
        element: <FinishingCeilingUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/door",
        element: <FinishingDoorUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/window",
        element: <FinishingWindowUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/mebel",
        element: <FinishingMebelUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/buildingfinishing/wallpaper",
        element: <FinishingWallpaperUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/conveyance/conveyance",
        element: <ConveyanceConveyanceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/extinguish/extinguish",
        element: <ExtinguishDeviceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/fluid/fluid",
        element: <FluidDeviceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/lighting/lighting",
        element: <LightingDeviceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/pump/pump",
        element: <PumpDeviceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/furniture/furniture",
        element: <FurnitureDeviceUpdate />,
      },
      {
        path: "assets/datapotensi/category/update/safety/safety",
        element: <SafetyDeviceUpdate />,
      },

      // vendor list
      {
        path: "assets/datapotensi/vendor/list/electrical",
        element: <ListVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/list/network",
        element: <ListVendorNetwork />,
      },
      {
        path: "assets/datapotensi/vendor/list/security",
        element: <ListVendorSecurity />,
      },
      {
        path: "assets/datapotensi/vendor/list/airconditioning",
        element: <ListVendorAirConditioning />,
      },
      {
        path: "assets/datapotensi/vendor/list/buildingfinishing",
        element: <ListVendorFinishing />,
      },
      {
        path: "assets/datapotensi/vendor/list/conveyance",
        element: <ListVendorConveyance />,
      },
      {
        path: "assets/datapotensi/vendor/list/extinguish",
        element: <ListVendorExtinguish />,
      },
      {
        path: "assets/datapotensi/vendor/list/fluid",
        element: <ListVendorFluid />,
      },
      {
        path: "assets/datapotensi/vendor/list/furniture",
        element: <ListVendorFurniture />,
      },
      {
        path: "assets/datapotensi/vendor/list/lighting",
        element: <ListVendorLighting />,
      },
      {
        path: "assets/datapotensi/vendor/list/pump",
        element: <ListVendorPump />,
      },
      {
        path: "assets/datapotensi/vendor/list/safety",
        element: <ListVendorSafety />,
      },

      // vendor add
      {
        path: "assets/datapotensi/vendor/add/electrical",
        element: <NewVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/add/network",
        element: <NewVendorNetwork />,
      },
      {
        path: "assets/datapotensi/vendor/add/security",
        element: <NewVendorSecurity />,
      },
      {
        path: "assets/datapotensi/vendor/add/airconditioning",
        element: <NewVendorAirConditioning />,
      },
      {
        path: "assets/datapotensi/vendor/add/buildingfinishing",
        element: <NewVendorFinishing />,
      },
      {
        path: "assets/datapotensi/vendor/add/conveyance",
        element: <NewVendorConveyance />,
      },
      {
        path: "assets/datapotensi/vendor/add/extinguish",
        element: <NewVendorExtinguish />,
      },
      {
        path: "assets/datapotensi/vendor/add/fluid",
        element: <NewVendorFluid />,
      },
      {
        path: "assets/datapotensi/vendor/add/furniture",
        element: <NewVendorFurniture />,
      },
      {
        path: "assets/datapotensi/vendor/add/lighting",
        element: <NewVendorLighting />,
      },
      {
        path: "assets/datapotensi/vendor/add/pump",
        element: <NewVendorPump />,
      },
      {
        path: "assets/datapotensi/vendor/add/safety",
        element: <NewVendorSafety />,
      },

      // vendor update
      {
        path: "assets/datapotensi/vendor/update/electrical",
        element: <UpdateVendorElectrical />,
      },
      {
        path: "assets/datapotensi/vendor/update/network",
        element: <UpdateVendorNetwork />,
      },
      {
        path: "assets/datapotensi/vendor/update/security",
        element: <UpdateVendorSecurity />,
      },
      {
        path: "assets/datapotensi/vendor/update/airconditioning",
        element: <UpdateVendorAirConditioning />,
      },
      {
        path: "assets/datapotensi/vendor/update/buildingfinishing",
        element: <UpdateVendorFinishing />,
      },
      {
        path: "assets/datapotensi/vendor/update/conveyance",
        element: <UpdateVendorConveyance />,
      },
      {
        path: "assets/datapotensi/vendor/update/extinguish",
        element: <UpdateVendorExtinguish />,
      },
      {
        path: "assets/datapotensi/vendor/update/fluid",
        element: <UpdateVendorFluid />,
      },
      {
        path: "assets/datapotensi/vendor/update/furniture",
        element: <UpdateVendorFurniture />,
      },
      {
        path: "assets/datapotensi/vendor/update/lighting",
        element: <UpdateVendorLighting />,
      },
      {
        path: "assets/datapotensi/vendor/update/pump",
        element: <UpdateVendorPump />,
      },
      {
        path: "assets/datapotensi/vendor/update/safety",
        element: <UpdateVendorSafety />,
      },

      // type list
      {
        path: "assets/datapotensi/type/list/electrical",
        element: <ListTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/list/network",
        element: <ListTypeNetwork />,
      },
      {
        path: "assets/datapotensi/type/list/security",
        element: <ListTypeSecurity />,
      },
      {
        path: "assets/datapotensi/type/list/airconditioning",
        element: <ListTypeAirconditioning />,
      },
      {
        path: "assets/datapotensi/type/list/buildingfinishing",
        element: <ListTypeFinishing />,
      },
      {
        path: "assets/datapotensi/type/list/conveyance",
        element: <ListTypeConveyance />,
      },
      {
        path: "assets/datapotensi/type/list/extinguish",
        element: <ListTypeExtinguish />,
      },
      {
        path: "assets/datapotensi/type/list/fluid",
        element: <ListTypeFluid />,
      },
      // type add
      {
        path: "assets/datapotensi/type/add/electrical",
        element: <NewTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/add/network",
        element: <NewTypeNetwork />,
      },
      {
        path: "assets/datapotensi/type/add/security",
        element: <NewTypeSecurity />,
      },
      {
        path: "assets/datapotensi/type/add/airconditioning",
        element: <NewTypeAirconditioning />,
      },
      {
        path: "assets/datapotensi/type/add/buildingfinishing",
        element: <NewTypeFinishing />,
      },
      {
        path: "assets/datapotensi/type/add/conveyance",
        element: <NewTypeConveyance />,
      },
      {
        path: "assets/datapotensi/type/add/extinguish",
        element: <NewTypeExtinguish />,
      },
      {
        path: "assets/datapotensi/type/add/fluid",
        element: <NewTypeFluid />,
      },

      // type update
      {
        path: "assets/datapotensi/type/update/electrical",
        element: <UpdateTypeElectrical />,
      },
      {
        path: "assets/datapotensi/type/update/network",
        element: <UpdateTypeNetwork />,
      },
      {
        path: "assets/datapotensi/type/update/security",
        element: <UpdateTypeSecurity />,
      },
      {
        path: "assets/datapotensi/type/update/airconditioning",
        element: <UpdateTypeAirConditioning />,
      },
      {
        path: "assets/datapotensi/type/update/buildingfinishing",
        element: <UpdateTypeFinishing />,
      },
      {
        path: "assets/datapotensi/type/update/conveyance",
        element: <UpdateTypeConveyance />,
      },
      {
        path: "assets/datapotensi/type/update/extinguish",
        element: <UpdateTypeExtinguish />,
      },
      {
        path: "assets/datapotensi/type/update/fluid",
        element: <UpdateTypeFluid />,
      },

      // Maintenance list
      {
        path: "assets/datapotensi/maintenance/list/electrical",
        element: <ListMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/list/network",
        element: <ListMaintenanceNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/list/security",
        element: <ListMaintenanceSecurity />,
      },
      {
        path: "assets/datapotensi/maintenance/list/airconditioning",
        element: <ListMaintenanceAir />,
      },
      {
        path: "assets/datapotensi/maintenance/list/buildingfinishing",
        element: <ListMaintenanceFinishing />,
      },
      {
        path: "assets/datapotensi/maintenance/list/conveyance",
        element: <ListMaintenanceConveyance />,
      },
      {
        path: "assets/datapotensi/maintenance/list/extinguish",
        element: <ListMaintenanceExtinguish />,
      },
      {
        path: "assets/datapotensi/maintenance/list/fluid",
        element: <ListMaintenanceFluid />,
      },
      {
        path: "assets/datapotensi/maintenance/list/lighting",
        element: <ListMaintenanceLighting />,
      },
      {
        path: "assets/datapotensi/maintenance/list/pump",
        element: <ListMaintenancePump />,
      },

      // Maintenance add
      {
        path: "assets/datapotensi/maintenance/add/electrical",
        element: <NewMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/add/network",
        element: <NewMaintenanceNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/add/security",
        element: <NewMaintenanceSecurity />,
      },
      {
        path: "assets/datapotensi/maintenance/add/airconditioning",
        element: <NewMaintenanceAirconditioning />,
      },
      {
        path: "assets/datapotensi/maintenance/add/buildingfinishing",
        element: <NewMaintenanceFinishing />,
      },
      {
        path: "assets/datapotensi/maintenance/add/conveyance",
        element: <NewMaintenanceConveyance />,
      },
      {
        path: "assets/datapotensi/maintenance/add/extinguish",
        element: <NewMaintenanceExtinguish />,
      },
      {
        path: "assets/datapotensi/maintenance/add/fluid",
        element: <NewMaintenanceFluid />,
      },
      {
        path: "assets/datapotensi/maintenance/add/lighting",
        element: <NewMaintenanceLighting />,
      },
      {
        path: "assets/datapotensi/maintenance/add/pump",
        element: <NewMaintenancePump />,
      },

      // maintenance update
      {
        path: "assets/datapotensi/maintenance/update/network",
        element: <UpdateMaintenanceNetwork />,
      },
      {
        path: "assets/datapotensi/maintenance/update/electrical",
        element: <UpdateMaintenanceElectrical />,
      },
      {
        path: "assets/datapotensi/maintenance/update/security",
        element: <UpdateMaintenanceSecurity />,
      },
      {
        path: "assets/datapotensi/maintenance/update/airconditioning",
        element: <UpdateMaintenanceAirconditioning />,
      },
      {
        path: "assets/datapotensi/maintenance/update/buildingfinishing",
        element: <UpdateMaintenanceFinishing />,
      },
      {
        path: "assets/datapotensi/maintenance/update/conveyance",
        element: <UpdateMaintenanceConveyance />,
      },
      {
        path: "assets/datapotensi/maintenance/update/extinguish",
        element: <UpdateMaintenanceExtinguish />,
      },
      {
        path: "assets/datapotensi/maintenance/update/fluid",
        element: <UpdateMaintenanceFluid />,
      },
      {
        path: "assets/datapotensi/maintenance/update/lighting",
        element: <UpdateMaintenanceLighting />,
      },
      {
        path: "assets/datapotensi/maintenance/update/pump",
        element: <UpdateMaintenancePump />,
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
      {
        path: "assets/datapotensi/detail/security/cctv",
        element: <SecurityCctvDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/video_recording",
        element: <SecurityVideoRecordingDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/access_control",
        element: <SecurityAccessControlDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/alarm",
        element: <SecurityAlarmDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/button",
        element: <SecurityButtonDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/detector",
        element: <SecurityDetectorDetail />,
      },
      {
        path: "assets/datapotensi/detail/security/sound",
        element: <SecuritySoundDetail />,
      },
      {
        path: "assets/datapotensi/detail/airconditioning/air",
        element: <AirConditioningAirDetail />,
      },
      {
        path: "assets/datapotensi/detail/airconditioning/cooling",
        element: <AirConditioningCoolingDetail />,
      },
      {
        path: "assets/datapotensi/detail/airconditioning/heating",
        element: <AirConditioningHeatingDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/ceramic",
        element: <FinishingCeramicDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/ceiling",
        element: <FinishingCeilingDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/door",
        element: <FinishingDoorDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/window",
        element: <FinishingWindowDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/mebel",
        element: <FinishingMebelDetail />,
      },
      {
        path: "assets/datapotensi/detail/buildingfinishing/wallpaper",
        element: <FinishingWallpaperDetail />,
      },
      {
        path: "assets/datapotensi/detail/conveyance/conveyance",
        element: <ConveyanceConveyanceDetail />,
      },
      {
        path: "assets/datapotensi/detail/extinguish/extinguish",
        element: <ExtinguishDetail />,
      },
      {
        path: "assets/datapotensi/detail/fluid/fluid",
        element: <FluidDetail />,
      },
      {
        path: "assets/datapotensi/detail/lighting/lighting",
        element: <LightingDetail />,
      },
      {
        path: "assets/datapotensi/detail/pump/pump",
        element: <PumpDetail />,
      },
      {
        path: "assets/datapotensi/detail/furniture/furniture",
        element: <FurnitureDetail />,
      },
      {
        path: "assets/datapotensi/detail/safety/safety",
        element: <SafetyDetail />,
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
      {
        path: "assets/datapotensi/link/list/security",
        element: <ListLinkSecurity />,
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
      {
        path: "assets/datapotensi/link/add/security",
        element: <NewLinkSecurity />,
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
        path: "assets/datapotensi/link/update/security",
        element: <UpdateLinkSecurity />,
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
