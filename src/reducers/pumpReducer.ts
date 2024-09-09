import { ActionType } from "@/types/basicTypes";
import {
  PostPumpBrand,
  PostPumpMaintenance,
  PostPumpType,
  PostPumpVendor,
  PumpAllListState,
  PumpBrandListState,
  PumpDeviceListState,
  PumpDeviceState,
  PumpMaintenanceListState,
  PumpTypeListState,
  PumpVendorListState,
} from "@/types/pumpTypes";

export const initialStatePumpAllList: PumpAllListState = {
  pumps: [],
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

export const updatePumpAllReducer = (
  state: PumpAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_PUMPS":
      return { ...state, pumps: action.payload };
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
};

// device

export const initialStateDevice: PumpDeviceState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  name: "",
  model: "",
  water_flow: "",
  power: "",
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
  listBrand: [],

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

export function updateDeviceReducer(
  state: PumpDeviceState,
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };
    case "SET_WATER_FLOW":
      return { ...state, water_flow: action.payload };
    case "SET_POWER":
      return { ...state, power: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_CONDITION_ASSET":
      return { ...state, condition_asset: action.payload };
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
    case "GET_DEVICE":
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

export const initialStateListDevice: PumpDeviceListState = {
  devices: [],
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

export function listDeviceReducer(
  state: PumpDeviceListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_DEVICES":
      return { ...state, devices: action.payload };
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
export const initialStateListMaintenancePump: PumpMaintenanceListState = {
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

export function listMaintenancePumpReducer(
  state: PumpMaintenanceListState,
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

export const initialStateUpdatePumpMaintenance: PostPumpMaintenance = {
  activity: "",
  isLoading: false,
  isError: null,
  errorMessagesFiles: null,
  selectedFiles: {
    file1: null,
  },
};

export function updatePumpMaintenanceReducer(
  state: PostPumpMaintenance,
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

// brand

export const initialStateListBrandPump: PumpBrandListState = {
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

export function listBrandPumpReducer(
  state: PumpBrandListState,
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

export const initialStateUpdatePumpBrand: PostPumpBrand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updatePumpBrandReducer(
  state: PostPumpBrand,
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

export const initialStateListVendorPump: PumpVendorListState = {
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

export function listVendorPumpReducer(
  state: PumpVendorListState,
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

export const initialStateUpdatePumpVendor: PostPumpVendor = {
  company: "",
  company_user_name: "",
  number_phone: "",
  isLoading: false,
  isError: null,
};

export function updatePumpVendorReducer(
  state: PostPumpVendor,
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
export const initialStateListTypePump: PumpTypeListState = {
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

export function listTypePumpReducer(
  state: PumpTypeListState,
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

export const initialStateUpdatePumpType: PostPumpType = {
  name: "",
  sub_category_id: { value: "", label: "" },
  list_sub_category: [],
  isLoading: false,
  isError: null,
};

export function updatePumpTypeReducer(state: PostPumpType, action: ActionType) {
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
