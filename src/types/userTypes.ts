export interface user {
  id: string;
  name: string;
  role: string;
  role_name: string;
  user_name: string;
  status: string;
  phone_number: string;
}

export type userAllList = {
  user: user[];
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
export interface userState extends user {
  // List
  listRole: any[];

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

export type Postuser = {
  id: string;
  name: string;
  role: string;
  role_name: string;
  user_name: string;
  phone_number: string;
  status: string;
  password: string;
  isLoading: boolean;
  isError: string | null;
};
