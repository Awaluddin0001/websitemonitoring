import { apiClientDapot as apiClient } from "@/utils/apiClient";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getLightings = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/all", {
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
export const getLightingsLink = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/lighting/all?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Link floors:", error);
    throw error;
  }
};

export const getBrandLighting = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/brands", {
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

export const getOneBrandLighting = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/brand", {
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

export const postBrandLighting = async (
  name: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/lighting/brand", {
      name: name,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
export const updateBrandLighting = async (
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
      "/api/v1/dapot/lighting/brand?id=" + id,
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

export const deleteLighting = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/lighting/brand?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorLighting = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/vendors", {
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

export const getOneVendorLighting = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/vendor", {
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

export const postVendorLighting = async (
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
    const response = await apiClient.post("/api/v1/dapot/lighting/vendor", {
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

export const deleteVendorLighting = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/lighting/vendor?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateVendorLighting = async (
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
      "/api/v1/dapot/lighting/vendor?id=" + id,
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
export const getTypeLighting = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/types", {
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

export const getOneTypeLighting = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/type", {
      params: {
        id,
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postTypeLighting = async (
  name: string,
  sub_category_id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/lighting/type", {
      name,
      sub_category_id,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateTypeLighting = async (
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
      "/api/v1/dapot/lighting/type?id=" + id,
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

export const deleteTypeLighting = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/lighting/type?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getSubCategoriesLighting = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/lighting/subcategories?nopage=yes"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};

export const getMaintenanceLighting = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/lighting/maintenances",
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

export const getOneMaintenanceLighting = async (
  dispatch: (dispatch: any) => void,
  id?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/maintenance", {
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

export const postMaintenanceLighting = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("activity"));
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/lighting/maintenance",
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
export const updateMaintenanceLighting = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  console.log(data.get("id"));
  try {
    const response = await apiClient.put(
      "/api/v1/dapot/lighting/maintenance?id=" + data.get("id"),
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

export const deleteMaintenanceLighting = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.delete(
      `/api/v1/dapot/lighting/maintenance?id=${deviceid}&assetid=${asset_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkLighting = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter?: string | null,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/lighting/links", {
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

export const postLinkLighting = async (
  incoming: string,
  outgoing: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  const userData: any = localStorage.getItem("user");
  const jsonuserData = JSON.parse(userData);
  const user_id = jsonuserData.id;
  try {
    const response = await apiClient.post("/api/v1/dapot/lighting/link", {
      incoming,
      outgoing,
      user_id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};