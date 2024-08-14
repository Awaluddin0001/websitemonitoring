import { ActionType } from "@/types/basicTypes";

import {
  ElectricalState,
  ElectricalListState,
  ElectricalBrandListState,
  PostElectricalBand,
  ElectricalVendorListState,
  PostElectricalVendor,
  ElectricalTypeListState,
  PostElectricalType,
  ElectricalMaintenanceListState,
  PostElectricalMaintenance,
  ElectricalAllListState,
  ElectricalBatteryState,
  ElectricalCubicleState,
  ElectricalListCubicleState,
  ElectricalGensetState,
  ElectricalListGensetState,
  ElectricalLvmdpState,
  ElectricalListLvmdpState,
  ElectricalPanelState,
  ElectricalListPanelState,
  ElectricalTrafoState,
  ElectricalListTrafoState,
  ElectricalListUpsState,
  ElectricalUpsState,
} from "@/types/categoryTypes";

export const initialStateRecti: ElectricalState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  role: "",
  type_id: { value: "", label: "" },
  capacity: "",
  modul: "",
  capacity_modul: "",
  load_current: "",
  occupancy: "",
  system_device: "",
  warranty: "",
  remark_aging: "",
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
export function updateRectiReducer(state: ElectricalState, action: ActionType) {
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_MODUL":
      return { ...state, modul: action.payload };
    case "SET_CAPACITY_MODUL":
      return { ...state, capacity_modul: action.payload };
    case "SET_LOAD_CURRENT":
      return { ...state, load_current: action.payload };
    case "SET_OCCUPANCY":
      return { ...state, occupancy: action.payload };
    case "SET_SYSTEM":
      return { ...state, system_device: action.payload };
    case "SET_WARRANTY":
      return { ...state, warranty: action.payload };
    case "SET_REMARK_AGING":
      return { ...state, remark_aging: action.payload };
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
    case "GET_RECTI":
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

export const initialStateListRecti: ElectricalListState = {
  rectifiers: [],
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

export function listRectiReducer(
  state: ElectricalListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_RECTIFIERS":
      return { ...state, rectifiers: action.payload };
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

export const initialStateListBrandElectrical: ElectricalBrandListState = {
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

export function listBrandElectricalReducer(
  state: ElectricalBrandListState,
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

export const initialStateUpdateElectricalBrand: PostElectricalBand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updateElectricalBrandReducer(
  state: PostElectricalBand,
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

export const initialStateListVendorElectrical: ElectricalVendorListState = {
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

export function listVendorElectricalReducer(
  state: ElectricalVendorListState,
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

export const initialStateUpdateElectricalVendor: PostElectricalVendor = {
  company: "",
  company_user_name: "",
  number_phone: "",
  isLoading: false,
  isError: null,
};

export function updateElectricalVendorReducer(
  state: PostElectricalVendor,
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
export const initialStateListTypeElectrical: ElectricalTypeListState = {
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

export function listTypeElectricalReducer(
  state: ElectricalTypeListState,
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

export const initialStateUpdateElectricalType: PostElectricalType = {
  name: "",
  sub_category_id: { value: "", label: "" },
  list_sub_category: [],
  isLoading: false,
  isError: null,
};

export function updateElectricalTypeReducer(
  state: PostElectricalType,
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

// maintenance
export const initialStateListMaintenanceElectrical: ElectricalMaintenanceListState =
  {
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

export function listMaintenanceElectricalReducer(
  state: ElectricalMaintenanceListState,
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

export const initialStateUpdateElectricalMaintenance: PostElectricalMaintenance =
  {
    activity: "",
    isLoading: false,
    isError: null,
    errorMessagesFiles: null,
    selectedFiles: {
      file1: null,
    },
  };

export function updateElectricalMaintenanceReducer(
  state: PostElectricalMaintenance,
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

export const initialStateElectricalAllList: ElectricalAllListState = {
  electricals: [],
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

export const updateElectricalAllReducer = (
  state: ElectricalAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_ELECTRICALS":
      return { ...state, electricals: action.payload };
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

export const initialBatteryState: ElectricalBatteryState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  capacity: "",
  capacity_bank: "",
  amount: "",
  bank_amount: "",
  system_device: "",
  warranty: "",
  remark_aging: "",
  installation_date: "",
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
export function updateBatteryReducer(
  state: ElectricalState,
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_CAPACITY_BANK":
      return { ...state, capacity_bank: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_BANK_AMOUNT":
      return { ...state, bank_amount: action.payload };
    case "SET_SYSTEM":
      return { ...state, system_device: action.payload };
    case "SET_WARRANTY":
      return { ...state, warranty: action.payload };
    case "SET_REMARK_AGING":
      return { ...state, remark_aging: action.payload };
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
    case "GET_BATTERY":
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

// cubicle

export const initialStateListCubicle: ElectricalListCubicleState = {
  cubicles: [],
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

export function listCubicleReducer(
  state: ElectricalListCubicleState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_CUBICLES":
      return { ...state, cubicles: action.payload };
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

export const initialCubicleState: ElectricalCubicleState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  manufactur: "",
  serial_number: "",
  load_break: "",
  breaker_count: "",
  installation_date: "",
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
export function updateCubicleReducer(
  state: ElectricalCubicleState,
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_SERIAL_NUMBER":
      return { ...state, serial_number: action.payload };
    case "SET_LOAD_BREAK":
      return { ...state, load_break: action.payload };
    case "SET_BREAKER_COUNT":
      return { ...state, breaker_count: action.payload };
    case "SET_SYSTEM":
      return { ...state, system_device: action.payload };
    case "SET_WARRANTY":
      return { ...state, warranty: action.payload };
    case "SET_REMARK_AGING":
      return { ...state, remark_aging: action.payload };
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
    case "GET_CUBICLE":
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

export const initialStateListGenset: ElectricalListGensetState = {
  gensets: [],
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

export function listGensetReducer(
  state: ElectricalListGensetState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_GENSETS":
      return { ...state, gensets: action.payload };
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

export const initialGensetState: ElectricalGensetState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  manufactur: "",
  serial_number: "",
  load_current: "",
  fuel: "",
  fuel_capacity: "",
  installation_date: "",
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
export function updateGensetReducer(
  state: ElectricalGensetState,
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_SERIAL_NUMBER":
      return { ...state, serial_number: action.payload };
    case "SET_LOAD_CURRENT":
      return { ...state, load_current: action.payload };
    case "SET_FUEL":
      return { ...state, fuel: action.payload };
    case "SET_FUEL_CAPACITY":
      return { ...state, fuel_capacity: action.payload };
    case "SET_SYSTEM":
      return { ...state, system_device: action.payload };
    case "SET_WARRANTY":
      return { ...state, warranty: action.payload };
    case "SET_REMARK_AGING":
      return { ...state, remark_aging: action.payload };
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
    case "GET_CUBICLE":
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

// lvmdp
export const initialStateListLvmdp: ElectricalListLvmdpState = {
  lvmdps: [],
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

export function listLvmdpReducer(
  state: ElectricalListLvmdpState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_LVMDPS":
      return { ...state, lvmdps: action.payload };
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

export const initialLvmdpState: ElectricalLvmdpState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  voltage_level: "",
  current_rating: "",
  breaker_type: "",
  breaker_rating: "",
  section: "",
  installation_date: "",
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
export function updateLvmdpReducer(
  state: ElectricalLvmdpState,
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
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_VOLTAGE_LEVEL":
      return { ...state, voltage_level: action.payload };
    case "SET_CURRENT_RATING":
      return { ...state, current_rating: action.payload };
    case "SET_BREAKER_TYPE":
      return { ...state, breaker_type: action.payload };
    case "SET_BREAKER_RATING":
      return { ...state, breaker_rating: action.payload };
    case "SET_SECTION":
      return { ...state, section: action.payload };
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
    case "GET_CUBICLE":
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

// panel
export const initialStateListPanel: ElectricalListPanelState = {
  panels: [],
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

export function listPanelReducer(
  state: ElectricalListPanelState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_PANELS":
      return { ...state, panels: action.payload };
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

export const initialPanelState: ElectricalPanelState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  capacity: "",
  function_category: "",
  installation_date: "",
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
export function updatePanelReducer(
  state: ElectricalPanelState,
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
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_FUNCTION_CATEGORY":
      return { ...state, function_category: action.payload };
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
    case "GET_CUBICLE":
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

// trafo
export const initialStateListTrafo: ElectricalListTrafoState = {
  trafos: [],
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

export function listTrafoReducer(
  state: ElectricalListTrafoState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_TRAFOS":
      return { ...state, trafos: action.payload };
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

export const initialTrafoState: ElectricalTrafoState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  manufactur: "",
  transform_ratio: "",
  serial_number: "",
  load_current: "",
  installation_date: "",
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
export function updateTrafoReducer(
  state: ElectricalTrafoState,
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
    case "SET_VENDOR_ID":
      return { ...state, vendor_id: action.payload };
    case "SET_MAINTENANCE_ID":
      return { ...state, maintenance_id: action.payload };
    case "SET_LINK_ID":
      return { ...state, link_id: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_MANUFACTUR":
      return { ...state, manufactur: action.payload };
    case "SET_TRANSFORM_RATIO":
      return { ...state, transform_ratio: action.payload };
    case "SET_SERIAL_NUMBER":
      return { ...state, serial_number: action.payload };
    case "SET_LOAD_CURRENT":
      return { ...state, load_current: action.payload };
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
    case "GET_CUBICLE":
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

// ups
export const initialStateListUps: ElectricalListUpsState = {
  upses: [],
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

export function listUpsReducer(
  state: ElectricalListUpsState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_UPSS":
      return { ...state, upss: action.payload };
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

export const initialUpsState: ElectricalUpsState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  type_id: { value: "", label: "" },
  load_current: "",
  serial_number: "",
  capacity: "",
  occupancy: "",
  type_modular: "",
  remark_aging: "",
  warranty: "",
  installation_date: "",
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
export function updateUpsReducer(
  state: ElectricalUpsState,
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
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TYPE_ID":
      return { ...state, type_id: action.payload };
    case "SET_LOAD_CURRENT":
      return { ...state, load_current: action.payload };
    case "SET_SERIAL_NUMBER":
      return { ...state, serial_number: action.payload };
    case "SET_CAPACITY":
      return { ...state, capacity: action.payload };
    case "SET_OCCUPANCY":
      return { ...state, occupancy: action.payload };
    case "SET_TYPE_MODULAR":
      return { ...state, type_modular: action.payload };
    case "SET_WARRANTY":
      return { ...state, warranty: action.payload };
    case "SET_REMARK_AGING":
      return { ...state, remark_aging: action.payload };
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
    case "GET_CUBICLE":
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
