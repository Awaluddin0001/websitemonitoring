import { ActionType } from "@/types/basicTypes";
import {
  NetworkAllListState,
  NetworkBrandListState,
  NetworkComputerListState,
  NetWorkComputerState,
  NetworkLinkListState,
  NetworkMaintenanceListState,
  NetworkOtherScListState,
  NetWorkOtherScState,
  NetworkRackServerListState,
  NetWorkRackServerState,
  NetworkStorageListState,
  NetWorkStorageState,
  NetworkTypeListState,
  NetworkVendorListState,
  PostNetworkBand,
  PostNetworkLink,
  PostNetworkMaintenance,
  PostNetworkType,
  PostNetworkVendor,
} from "@/types/networkTypes";

export const initialStateNetworkAllList: NetworkAllListState = {
  networks: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export const updateNetworkAllReducer = (
  state: NetworkAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_NETWORKS":
      return { ...state, networks: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

// computer

export const initialStateComputer: NetWorkComputerState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  display: "",
  keyboard: "",
  mouse: "",
  motherboard: "",
  _case: "",
  casing: "",
  processor: "",
  vga: "",
  hardisk: "",
  ram: "",
  cooling: "",
  power_supply: "",
  installation_date: `${new Date()}`,
  condition_asset: "",
  status: "",
  notes: "",
  // List
  listVendor: [],
  listSite: [{ value: "UPD057", label: "TTC PENGAYOMAN" }],
  listFloors: [],
  listRooms: [],
  listAllRooms: [],
  listMaintenance: [],
  listLink: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  link_in: "",
  link_out: [""],
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateComputerReducer(
  state: NetWorkComputerState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_NE_ID":
      return { ...state, ne_id: action.payload };
    case "SET_SITE_ID":
      return { ...state, site_id: action.payload };
    case "SET_FLOOR_ID":
      return { ...state, floor_id: action.payload };
    case "SET_ROOM_ID":
      return { ...state, room_id: action.payload };
    case "SET_BRAND_ID":
      return { ...state, brand_id: action.payload };
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_DISPLAY":
      return { ...state, display: action.payload };
    case "SET_KEYBOARD":
      return { ...state, keyboard: action.payload };
    case "SET_MOUSE":
      return { ...state, mouse: action.payload };
    case "SET_MOTHERBOARD":
      return { ...state, motherboard: action.payload };
    case "SET_CASE":
      return { ...state, _case: action.payload };
    case "SET_PROCESSOR":
      return { ...state, processor: action.payload };
    case "SET_VGA":
      return { ...state, vga: action.payload };
    case "SET_HARDISK":
      return { ...state, hardisk: action.payload };
    case "SET_RAM":
      return { ...state, ram: action.payload };
    case "SET_COOLING":
      return { ...state, cooling: action.payload };
    case "SET_POWER_SUPPLY":
      return { ...state, power_supply: action.payload };
    case "SET_INSTALLATION_DATE":
      return { ...state, installation_date: action.payload };
    case "LIST_VENDOR":
      return { ...state, listVendor: action.payload };
    case "LIST_BRAND":
      return { ...state, listBrand: action.payload };
    case "LIST_SITE":
      return { ...state, listSite: action.payload };
    case "LIST_FLOORS":
      return { ...state, listFloors: action.payload };
    case "FETCH_ROOMS":
      return {
        ...state,
        listRooms: action.payload.listRooms,
        listAllRooms: action.payload.listAllRooms,
      };
    case "LIST_ROOMS":
      return { ...state, listRooms: action.payload };
    case "LIST_TYPES":
      return { ...state, listType: action.payload };
    case "LIST_ALL_ROOMS":
      return { ...state, listAllRooms: action.payload };
    case "FLOOR_CHANGE":
      return {
        ...state,
        floor_id: action.payload.floor_id,
        room_id: action.payload.room_id,
        listRooms: action.payload.listRooms,
      };
    case "LIST_MAINTENANCE":
      return { ...state, listMaintenance: action.payload };
    case "LIST_LINK":
      return { ...state, listLink: action.payload };
    case "GET_COMPUTER":
      return { ...state, ...action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };

    case "SET_SELECTED_ERROR_FILES":
      return {
        ...state,
        errorMessagesFiles: {
          ...state.errorMessagesFiles,
          [action.payload.key]: action.payload.error,
        },
      };
    case "SET_SELECTED_FILES":
      return {
        ...state,
        selectedFiles: {
          ...state.selectedFiles,
          [action.payload.key]: action.payload.file,
        },
      };
    case "SET_CONDITION":
      return {
        ...state,
        condition_asset: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateListComputer: NetworkComputerListState = {
  computers: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listComputerReducer(
  state: NetworkComputerListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_COMPUTERS":
      return { ...state, computers: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    case "SET_POSITION_COLUMN":
      return { ...state, positionColumn: action.payload };
    case "SET_EXPORT_TOGGLE":
      return { ...state, exportToggle: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// Rack Server

export const initialStateRackServer: NetWorkRackServerState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  manufactur: "",
  capacity: "",
  port: "",
  case_pc: "",
  rack_sn: "",
  kvm_id: "",
  power: "",
  installation_date: `${new Date()}`,
  condition_asset: "",
  status: "",
  notes: "",

  // List
  listVendor: [],
  listBrand: [],
  listSite: [{ value: "UPD057", label: "TTC PENGAYOMAN" }],
  listFloors: [],
  listRooms: [],
  listAllRooms: [],
  listMaintenance: [],
  listLink: [],
  listType: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  link_in: "",
  link_out: [""],
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateRackServerReducer(
  state: NetWorkRackServerState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_NE_ID":
      return { ...state, ne_id: action.payload };
    case "SET_SITE_ID":
      return { ...state, site_id: action.payload };
    case "SET_FLOOR_ID":
      return { ...state, floor_id: action.payload };
    case "SET_ROOM_ID":
      return { ...state, room_id: action.payload };
    case "SET_BRAND_ID":
      return { ...state, brand_id: action.payload };
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_PORT":
      return { ...state, port: action.payload };
    case "SET_CASE_PC":
      return { ...state, case_pc: action.payload };
    case "SET_RACK_SN":
      return { ...state, rack_sn: action.payload };
    case "SET_KVM_ID":
      return { ...state, kvm_id: action.payload };
    case "SET_POWER":
      return { ...state, power: action.payload };
    case "SET_INSTALLATION_DATE":
      return { ...state, installation_date: action.payload };
    case "LIST_VENDOR":
      return { ...state, listVendor: action.payload };
    case "LIST_BRAND":
      return { ...state, listBrand: action.payload };
    case "LIST_SITE":
      return { ...state, listSite: action.payload };
    case "LIST_FLOORS":
      return { ...state, listFloors: action.payload };
    case "FETCH_ROOMS":
      return {
        ...state,
        listRooms: action.payload.listRooms,
        listAllRooms: action.payload.listAllRooms,
      };
    case "LIST_ROOMS":
      return { ...state, listRooms: action.payload };
    case "LIST_TYPES":
      return { ...state, listType: action.payload };
    case "LIST_ALL_ROOMS":
      return { ...state, listAllRooms: action.payload };
    case "FLOOR_CHANGE":
      return {
        ...state,
        floor_id: action.payload.floor_id,
        room_id: action.payload.room_id,
        listRooms: action.payload.listRooms,
      };
    case "LIST_MAINTENANCE":
      return { ...state, listMaintenance: action.payload };
    case "LIST_LINK":
      return { ...state, listLink: action.payload };
    case "GET_RACKSERVER":
      return { ...state, ...action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };

    case "SET_SELECTED_ERROR_FILES":
      return {
        ...state,
        errorMessagesFiles: {
          ...state.errorMessagesFiles,
          [action.payload.key]: action.payload.error,
        },
      };
    case "SET_SELECTED_FILES":
      return {
        ...state,
        selectedFiles: {
          ...state.selectedFiles,
          [action.payload.key]: action.payload.file,
        },
      };
    case "SET_CONDITION":
      return {
        ...state,
        condition_asset: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateListRackServer: NetworkRackServerListState = {
  rackservers: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listRackServerReducer(
  state: NetworkRackServerListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_RACKSERVERS":
      return { ...state, rackservers: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    case "SET_POSITION_COLUMN":
      return { ...state, positionColumn: action.payload };
    case "SET_EXPORT_TOGGLE":
      return { ...state, exportToggle: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// Storage

export const initialStateStorage: NetWorkStorageState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  rack_server_id: { value: "", label: "" },
  name: "",
  manufactur: "",
  capacity: "",
  port: "",
  power: "",
  position_unit: "",
  installation_date: `${new Date()}`,
  condition_asset: "",
  status: "",
  notes: "",

  // List
  listVendor: [],
  listBrand: [],
  listSite: [{ value: "UPD057", label: "TTC PENGAYOMAN" }],
  listFloors: [],
  listRooms: [],
  listAllRooms: [],
  listMaintenance: [],
  listLink: [],
  listType: [],
  listRackServer: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  link_in: "",
  link_out: [""],
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateStorageReducer(
  state: NetWorkStorageState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_NE_ID":
      return { ...state, ne_id: action.payload };
    case "SET_SITE_ID":
      return { ...state, site_id: action.payload };
    case "SET_FLOOR_ID":
      return { ...state, floor_id: action.payload };
    case "SET_ROOM_ID":
      return { ...state, room_id: action.payload };
    case "SET_BRAND_ID":
      return { ...state, brand_id: action.payload };
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_RACK_SERVER_ID":
      return { ...state, rack_server_id: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_PORT":
      return { ...state, port: action.payload };
    case "SET_POSITION_UNIT":
      return { ...state, position_unit: action.payload };
    case "SET_POWER":
      return { ...state, power: action.payload };
    case "SET_INSTALLATION_DATE":
      return { ...state, installation_date: action.payload };
    case "LIST_VENDOR":
      return { ...state, listVendor: action.payload };
    case "LIST_BRAND":
      return { ...state, listBrand: action.payload };
    case "LIST_SITE":
      return { ...state, listSite: action.payload };
    case "LIST_FLOORS":
      return { ...state, listFloors: action.payload };
    case "FETCH_ROOMS":
      return {
        ...state,
        listRooms: action.payload.listRooms,
        listAllRooms: action.payload.listAllRooms,
      };
    case "LIST_ROOMS":
      return { ...state, listRooms: action.payload };
    case "LIST_TYPES":
      return { ...state, listType: action.payload };
    case "LIST_RACK_SERVER":
      return { ...state, listRackServer: action.payload };
    case "LIST_ALL_ROOMS":
      return { ...state, listAllRooms: action.payload };
    case "FLOOR_CHANGE":
      return {
        ...state,
        floor_id: action.payload.floor_id,
        room_id: action.payload.room_id,
        listRooms: action.payload.listRooms,
      };
    case "LIST_MAINTENANCE":
      return { ...state, listMaintenance: action.payload };
    case "LIST_LINK":
      return { ...state, listLink: action.payload };
    case "GET_STORAGE":
      return { ...state, ...action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };

    case "SET_SELECTED_ERROR_FILES":
      return {
        ...state,
        errorMessagesFiles: {
          ...state.errorMessagesFiles,
          [action.payload.key]: action.payload.error,
        },
      };
    case "SET_SELECTED_FILES":
      return {
        ...state,
        selectedFiles: {
          ...state.selectedFiles,
          [action.payload.key]: action.payload.file,
        },
      };
    case "SET_CONDITION":
      return {
        ...state,
        condition_asset: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateListStorage: NetworkStorageListState = {
  storages: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listStorageReducer(
  state: NetworkStorageListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_STORAGES":
      return { ...state, storages: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    case "SET_POSITION_COLUMN":
      return { ...state, positionColumn: action.payload };
    case "SET_EXPORT_TOGGLE":
      return { ...state, exportToggle: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// other sc

export const initialStateOtherSc: NetWorkOtherScState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  rack_server_id: { value: "", label: "" },
  name: "",
  manufactur: "",
  position_unit: "",
  capacity_port: "",
  port: "",
  power: "",
  installation_date: `${new Date()}`,
  condition_asset: "",
  status: "",
  notes: "",

  // List
  listVendor: [],
  listBrand: [],
  listSite: [{ value: "UPD057", label: "TTC PENGAYOMAN" }],
  listFloors: [],
  listRooms: [],
  listAllRooms: [],
  listMaintenance: [],
  listLink: [],
  listType: [],
  listRackServer: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  link_in: "",
  link_out: [""],
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};
export function updateOtherScReducer(
  state: NetWorkOtherScState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_NE_ID":
      return { ...state, ne_id: action.payload };
    case "SET_SITE_ID":
      return { ...state, site_id: action.payload };
    case "SET_FLOOR_ID":
      return { ...state, floor_id: action.payload };
    case "SET_ROOM_ID":
      return { ...state, room_id: action.payload };
    case "SET_BRAND_ID":
      return { ...state, brand_id: action.payload };
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_RACK_SERVER_ID":
      return { ...state, rack_server_id: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_CAPACITY_PORT":
      return { ...state, capacity_port: action.payload };
    case "SET_PORT":
      return { ...state, port: action.payload };
    case "SET_POSITION_UNIT":
      return { ...state, position_unit: action.payload };
    case "SET_POWER":
      return { ...state, power: action.payload };
    case "SET_INSTALLATION_DATE":
      return { ...state, installation_date: action.payload };
    case "LIST_VENDOR":
      return { ...state, listVendor: action.payload };
    case "LIST_BRAND":
      return { ...state, listBrand: action.payload };
    case "LIST_SITE":
      return { ...state, listSite: action.payload };
    case "LIST_FLOORS":
      return { ...state, listFloors: action.payload };
    case "FETCH_ROOMS":
      return {
        ...state,
        listRooms: action.payload.listRooms,
        listAllRooms: action.payload.listAllRooms,
      };
    case "LIST_ROOMS":
      return { ...state, listRooms: action.payload };
    case "LIST_TYPES":
      return { ...state, listType: action.payload };
    case "LIST_RACK_SERVER":
      return { ...state, listRackServer: action.payload };
    case "LIST_ALL_ROOMS":
      return { ...state, listAllRooms: action.payload };
    case "FLOOR_CHANGE":
      return {
        ...state,
        floor_id: action.payload.floor_id,
        room_id: action.payload.room_id,
        listRooms: action.payload.listRooms,
      };
    case "LIST_MAINTENANCE":
      return { ...state, listMaintenance: action.payload };
    case "LIST_LINK":
      return { ...state, listLink: action.payload };
    case "GET_OTHERSC":
      return { ...state, ...action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };

    case "SET_SELECTED_ERROR_FILES":
      return {
        ...state,
        errorMessagesFiles: {
          ...state.errorMessagesFiles,
          [action.payload.key]: action.payload.error,
        },
      };
    case "SET_SELECTED_FILES":
      return {
        ...state,
        selectedFiles: {
          ...state.selectedFiles,
          [action.payload.key]: action.payload.file,
        },
      };
    case "SET_CONDITION":
      return {
        ...state,
        condition_asset: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateListOtherSc: NetworkOtherScListState = {
  oscs: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listOtherScReducer(
  state: NetworkOtherScListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_OTHERSCS":
      return { ...state, oscs: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    case "SET_POSITION_COLUMN":
      return { ...state, positionColumn: action.payload };
    case "SET_EXPORT_TOGGLE":
      return { ...state, exportToggle: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// maintenance
export const initialStateListMaintenanceNetwork: NetworkMaintenanceListState = {
  maintenances: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listMaintenanceNetworkReducer(
  state: NetworkMaintenanceListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_MAINTENANCES":
      return { ...state, maintenances: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateUpdateNetworkMaintenance: PostNetworkMaintenance = {
  activity: "",
  isLoading: false,
  isError: null,
  errorMessagesFiles: null,
  selectedFiles: {
    file1: null,
  },
};

export function updateNetworkMaintenanceReducer(
  state: PostNetworkMaintenance,
  action: ActionType
) {
  switch (action.type) {
    case "SET_ACTIVITY":
      return { ...state, activity: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_SELECTED_ERROR_FILES":
      return {
        ...state,
        errorMessagesFiles: action.payload.error,
      };
    case "SET_SELECTED_FILES":
      return {
        ...state,
        selectedFiles: {
          ...state.selectedFiles,
          [action.payload.key]: action.payload.file,
        },
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// Link
export const initialStateListLinkNetwork: NetworkLinkListState = {
  links: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listLinkNetworkReducer(
  state: NetworkLinkListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_LINKS":
      return { ...state, links: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateUpdateNetworkLink: PostNetworkLink = {
  incoming: { value: "", label: "" },
  outgoing: [],
  list_network: [],
  isLoading: false,
  isError: null,
};

export function updateNetworkLinkReducer(
  state: PostNetworkLink,
  action: ActionType
) {
  switch (action.type) {
    case "SET_LINK":
      return {
        ...state,
        incoming: action.payload.incoming,
        outgoing: action.payload.sub_category_id,
      };
    case "SET_INCOMING":
      return { ...state, incoming: action.payload };
    case "SET_OUTGOING":
      return { ...state, outgoing: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "LIST_NETWORK":
      return { ...state, list_network: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_OUTGOING_CHANGE":
      return {
        ...state,
        outgoing: action.payload.outgoing,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// brand

export const initialStateListBrandNetwork: NetworkBrandListState = {
  brands: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listBrandNetworkReducer(
  state: NetworkBrandListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateUpdateNetworkBrand: PostNetworkBand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updateNetworkBrandReducer(
  state: PostNetworkBand,
  action: ActionType
) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// vendor

export const initialStateListVendorNetwork: NetworkVendorListState = {
  vendors: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listVendorNetworkReducer(
  state: NetworkVendorListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_VENDORS":
      return { ...state, vendors: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateUpdateNetworkVendor: PostNetworkVendor = {
  company: "",
  company_user_name: "",
  number_phone: "",
  isLoading: false,
  isError: null,
};

export function updateNetworkVendorReducer(
  state: PostNetworkVendor,
  action: ActionType
) {
  switch (action.type) {
    case "SET_COMPANY":
      return { ...state, company: action.payload };
    case "SET_COMPANY_USER_NAME":
      return { ...state, company_user_name: action.payload };
    case "SET_NUMBER_PHONE":
      return { ...state, number_phone: action.payload };
    case "SET_VENDOR":
      return {
        ...state,
        number_phone: action.payload.number_phone,
        company: action.payload.company,
        company_user_name: action.payload.company_user_name,
      };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

// type
export const initialStateListTypeNetwork: NetworkTypeListState = {
  types: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
    totalRows: 0,
  },

  isLoading: false,
  isError: null,
  globalFilter: "",
  positionColumn: false,
  exportToggle: false,
};

export function listTypeNetworkReducer(
  state: NetworkTypeListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_TYPES":
      return { ...state, types: action.payload };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_GLOBAL_FILTER":
      return { ...state, globalFilter: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}

export const initialStateUpdateNetworkType: PostNetworkType = {
  name: "",
  sub_category_id: { value: "", label: "" },
  list_sub_category: [],
  isLoading: false,
  isError: null,
};

export function updateNetworkTypeReducer(
  state: PostNetworkType,
  action: ActionType
) {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        name: action.payload.name,
        sub_category_id: {
          value: action.payload.sub_category_id,
          label: action.payload.category_name,
        },
      };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SUB_CATEGORY":
      return { ...state, sub_category_id: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_ERROR":
      return { ...state, isError: action.payload };
    case "LIST_SUB_CATEGORY":
      return { ...state, list_sub_category: action.payload };
    case "SET_LOADING_AND_ERROR":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };
    case "SET_SUB_CATEGORY_CHANGE":
      return {
        ...state,
        sub_category_id: action.payload.sub_category_id,
      };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}
