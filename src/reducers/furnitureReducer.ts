import { ActionType } from "@/types/basicTypes";
import {
  FurnitureAllListState,
  FurnitureBrandListState,
  FurnitureVendorListState,
  PostFurnitureBrand,
  PostFurnitureVendor,
} from "@/types/furnitureTypes";

export const initialStateFurnitureAllList: FurnitureAllListState = {
  furnitures: [],
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

export const updateFurnitureAllReducer = (
  state: FurnitureAllListState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_FURNITURES":
      return { ...state, furnitures: action.payload };
    case "SET_NAME":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
          name: action.payload,
        },
      };
    case "SET_STATUS":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
          status: action.payload,
        },
      };
    case "SET_CONDITION_ASSET":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
          condition_asset: action.payload,
        },
      };
    case "SET_AMOUNT":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
          amount: action.payload,
        },
      };
    case "SET_NOTES":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
          notes: action.payload,
        },
      };
    case "SET_INSTALLATION_DATE":
      return {
        ...state,
        furnitures: {
          ...state.furnitures,
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

export const initialStateListBrandFurniture: FurnitureBrandListState = {
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

export function listBrandFurnitureReducer(
  state: FurnitureBrandListState,
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

export const initialStateUpdateFurnitureBrand: PostFurnitureBrand = {
  name: "",
  isLoading: false,
  isError: null,
};

export function updateFurnitureBrandReducer(
  state: PostFurnitureBrand,
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

export const initialStateListVendorFurniture: FurnitureVendorListState = {
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

export function listVendorFurnitureReducer(
  state: FurnitureVendorListState,
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

export const initialStateUpdateFurnitureVendor: PostFurnitureVendor = {
  company: "",
  company_user_name: "",
  number_phone: "",
  isLoading: false,
  isError: null,
};

export function updateFurnitureVendorReducer(
  state: PostFurnitureVendor,
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
