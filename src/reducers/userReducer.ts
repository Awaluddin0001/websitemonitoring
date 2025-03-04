import { ActionType } from "@/types/basicTypes";
import { Postuser, userAllList } from "@/types/userTypes";

// brand

export const initialStateListUser: userAllList = {
  user: [],
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

export function listUser(state: userAllList, action: ActionType) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
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

export const initialStateUpdateuser: Postuser = {
  id: "",
  name: "",
  role: "",
  role_name: "",
  user_name: "",
  phone_number: "",
  status: "",
  password: "",
  isLoading: false,
  isError: null,
};

export function updateUser(state: Postuser, action: ActionType) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_PHONE":
      return { ...state, phone_number: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
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
