import { ReactSelect } from "@/types/basicTypes";
export interface Airconditioning {
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
  status: string;
  amount: number;
  warranty: string;
  condition_asset: string;
  notes: string;
  installation_date: string;
  maintenance_id: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export type AirconditioningAllListState = {
  airconditionings: Airconditioning[];
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

// Air Device

export interface AirDevice {
  asset_id: string;
  id: string;
  vendor_id: string;
  type_id: string;
  vendor_name: string;
  amount: number;
  warranty: string;
  name: string;
  air_flow: string;
  speed: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface AirConditioningAirDevice {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  amount: number;
  warranty: string;
  name: string;
  air_flow: string;
  speed: string;
  power: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface AirConditioningAirDeviceState
  extends AirConditioningAirDevice {
  // List
  listVendor: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
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
  document_name?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
}

export type AirConditioningAirDeviceListState = {
  airdevices: AirConditioningAirDevice[];
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

// Cooling Device

export interface CoolingDevice {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  type_id: string;
  amount: number;
  warranty: string;
  name: string;
  air_flow: string;
  speed: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface AirConditioningCoolingDevice {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  maintenance_id: ReactSelect;
  type_id: ReactSelect;
  amount: number;
  warranty: string;
  name: string;
  manufactur: string;
  indoor_sn: string;
  type_indoor: string;
  outdoor_sn: string;
  type_outdoor: string;
  power: string;
  paard_kracht: string;
  btu_hour: string;
  refrigerant: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface AirConditioningCoolingDeviceState
  extends AirConditioningCoolingDevice {
  // List
  listVendor: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];
  listMaintenance: any[];
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
  document_name?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
}

export type AirConditioningCoolingDeviceListState = {
  coolingdevices: AirConditioningCoolingDevice[];
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

// Heating Device

export interface HeatingDevice {
  asset_id: string;
  id: string;
  vendor_id: string;
  vendor_name: string;
  amount: number;
  warranty: string;
  name: string;
  air_flow: string;
  speed: string;
  power: string;
  installation_date: string;
  maintenance_id: string | null;
  maintenance_date: string | null;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface AirConditioningHeatingDevice {
  asset_id: string;
  ne_id: string;
  site_id: ReactSelect;
  floor_id: ReactSelect;
  room_id: ReactSelect;
  vendor_id: ReactSelect;
  amount: number;
  warranty: string;
  name: string;
  temperature_max: string;
  power: string;
  installation_date: string;
  condition_asset: string;
  status: string;
  notes: string;
}

export interface AirConditioningHeatingDeviceState
  extends AirConditioningHeatingDevice {
  // List
  listVendor: any[];
  listSite: any[];
  listFloors: any[];
  listRooms: any[];
  listAllRooms: any[];

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
  document_name?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
}

export type AirConditioningHeatingDeviceListState = {
  heatingdevices: AirConditioningHeatingDevice[];
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

export type AirconditioningBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostAirconditioningBand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type AirconditioningBrandListState = {
  brands: AirconditioningBrand[];
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
export type AirconditioningVendor = {
  id: string;
  company: string;
  company_user_name: string;
  number_phone: string;
  created_at: string;
  user_name: string;
};

export type AirconditioningVendorListState = {
  vendors: AirconditioningVendor[];
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

export type PostAirconditioningVendor = {
  company: string;
  company_user_name: string;
  number_phone: string;
  isLoading: boolean;
  isError: string | null;
};

// type
export type AirconditioningType = {
  id: string;
  name: string;
  sub_category_id: string;
  created_at: string;
  user_name: string;
};

export type AirconditioningTypeListState = {
  types: AirconditioningType[];
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

export type PostAirconditioningType = {
  name: string;
  sub_category_id: ReactSelect;
  isLoading: boolean;
  isError: string | null;
  list_sub_category: any[];
};

// Maintenance
export type AirconditioningMaintenance = {
  id: string;
  activity: string;
  document_name: string;
  maintenance_date: string;
  user_name: string;
};

export type AirconditioningMaintenanceListState = {
  maintenances: AirconditioningMaintenance[];
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

export type PostAirconditioningMaintenance = {
  activity: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};
