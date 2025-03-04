import { apiUser as apiClient } from "@/utils/apiUser";
import {
  handleError,
  handleResponse,
  setLoadingAndError,
} from "@/utils/LoadingAndErrorApi";

export const getUsers = async (
  page: string | null,
  dispatch: (dispatch: any) => void,
  globalFilter: string,
  nopage?: string | null
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.get("/users", {
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
export const getUser = async (
  id: string | null,
  dispatch: (dispatch: any) => void
) => {
  if (id) {
    setLoadingAndError(dispatch);
    try {
      const response = await apiClient.get(`/user/user?id=${id}`);
      return handleResponse(response, dispatch);
    } catch (error) {
      handleError(error, dispatch);
    }
  }
};

export const postNewUser = async (
  data: any,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.post("/user/user", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const updateUser = async (
  data: any,
  dispatch: (dispatch: any) => void,
  deviceid: string,
  assetid: string
) => {
  setLoadingAndError(dispatch);
  try {
    const response = await apiClient.put(
      `/user/user?id=${deviceid}&assetid=${assetid}`,
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

export const updatePassword = async (
  password: string,
  id: string,
  dispatch: (dispatch: any) => void
) => {
  setLoadingAndError(dispatch);
  // const userData: any = localStorage.getItem("user");
  // const jsonuserData = JSON.parse(userData);
  // const user_id = jsonuserData.id;
  try {
    const response = await apiClient.put("/change/password", {
      password: password,
      id: id,
    });
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};

export const deleteUser = async (
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
      `/user/user?id=${deviceid}&assetid=${asset_id}&user_id=${user_id}`
    );
    return handleResponse(response, dispatch);
  } catch (error) {
    handleError(error, dispatch);
  }
};
