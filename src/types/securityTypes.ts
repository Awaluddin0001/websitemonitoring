import { ReactSelect } from "@/types/basicTypes";
export interface Security {
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
  sub_category_id: string;
  sub_category_name: string;
  position: string;
  amount: number;
  link_id: string;
  status: string;
  condition_asset: string;
  notes: string;
  installation_date: string;
  maintenance_id: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export type SecurityAllListState = {
  securitys: Security[];
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

// cctv

export interface Cctv {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  manufactur: string;
  type_id: string;
  ip: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface SecurityCctv {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  brand_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  type_id: ReactSelect;
  manufactur: string;
  ip: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface SecurityCctvState extends SecurityCctv {
  // List
  listVendor: any[];
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

export type SecurityCctvListState = {
  cctvs: SecurityCctv[];
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

// video recording

export interface VideoRecording {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  ip: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface SecurityVideoRecording {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  brand_id: ReactSelect;
  type_id: ReactSelect;
  ip: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface SecurityVideoRecordingState extends SecurityVideoRecording {
  // List
  listVendor: any[];
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

export type SecurityVideoRecordingListState = {
  videorecordings: SecurityVideoRecording[];
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

// other security

export interface oScSecurity {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface SecurityOtherSc {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  type_id: ReactSelect;
  brand_id: ReactSelect;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface SecurityOtherScState extends SecurityOtherSc {
  // List
  listVendor: any[];
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

export type SecurityOtherScListState = {
  oscs: SecurityOtherSc[];
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

export type SecurityBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostSecurityBand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type SecurityBrandListState = {
  brands: SecurityBrand[];
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

export type SecurityVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type SecurityVendorListState = {
  vendors: SecurityVendor[];
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

export type PostSecurityVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};

// type
export type SecurityType = {
  id: string;
  name: string;
  sub_category_id: string;
  created_at: string;
  user_name: string;
};

export type SecurityTypeListState = {
  types: SecurityType[];
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

export type PostSecurityType = {
  name: string;
  sub_category_id: ReactSelect;
  isLoading: boolean;
  isError: string | null;
  list_sub_category: any[];
};

// Maintenance
export type SecurityMaintenance = {
  id: string;
  activity: string;
  document_name: string;
  maintenance_date: string;
  user_name: string;
};

export type SecurityMaintenanceListState = {
  maintenances: SecurityMaintenance[];
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

export type PostSecurityMaintenance = {
  activity: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};

// link
export type SecurityLink = {
  id: string;
  incoming: string;
  outgoing: string;
  created_at: string;
  user_name: string;
};

export type SecurityLinkListState = {
  links: SecurityType[];
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

export type PostSecurityLink = {
  incoming: ReactSelect;
  outgoing: ReactSelect[];
  list_security: any[];
  isLoading: boolean;
  isError: string | null;
};
