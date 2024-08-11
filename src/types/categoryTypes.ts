import { ReactSelect } from "@/types/basicTypes";

// subcategory
// rectifier
export type ElectricalState = {
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
  type_id: ReactSelect;
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
  listType: any[];

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
};

export type ElectricalListState = {
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
  exportToggle: boolean;
};

// battery

interface ElectricalBattery {
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
  type_id: ReactSelect;
  capacity: string;
  capacity_bank: string;
  amount: string;
  bank_amount: string;
  system_device: string;
  warranty: string;
  remark_aging: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalBatteryState extends ElectricalBattery {
  // List
  listVendorElectrical: any[];
  listBrandRectifier: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
  listLink: any[];
  listType: any[];

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

export type ElectricalListBatteryState = {
  rectifiers: ElectricalBattery[];
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

export type ElectricalBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostElectricalBand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type ElectricalBrandListState = {
  brands: ElectricalBrand[];
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

export type ElectricalVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type ElectricalVendorListState = {
  vendors: ElectricalVendor[];
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

export type PostElectricalVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};

// type
export type ElectricalType = {
  id: string;
  name: string;
  sub_category_id: string;
  created_at: string;
  user_name: string;
};

export type ElectricalTypeListState = {
  types: ElectricalType[];
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

export type PostElectricalType = {
  name: string;
  sub_category_id: ReactSelect;
  isLoading: boolean;
  isError: string | null;
  list_sub_category: any[];
};

// Maintenance
export type ElectricalMaintenance = {
  id: string;
  activity: string;
  document_name: string;
  maintenance_date: string;
  user_name: string;
};

export type ElectricalMaintenanceListState = {
  maintenances: ElectricalMaintenance[];
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

export type PostElectricalMaintenance = {
  activity: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};

// category
export type ElectricalAllListState = {
  electricals: {
    id: string;
    ne_id: string;
    site_id: string;
    site_name: string;
    floor_name: string;
    floor_id: string;
    room_name: string;
    room_id: string;
    device_id: string;
    sub_category_id: string;
    sub_category_name: string;
    link_id: string;
    status: string;
    condition_asset: string;
    notes: string;
    installation_date: string;
    maintenance_id: string;
    created_at: string;
    user_id: string;
    user_name: string;
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
  exportToggle: boolean;
};
