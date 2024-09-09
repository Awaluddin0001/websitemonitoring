import {
  apiClientDapot as apiClient,
  exportClientDapot,
} from "@/utils/apiClient";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getPumps = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/all", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const getPumpsLink = async () => {
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/all?nopage=yes");
    return response.data;
  } catch (error) {
    console.error("Error fetching Link floors:", error);
    throw error;
  }
};

export const getBrandPump = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/brands", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getOneBrandPump = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/brand", {
      params: {
        id,
      },
    });
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postBrandPump = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/pump/brand", {
      name: name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const updateBrandPump = async (
  name: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put("/api/v1/dapot/pump/brand?id=" + id, {
      name: name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deletePump = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/pump/brand?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorPump = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/vendors", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getOneVendorPump = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/vendor", {
      params: {
        id,
      },
    });
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postVendorPump = async (
  company: string,
  company_user_name: string,
  number_phone: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/pump/vendor", {
      company,
      company_user_name,
      number_phone,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteVendorPump = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/pump/vendor?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateVendorPump = async (
  company: string,
  company_user_name: string,
  number_phone: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put("/api/v1/dapot/pump/vendor?id=" + id, {
      company,
      company_user_name,
      number_phone,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

// type
export const getTypePump = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/types", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getOneTypePump = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/type", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postTypePump = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/pump/type", {
      name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateTypePump = async (
  name: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put("/api/v1/dapot/pump/type?id=" + id, {
      name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteTypePump = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/pump/type?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getSubCategoriesPump = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/pump/subcategories?nopage=yes"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};

export const getMaintenancePump = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/maintenances", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getOneMaintenancePump = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/maintenance", {
      params: {
        id,
      },
    });
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postMaintenancePump = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("activity"));
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/pump/maintenance",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const updateMaintenancePump = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("id"));
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/pump/maintenance?id=" + data.get("id"),
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteMaintenancePump = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/pump/maintenance?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkPump = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/links", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getPumpdevices = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/pump/pumps", {
      params: {
        page,
        limit: 15,
        globalFilter,
        nopage,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const exportPumpdeviceCsv = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/api/v1/dapot/pump/pump-export-csv",
      {
        params: {
          page,
          limit: 15,
          globalFilter,
          nopage,
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const exportPumpdeviceXlsx = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/api/v1/dapot/pump/pump-export-xlsx",
      {
        params: {
          page,
          limit: 15,
          globalFilter,
          nopage,
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const getPumpdevice = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(`/api/v1/dapot/pump/pump?id=${id}`);
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const postNewPumpdevice = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post("/api/v1/dapot/pump/pump", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updatePumpdevice = async (
  data: any,
  dispatch: (dispatch: any) => void,
  deviceid: string,
  assetid: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      `/api/v1/dapot/pump/pump?id=${deviceid}&assetid=${assetid}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deletePumpdevice = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/pump/pump?id=${deviceid}&assetid=${asset_id}&user_id=${user_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
