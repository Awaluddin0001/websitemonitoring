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

export const getUpses = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/electrical/upses", {
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

export const postNewUps = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post("/electrical/ups", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getUps = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(`/electrical/ups?id=${id}`);
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const updateUps = async (
  data: any,
  dispatch: (dispatch: any) => void,
  deviceid: string,
  assetid: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      `/electrical/ups?id=${deviceid}&assetid=${assetid}`,
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

export const deleteUps = async (
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
      `/electrical/ups?id=${deviceid}&assetid=${asset_id}&user_id=${user_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const exportUpssCsv = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get("/electrical/ups-export-csv", {
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
export const exportUpssXlsx = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await exportClientDapot.get(
      "/electrical/ups-export-xlsx",
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
