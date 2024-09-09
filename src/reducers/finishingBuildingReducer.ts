import { ActionType } from "@/types/basicTypes";
import {
  FinishingBuildingAllListState,
  FinishingBuildingBrandListState,
  FinishingBuildingCat1ListState,
  FinishingBuildingCat1State,
  FinishingBuildingCat2ListState,
  FinishingBuildingCat2State,
  FinishingBuildingCeramicListState,
  FinishingBuildingCeramicState,
  FinishingBuildingMaintenanceListState,
  FinishingBuildingTypeListState,
  FinishingBuildingVendorListState,
  PostFinishingBuildingBrand,
  PostFinishingBuildingMaintenance,
  PostFinishingBuildingType,
  PostFinishingBuildingVendor,
} from "@/types/finishingBuildingTypes";

export const initialStateFinishingBuildingAllList: FinishingBuildingAllListState =
  {
    finishingbuildings: [],
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

export const updateFinishingBuildingAllReducer = (
  state: FinishingBuildingAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_FINISHINGBUILDINGS":
      return { ...state, finishingbuildings: action.payload };
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

// ceramic

export const initialStateCeramic: FinishingBuildingCeramicState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  rise: 0,
  good: 0,
  broke: 0,
  amount: 0,
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
  listType: [],
  listBrand: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateCeramicReducer(
  state: FinishingBuildingCeramicState,
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
    case "SET_DISPLAY":
      return { ...state, display: action.payload };
    case "SET_KEYBOARD":
      return { ...state, keyboard: action.payload };
    case "SET_RISE":
      return { ...state, rise: action.payload };
    case "SET_GOOD":
      return { ...state, good: action.payload };
    case "SET_BROKE":
      return { ...state, broke: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
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
    case "GET_CERAMIC":
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

export const initialStateListCeramic: FinishingBuildingCeramicListState = {
  finishingbuildingceramics: [],
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

export function listCeramicReducer(
  state: FinishingBuildingCeramicListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_FINISHINGBUILDINGCERAMICS":
      return { ...state, finishingbuildingceramics: action.payload };
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

// cat 1

export const initialStateCat1: FinishingBuildingCat1State = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  good: 0,
  broke: 0,
  amount: 0,
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
  listType: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateCat1Reducer(
  state: FinishingBuildingCat1State,
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
    case "SET_GOOD":
      return { ...state, good: action.payload };
    case "SET_BROKE":
      return { ...state, broke: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
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
    case "GET_CAT1":
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

export const initialStateListCat1: FinishingBuildingCat1ListState = {
  finishingbuildingcat1s: [],
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

export function listCat1Reducer(
  state: FinishingBuildingCat1ListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_FINISHINGBUILDINGCAT1S":
      return { ...state, finishingbuildingcat1s: action.payload };
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

// cat 2

export const initialStateCat2: FinishingBuildingCat2State = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  type_id: { value: "", label: "" },
  vendor_user_name: "",
  vendor_phone: "",
  maintenance_id: { value: "", label: "" },
  name: "",
  color: "",
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
  listType: [],

  //   FOR COMPONENT
  isLoading: false,
  isError: "",

  //   FOR FILE
  selectedFiles: { file1: null, file2: null, file3: null },
  errorMessagesFiles: { file1: null, file2: null, file3: null },
  maintenance_date: "",
  maintenance_activity: "",
  document_name: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

export function updateCat2Reducer(
  state: FinishingBuildingCat2State,
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
    case "SET_COLOR":
      return { ...state, color: action.payload };
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
    case "GET_CAT2":
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

export const initialStateListCat2: FinishingBuildingCat2ListState = {
  finishingbuildingcat2s: [],
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

export function listCat2Reducer(
  state: FinishingBuildingCat2ListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_FINISHINGBUILDINGCAT2S":
      return { ...state, finishingbuildingcat2s: action.payload };
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
export const initialStateListMaintenanceFinishingBuilding: FinishingBuildingMaintenanceListState =
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

export function listMaintenanceFinishingBuildingReducer(
  state: FinishingBuildingMaintenanceListState,
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

export const initialStateUpdateFinishingBuildingMaintenance: PostFinishingBuildingMaintenance =
  {
    activity: "",
    isLoading: false,
    isError: null,
    errorMessagesFiles: null,
    selectedFiles: {
      file1: null,
    },
  };

export function updateFinishingBuildingMaintenanceReducer(
  state: PostFinishingBuildingMaintenance,
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

export const initialStateListBrandFinishingBuilding: FinishingBuildingBrandListState =
  {
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

export function listBrandFinishingBuildingReducer(
  state: FinishingBuildingBrandListState,
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

export const initialStateUpdateFinishingBuildingBrand: PostFinishingBuildingBrand =
  {
    name: "",
    isLoading: false,
    isError: null,
  };

export function updateFinishingBuildingBrandReducer(
  state: PostFinishingBuildingBrand,
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

export const initialStateListVendorFinishingBuilding: FinishingBuildingVendorListState =
  {
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

export function listVendorFinishingBuildingReducer(
  state: FinishingBuildingVendorListState,
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

export const initialStateUpdateFinishingBuildingVendor: PostFinishingBuildingVendor =
  {
    company: "",
    company_user_name: "",
    number_phone: "",
    isLoading: false,
    isError: null,
  };

export function updateFinishingBuildingVendorReducer(
  state: PostFinishingBuildingVendor,
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
export const initialStateListTypeFinishingBuilding: FinishingBuildingTypeListState =
  {
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

export function listTypeFinishingBuildingReducer(
  state: FinishingBuildingTypeListState,
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

export const initialStateUpdateFinishingBuildingType: PostFinishingBuildingType =
  {
    name: "",
    sub_category_id: { value: "", label: "" },
    list_sub_category: [],
    isLoading: false,
    isError: null,
  };

export function updateFinishingBuildingTypeReducer(
  state: PostFinishingBuildingType,
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
