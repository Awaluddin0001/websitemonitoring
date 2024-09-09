import { ReactSelect } from "@/types/basicTypes";
export interface Conveyance {
  asset_id: string;
  id: string;
  ne_id: string;
  site_id: string;
  site_name: string;
  floor_name: string;
  type_name: string;
  floor_id: string;
  room_name: string;
  room_id: string;
  device_id: string;
  name: string;
  status: string;
  condition_asset: string;
  amount: number;
  notes: string;
  installation_date: string;
  maintenance_id: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export type ConveyanceAllListState = {
  conveyances: Conveyance[];
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
  exportToggle: boolean;
};

export interface conveyance {
  asset_id: string;
  ne_id: string;
  site_id: string;
  brand_id: string;
  floor_id: string;
  room_id: string;
  vendor_id: string;
  maintenance_id: string;
  type_id: string;
  name: string;
  installation_date: string;
  condition_asset: string;
  amount: string;
  status: string;
  notes: string;
}
interface ConveyanceState {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  brand_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  name: string;
  installation_date: string;
  condition_asset: string;
  amount: string;
  status: string;
  notes: string;
}

export interface ConveyanceConveyanceState extends ConveyanceState {
  // List
  listVendor: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
  listLink: any[];
  listType: any[];
  listBrand: any[];

  //   FOR COMPONENT
  isLoading: boolean;
  isError: string | null;

  //   FOR FILE
  selectedFiles: {
    file1: File | null;
    file2: File | null;
    file3: File | null;
  };
  errorMessagesFiles: {
    file1: null;
    file2: null;
    file3: null;
  };
  vendor_phone?: string;
  vendor_user_name?: string;
  maintenance_date?: string;
  maintenance_activity?: string;
  link_in?: string;
  link_out?: string[];
  document_name?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
}

// brand

export type ConveyanceBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostConveyanceBrand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type ConveyanceBrandListState = {
  brands: ConveyanceBrand[];
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

  positionColumn: boolean;
  exportToggle: boolean;
};

// vendor

export type ConveyanceVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type ConveyanceVendorListState = {
  vendors: ConveyanceVendor[];
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

  positionColumn: boolean;
  exportToggle: boolean;
};

export type PostConveyanceVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};

// type
export type ConveyanceType = {
  id: string;
  name: string;
  sub_category_id: string;
  created_at: string;
  user_name: string;
};

export type ConveyanceTypeListState = {
  types: ConveyanceType[];
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

  positionColumn: boolean;
  exportToggle: boolean;
};

export type PostConveyanceType = {
  name: string;
  sub_category_id: ReactSelect;
  isLoading: boolean;
  isError: string | null;
  list_sub_category: any[];
};

// Maintenance
export type ConveyanceMaintenance = {
  id: string;
  activity: string;
  document_name: string;
  maintenance_date: string;
  user_name: string;
};

export type ConveyanceMaintenanceListState = {
  maintenances: ConveyanceMaintenance[];
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

  positionColumn: boolean;
  exportToggle: boolean;
};

export type PostConveyanceMaintenance = {
  activity: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};
