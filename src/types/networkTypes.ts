import { ReactSelect } from "@/types/basicTypes";
export interface Network {
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

export type NetworkAllListState = {
  networks: Network[];
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

// computer

export interface Computer {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  display: string;
  keyboard: string;
  mouse: string;
  motherboard: string;
  case: string;
  processor: string;
  vga: string;
  hardisk: string;
  ram: string;
  cooling: string;
  power_supply: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface NetworkComputer {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  brand_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  link_id: ReactSelect;
  display: string;
  keyboard: string;
  mouse: string;
  motherboard: string;
  _case: string;
  casing: string;
  processor: string;
  vga: string;
  hardisk: string;
  ram: string;
  cooling: string;
  power_supply: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface NetWorkComputerState extends NetworkComputer {
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

export type NetworkComputerListState = {
  computers: NetworkComputer[];
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

// Rack Server
export interface RackServer {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  manufactur: string;
  capacity: string;
  port: string;
  case_pc: string;
  rack_sn: string;
  kvm_id: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface NetworkRackServer {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  brand_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  link_id: ReactSelect;
  manufactur: string;
  capacity: string;
  port: string;
  case_pc: string;
  rack_sn: string;
  kvm_id: string;
  power: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface NetWorkRackServerState extends NetworkRackServer {
  // List
  listVendor: any[];
  listBrand: any[];
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

export type NetworkRackServerListState = {
  rackservers: NetworkRackServer[];
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

// storage
export interface Storage {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  rack_server_id: string;
  name: string;
  manufactur: string;
  position_unit: string;
  capacity: string;
  port: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface NetworkStorage {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  brand_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  type_id: ReactSelect;
  rack_server_id: ReactSelect;
  name: string;
  manufactur: string;
  position_unit: string;
  capacity: string;
  port: string;
  power: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface NetWorkStorageState extends NetworkStorage {
  // List
  listVendor: any[];
  listBrand: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
  listLink: any[];
  listType: any[];
  listRackServer: any[];

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

export type NetworkStorageListState = {
  storages: NetworkStorage[];
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

export interface OtherSCNetwork {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  rack_server_id: string;
  name: string;
  manufactur: string;
  position_unit: string;
  capacity_port: string;
  port: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface NetworkOtherSc {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  brand_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  link_id: ReactSelect;
  rack_server_id: ReactSelect;
  name: string;
  manufactur: string;
  position_unit: string;
  capacity_port: string;
  port: string;
  power: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface NetWorkOtherScState extends NetworkOtherSc {
  // List
  listVendor: any[];
  listBrand: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
  listLink: any[];
  listType: any[];
  listRackServer: any[];

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

export type NetworkOtherScListState = {
  oscs: NetworkOtherSc[];
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

export type NetworkBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostNetworkBand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type NetworkBrandListState = {
  brands: NetworkBrand[];
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

export type NetworkVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type NetworkVendorListState = {
  vendors: NetworkVendor[];
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

export type PostNetworkVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};

// type
export type NetworkType = {
  id: string;
  name: string;
  sub_category_id: string;
  created_at: string;
  user_name: string;
};

export type NetworkTypeListState = {
  types: NetworkType[];
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

export type PostNetworkType = {
  name: string;
  sub_category_id: ReactSelect;
  isLoading: boolean;
  isError: string | null;
  list_sub_category: any[];
};

// Maintenance
export type NetworkMaintenance = {
  id: string;
  activity: string;
  document_name: string;
  maintenance_date: string;
  user_name: string;
};

export type NetworkMaintenanceListState = {
  maintenances: NetworkMaintenance[];
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

export type PostNetworkMaintenance = {
  activity: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};

// link
export type NetworkLink = {
  id: string;
  incoming: string;
  outgoing: string;
  created_at: string;
  user_name: string;
};

export type NetworkLinkListState = {
  links: NetworkType[];
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

export type PostNetworkLink = {
  incoming: ReactSelect;
  outgoing: ReactSelect[];
  list_network: any[];
  isLoading: boolean;
  isError: string | null;
};
