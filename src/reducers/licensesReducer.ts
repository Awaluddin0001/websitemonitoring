import { ActionType } from "@/types/basicTypes";

import {
  LicenseMaintenanceListState,
  PostLicenseMaintenance,
} from "@/types/licensesTypes";

// maintenance
export const initialStateListMaintenanceLicenses: LicenseMaintenanceListState =
  {
    licenses: [],
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

export function listMaintenanceLicensesReducer(
  state: LicenseMaintenanceListState,
  action: ActionType
) {
  switch (action.type) {
    case "SET_LICENSES":
      return { ...state, licenses: action.payload };
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

export const initialStateUpdateLicensesMaintenance: PostLicenseMaintenance = {
  activity: "",
  expired_at: "",
  isLoading: false,
  isError: null,
  errorMessagesFiles: null,
  selectedFiles: {
    file1: null,
  },
};

export function updateLicensesMaintenanceReducer(
  state: PostLicenseMaintenance,
  action: ActionType
) {
  switch (action.type) {
    case "SET_ACTIVITY":
      return { ...state, activity: action.payload };
    case "SET_EXPIRED":
      return { ...state, expired_at: action.payload };
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
