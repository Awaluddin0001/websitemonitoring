import { apiClientDapot as apiClient } from "@/utils/apiClient";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getFinishingbuildings = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/all",
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
export const getFinishingbuildingsLink = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/all?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Link floors:", error);
    throw error;
  }
};

export const getBrandFinishingbuilding = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/brands",
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

export const getOneBrandFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/brand",
      {
        params: {
          id,
        },
      }
    );
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postBrandFinishingbuilding = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/finishingbuilding/brand",
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
export const updateBrandFinishingbuilding = async (
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
      "/api/v1/dapot/finishingbuilding/brand?id=" + id,
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

export const deleteFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/finishingbuilding/brand?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorFinishingbuilding = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/vendors",
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

export const getOneVendorFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/vendor",
      {
        params: {
          id,
        },
      }
    );
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postVendorFinishingbuilding = async (
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
    const response = await apiClient.post(
      "/api/v1/dapot/finishingbuilding/vendor",
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

export const deleteVendorFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/finishingbuilding/vendor?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateVendorFinishingbuilding = async (
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
      "/api/v1/dapot/finishingbuilding/vendor?id=" + id,
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
export const getTypeFinishingbuilding = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/types",
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

export const getOneTypeFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/type",
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

export const postTypeFinishingbuilding = async (
  name: string,
  sub_category_id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/finishingbuilding/type",
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

export const updateTypeFinishingbuilding = async (
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
      "/api/v1/dapot/finishingbuilding/type?id=" + id,
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

export const deleteTypeFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/finishingbuilding/type?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getSubCategoriesFinishingbuilding = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/subcategories?nopage=yes"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};

export const getMaintenanceFinishingbuilding = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/maintenances",
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

export const getOneMaintenanceFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/maintenance",
      {
        params: {
          id,
        },
      }
    );
    console.log(response);
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postMaintenanceFinishingbuilding = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("activity"));
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/finishingbuilding/maintenance",
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
export const updateMaintenanceFinishingbuilding = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("id"));
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/finishingbuilding/maintenance?id=" + data.get("id"),
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

export const deleteMaintenanceFinishingbuilding = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/finishingbuilding/maintenance?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkFinishingbuilding = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/finishingbuilding/links",
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

export const postLinkFinishingbuilding = async (
  incoming: string,
  outgoing: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/finishingbuilding/link",
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
