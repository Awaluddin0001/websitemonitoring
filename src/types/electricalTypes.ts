import { ReactSelect } from "@/types/basicTypes";

export interface Electrical {
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

// subcategory
// rectifier
export interface Rectifier {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type_id: string;
  capacity: number;
  modul: string;
  capacity_modul: number;
  load_current: number;
  occupancy: number;
  system_device: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}
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

export interface Battery {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type_id: string;
  capacity: number;
  capacity_bank: number;
  amount: number;
  bank_amount: number;
  system_device: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

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

// cubicle
export interface Cubicle {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type_id: string;
  manufactur: string;
  serial_number: string;
  load_break: string;
  breaker_count: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalCubicle {
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
  manufactur: string;
  serial_number: string;
  load_break: string;
  breaker_count: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalCubicleState extends ElectricalCubicle {
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

export type ElectricalListCubicleState = {
  cubicles: ElectricalCubicle[];
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

// genset

export interface Genset {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type_id: string;
  manufactur: string;
  serial_number: string;
  load_current: string;
  fuel: string;
  fuel_capacity: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalGenset {
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
  manufactur: string;
  serial_number: string;
  load_current: string;
  fuel: string;
  fuel_capacity: string;
  runtime: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalGensetState extends ElectricalGenset {
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

export type ElectricalListGensetState = {
  gensets: ElectricalGenset[];
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

//  lvmdp
export interface Lvmdp {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  name: string;
  type_id: string;
  voltage_level: string;
  current_rating: string;
  breaker_type: string;
  breaker_rating: string;
  section: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalLvmdp {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  name: string;
  type_id: ReactSelect;
  voltage_level: string;
  current_rating: string;
  breaker_type: string;
  breaker_rating: string;
  section: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalLvmdpState extends ElectricalLvmdp {
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

export type ElectricalListLvmdpState = {
  lvmdps: ElectricalLvmdp[];
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

// panel
export interface Panel {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  name: string;
  type_id: string;
  capacity: string;
  function_category: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalPanel {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  name: string;
  type_id: ReactSelect;
  capacity: string;
  function_category: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalPanelState extends ElectricalPanel {
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

export type ElectricalListPanelState = {
  panels: ElectricalPanel[];
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

// trafo
export interface Trafo {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  name: string;
  type_id: string;
  manufactur: string;
  transform_ratio: string;
  serial_number: string;
  load_current: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalTrafo {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  link_id: ReactSelect;
  name: string;
  type_id: ReactSelect;
  manufactur: string;
  transform_ratio: string;
  serial_number: string;
  load_current: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalTrafoState extends ElectricalTrafo {
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

export type ElectricalListTrafoState = {
  trafos: ElectricalTrafo[];
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

// ups
export interface Ups {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  brand_id: string;
  brand_name: string;
  name: string;
  role: string;
  type_id: string;
  capacity: string;
  load_current: string;
  serial_number: string;
  occupancy: string;
  type_modular: string;
  remark_aging: string;
  warranty: string | null;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ElectricalUps {
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
  load_current: string;
  serial_number: string;
  occupancy: string;
  type_modular: string;
  warranty: string;
  remark_aging: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface ElectricalUpsState extends ElectricalUps {
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

export type ElectricalListUpsState = {
  upses: ElectricalUps[];
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

// link
export type ElectricalLink = {
  id: string;
  incoming: string;
  outgoing: string;
  created_at: string;
  user_name: string;
};

export type ElectricalLinkListState = {
  links: ElectricalType[];
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

export type PostElectricalLink = {
  incoming: ReactSelect;
  outgoing: ReactSelect[];
  list_electrical: any[];
  isLoading: boolean;
  isError: string | null;
};
