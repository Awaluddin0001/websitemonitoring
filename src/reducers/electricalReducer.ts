type ActionType = { type: string; payload?: any };

type ReactSelect = { value: string; label: string };

type ElectricalState = {
  // Value
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  brand_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  name: string;
  role: string;
  type: string;
  capacity: string;
  modul: string;
  capacity_modul: string;
  load_current: string;
  occupancy: string;
  system_device: string;
  warranty: string;
  remark_aging: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;

  // List
  listVendorElectrical: any[];
  listBrandRectifier: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
  listLink: any[];

  //   FOR COMPONENT
  isLoading: boolean;
  isError: string | null;

  //   FOR FILE
  selectedFiles: {
    file1: null;
    file2: null;
    file3: null;
  };
  errorMessagesFiles: {
    file1: null;
    file2: null;
    file3: null;
  };
};

type ElectricalListState = {
  rectifiers: {
    asset_id: string;
    brand_id: string;
    brand_name: string;
    capacity: number;
    capacity_modul: number;
    condition_asset: string;
    created_at: string;
    floor_id: string;
    floor_name: string;
    id: string;
    incoming: number;
    installation_date: string;
    link_id: string;
    load_current: number;
    maintenance_date: string | null;
    modul: string;
    name: string;
    ne_id: string;
    notes: string;
    occupancy: number;
    outgoing: string;
    vendor_id: string;
    remark_aging: string;
    role: string;
    room_id: string;
    room_name: string;
    site_id: string;
    site_name: string;
    status: string;
    system_device: string;
    type: string;
    user_name: string;
    vendor_name: string;
    warranty: string | null;
  }[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalRows: number;
  };
  //   FOR COMPONENT
  isLoading: boolean;
  isError: string | null;
  globalFilter: string;

  // FOR TABLE
  positionColumn: boolean;
};

export const initialStateRecti: ElectricalState = {
  // Value
  asset_id: "",
  ne_id: "",
  site_id: { value: "", label: "" },
  floor_id: { value: "", label: "" },
  room_id: { value: "", label: "" },
  brand_id: { value: "", label: "" },
  vendor_id: { value: "", label: "" },
  maintenance_id: { value: "", label: "" },
  link_id: { value: "", label: "" },
  name: "",
  role: "",
  type: "",
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
  listVendorElectrical: [],
  listBrandRectifier: [],
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
    case "SET_TYPE":
      return { ...state, type: action.payload };
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
    case "LIST_VENDOR_ELECTRICAL":
      return { ...state, listVendorElectrical: action.payload };
    case "LIST_BRAND_RECTIFIER":
      return { ...state, listBrandRectifier: action.payload };
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
    case "SET_POSITIONCOLUMN":
      return { ...state, positionColumn: action.payload };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
}
