import { ActionType } from "@/types/basicTypes";
import {
  FluidAllListState,
  FluidBrandListState,
  FluidMaintenanceListState,
  FluidTypeListState,
  FluidVendorListState,
  PostFluidBrand,
  PostFluidMaintenance,
  PostFluidType,
  PostFluidVendor,
} from "@/types/fluidTypes";

export const initialStateConveyanceAllList: FluidAllListState = {
  fluids: [],
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

export const updateConveyanceAllReducer = (
  state: FluidAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_FLUIDS":
      return { ...state, fluids: action.payload };
    case "SET_NAME":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          name: action.payload,
        },
      };
    case "SET_STATUS":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          status: action.payload,
        },
      };
    case "SET_CONDITION_ASSET":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          condition_asset: action.payload,
        },
      };
    case "SET_AMOUNT":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          amount: action.payload,
        },
      };
    case "SET_NOTES":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          notes: action.payload,
        },
      };
    case "SET_INSTALLATION_DATE":
      return {
        ...state,
        fluids: {
          ...state.fluids,
          installation_date: action.payload,
        },
      };
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

// maintenance
export const initialStateListMaintenanceConveyance: FluidMaintenanceListState =
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

export function listMaintenanceConveyanceReducer(
  state: FluidMaintenanceListState,
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

export const initialStateUpdateConveyanceMaintenance: PostFluidMaintenance = {
  activity: "",
  isLoading: false,
  isError: null,
  errorMessagesFiles: null,
  selectedFiles: {
    file1: null,
  },
};

export function updateConveyanceMaintenanceReducer(
  state: PostFluidMaintenance,
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

export const initialStateListBrandConveyance: FluidBrandListState = {
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

export function listBrandConveyanceReducer(
  state: FluidBrandListState,
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

export const initialStateUpdateConveyanceBrand: PostFluidBrand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updateConveyanceBrandReducer(
  state: PostFluidBrand,
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

export const initialStateListVendorConveyance: FluidVendorListState = {
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

export function listVendorConveyanceReducer(
  state: FluidVendorListState,
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

export const initialStateUpdateConveyanceVendor: PostFluidVendor = {
  company: "",
  company_user_name: "",
  number_phone: "",
  isLoading: false,
  isError: null,
};

export function updateConveyanceVendorReducer(
  state: PostFluidVendor,
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
export const initialStateListTypeConveyance: FluidTypeListState = {
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

export function listTypeConveyanceReducer(
  state: FluidTypeListState,
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

export const initialStateUpdateConveyanceType: PostFluidType = {
  name: "",
  sub_category_id: { value: "", label: "" },
  list_sub_category: [],
  isLoading: false,
  isError: null,
};

export function updateConveyanceTypeReducer(
  state: PostFluidType,
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
