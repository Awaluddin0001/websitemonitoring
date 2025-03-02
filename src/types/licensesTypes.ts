export interface License {
  id: string;
  name_file: string;
  created_at: string;
  expired_at: string;
  user_id: string;
  user_name: string;
}

export type LicenseAllListState = {
  licenses: License[];
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
export interface LicenseState {
  id: string;
  name_file: string;
  expired_at: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

export interface DetailLicenseState extends LicenseState {
  //   FOR COMPONENT
  isLoading: boolean;
  isError: string | null;

  //   FOR FILE
  selectedFiles: {
    file1: File | null;
  };
  errorMessagesFiles: {
    file1: null;
  };
}

// Maintenance
export type LicenseMaintenance = {
  id: string;
  name_file: string;
  created_at: string;
  expired_at: string;
  user_id: string;
  user_name: string;
};

export type LicenseMaintenanceListState = {
  licenses: LicenseMaintenance[];
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

export type PostLicenseMaintenance = {
  activity: string;
  expired_at: string;
  isLoading: boolean;
  isError: string | null;
  errorMessagesFiles: string | null;

  selectedFiles: {
    file1: File | null;
  };
};
