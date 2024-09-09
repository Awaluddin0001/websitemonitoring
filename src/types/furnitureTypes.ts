import { ReactSelect } from "./basicTypes";

export interface Furniture {
  id: string;
  ne_id: string;
  asset_id: string;
  site_id: string;
  site_name: string;
  floor_name: string;
  type_name: string;
  floor_id: string;
  room_name: string;
  room_id: string;
  device_id: string;
  status: string;
  name: string;
  condition_asset: string;
  amount: number;
  notes: string;
  installation_date: string;
  maintenance_id: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export type FurnitureAllListState = {
  furnitures: Furniture[];
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

export interface Device {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  amount: number;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface furnitureDevice {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  brand_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  amount: number;
  name: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface furnitureDeviceState extends furnitureDevice {
  // List
  listVendor: any[];
  listSite: any[];
  listFloors: any[];
  listBrand: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];

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

export type furnitureDeviceListState = {
  devices: furnitureDevice[];
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

// brand

export type FurnitureBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostFurnitureBrand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type FurnitureBrandListState = {
  brands: FurnitureBrand[];
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

export type FurnitureVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type FurnitureVendorListState = {
  vendors: FurnitureVendor[];
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

export type PostFurnitureVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};
