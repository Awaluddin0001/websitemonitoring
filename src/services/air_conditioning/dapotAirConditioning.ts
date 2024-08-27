import { apiClientDapot as apiClient } from "@/utils/apiClient";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getAirconditionings = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/airconditioning/all", {
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
export const getAirconditioningsLink = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/all?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Link floors:", error);
    throw error;
  }
};

export const getBrandAirconditioning = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/brands",
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

export const getOneBrandAirconditioning = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/brand",
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

export const postBrandAirconditioning = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/airconditioning/brand",
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
export const updateBrandAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/brand?id=" + id,
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

export const deleteAirconditioning = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/airconditioning/brand?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorAirconditioning = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/vendors",
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

export const getOneVendorAirconditioning = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/vendor",
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

export const postVendorAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/vendor",
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

export const deleteVendorAirconditioning = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/airconditioning/vendor?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateVendorAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/vendor?id=" + id,
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
export const getTypeAirconditioning = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/types",
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

export const getOneTypeAirconditioning = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/airconditioning/type", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postTypeAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/type",
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

export const updateTypeAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/type?id=" + id,
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

export const deleteTypeAirconditioning = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/airconditioning/type?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getSubCategoriesAirconditioning = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/subcategories?nopage=yes"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};

export const getMaintenanceAirconditioning = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/maintenances",
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

export const getOneMaintenanceAirconditioning = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/maintenance",
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

export const postMaintenanceAirconditioning = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("activity"));
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/airconditioning/maintenance",
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
export const updateMaintenanceAirconditioning = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("id"));
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/airconditioning/maintenance?id=" + data.get("id"),
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

export const deleteMaintenanceAirconditioning = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/airconditioning/maintenance?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkAirconditioning = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/airconditioning/links",
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

export const postLinkAirconditioning = async (
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
      "/api/v1/dapot/airconditioning/link",
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
