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
  networks: {
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
