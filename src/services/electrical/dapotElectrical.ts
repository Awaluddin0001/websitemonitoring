import { apiClientDapot as apiClient } from "@/utils/apiClient";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getElectricals = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/all", {
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
export const getElectricalsLink = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/all?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Link floors:", error);
    throw error;
  }
};

export const getBrandElectrical = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/brands", {
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

export const getOneBrandElectrical = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/brand", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postBrandElectrical = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/electrical/brand", {
      name: name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const updateBrandElectrical = async (
  name: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/electrical/brand?id=" + id,
      {
        name: name,
        user_id,
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteElectrical = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/electrical/brand?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorElectrical = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/vendors", {
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

export const getOneVendorElectrical = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/vendor", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postVendorElectrical = async (
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
    const response = await apiClient.post("/api/v1/dapot/electrical/vendor", {
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

export const deleteVendorElectrical = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/electrical/vendor?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateVendorElectrical = async (
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
    const response = await apiClient.put(
      "/api/v1/dapot/electrical/vendor?id=" + id,
      {
        company,
        company_user_name,
        number_phone,
        user_id,
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

// type
export const getTypeElectrical = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/types", {
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

export const getOneTypeElectrical = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/type", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postTypeElectrical = async (
  name: string,
  sub_category_id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/electrical/type", {
      name,
      sub_category_id,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateTypeElectrical = async (
  name: string,
  sub_category_id: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/electrical/type?id=" + id,
      {
        name,
        sub_category_id,
        user_id,
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteTypeElectrical = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/electrical/type?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getSubCategoriesElectrical = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/subcategories?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};

export const getMaintenanceElectrical = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/maintenances",
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

export const getOneMaintenanceElectrical = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/maintenance",
      {
        params: {
          id,
        },
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postMaintenanceElectrical = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/electrical/maintenance",
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
export const updateMaintenanceElectrical = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/electrical/maintenance?id=" + data.get("id"),
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

export const deleteMaintenanceElectrical = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/electrical/maintenance?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkElectrical = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/links", {
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

export const postLinkElectrical = async (
  incoming: string,
  outgoing: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/electrical/link", {
      incoming,
      outgoing,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateLinkElectrical = async (
  incoming: string,
  outgoing: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/electrical/link?id=" + id,
      {
        incoming,
        outgoing,
        user_id,
      }
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteLinkElectrical = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/electrical/link?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
