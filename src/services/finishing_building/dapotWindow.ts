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

export const getWindows = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/windows", {
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
export const exportWindowsCsv = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/api/v1/dapot/electrical/window-export-csv",
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
export const exportWindowsXlsx = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/api/v1/dapot/electrical/window-export-xlsx",
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

export const postNewWindow = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/electrical/window",
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

export const getWindow = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(
        `/api/v1/dapot/electrical/window?id=${id}`
      );
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const updateWindow = async (
  data: any,
  dispatch: (dispatch: any) => void,
  deviceid: string,
  assetid: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      `/api/v1/dapot/electrical/window?id=${deviceid}&assetid=${assetid}`,
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

export const deleteWindow = async (
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
      `/api/v1/dapot/electrical/window?id=${deviceid}&assetid=${asset_id}&user_id=${user_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
