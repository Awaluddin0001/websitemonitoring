export interface Safety {
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
  status: string;
  name: string;
  condition_asset: string;
  amount: number;
  notes: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export type SafetyAllListState = {
  safetys: Safety[];
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

export type SafetyBrand = {
  id: string;
  name: string;
  created_at: string;
  user_name: string;
};

export type PostSafetyBrand = {
  name: string;
  isLoading: boolean;
  isError: string | null;
};

export type SafetyBrandListState = {
  brands: SafetyBrand[];
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
