// src/services/apiService.ts
import {
  apiClientDapot as apiClient,
  exportClientDapot,
} from "@/utils/apiClient";
import {
  setLoadingAndError,
  handleError,
  handleResponse,
} from "@/utils/LoadingAndErrorApi";

export const getCubicles = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/electrical/cubicles", {
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

export const postNewCubicle = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post("/electrical/cubicle", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getCubicle = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(`/electrical/cubicle?id=${id}`);
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const updateCubicle = async (
  data: any,
  dispatch: (dispatch: any) => void,
  deviceid: string,
  assetid: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      `/electrical/cubicle?id=${deviceid}&assetid=${assetid}`,
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

export const deleteCubicle = async (
  dispatch: (dispatch: any) => void,
  deviceid: string,
  asset_id: string
) => {
  setLoadingAndError(dispatch);
  try {
    const userData: any = localStorage.getItem("user");
    const jsonuserData = JSON.parse(userData);
    const user_id = jsonuserData.id;
    const response = await apiClient.delete(
      `/electrical/cubicle?id=${deviceid}&assetid=${asset_id}&user_id=${user_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const exportCubiclesCsv = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/electrical/cubicle-export-csv",
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
export const exportCubiclesXlsx = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/electrical/cubicle-export-xlsx",
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
