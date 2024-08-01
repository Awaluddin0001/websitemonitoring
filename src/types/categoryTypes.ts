import { ReactSelect } from "@/types/basicTypes";

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
