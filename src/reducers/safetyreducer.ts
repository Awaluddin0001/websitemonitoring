import { ActionType } from "@/types/basicTypes";
import {
  PostSafetyBrand,
  SafetyAllListState,
  SafetyBrandListState,
} from "@/types/safetyTypes";

export const initialStateSafetyAllList: SafetyAllListState = {
  safetys: [],
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

export const updateSafetyAllReducer = (
  state: SafetyAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_SAFETYS":
      return { ...state, safetys: action.payload };
    case "SET_NAME":
      return {
        ...state,
        safetys: {
          ...state.safetys,
          name: action.payload,
        },
      };
    case "SET_STATUS":
      return {
        ...state,
        safetys: {
          ...state.safetys,
          status: action.payload,
        },
      };
    case "SET_CONDITION_ASSET":
      return {
        ...state,
        safetys: {
          ...state.safetys,
          condition_asset: action.payload,
        },
      };
    case "SET_AMOUNT":
      return {
        ...state,
        safetys: {
          ...state.safetys,
          amount: action.payload,
        },
      };
    case "SET_NOTES":
      return {
        ...state,
        safetys: {
          ...state.safetys,
          notes: action.payload,
        },
      };
    case "SET_INSTALLATION_DATE":
      return {
        ...state,
        safetys: {
          ...state.safetys,
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

// brand

export const initialStateListBrandSafety: SafetyBrandListState = {
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

export function listBrandSafetyReducer(
  state: SafetyBrandListState,
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

export const initialStateUpdateSafetyBrand: PostSafetyBrand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updateSafetyBrandReducer(
  state: PostSafetyBrand,
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
