// src/services/dapotRectifiers
import axios from "axios";
import {
  setLoadingAndError,
  handleError,
  handleResponse,
} from "@/utils/LoadingAndErrorApi";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRectifiers = async (
  page: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (page) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(
        `/api/v1/dapot/electrical/rectifiers?page=${page}&limit=15`
      );
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};
export const getRectifier = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(
        `/api/v1/dapot/electrical/rectifier?id=${id}`
      );
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const getBrandRectifiers = async (dispatch: (dispatch: any) => void) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/rectifier/brands"
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getVendorRectifiers = async (
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/vendors");
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getMaintenanceRectifiers = async (
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/electrical/maintenances"
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const getLinkRectifiers = async (dispatch: (dispatch: any) => void) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/links");
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const postNewRectifier = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post(
      "/api/v1/dapot/electrical/rectifier",
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
