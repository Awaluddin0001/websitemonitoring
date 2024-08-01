// src/services/apiService.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFloors = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/position/floors?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};
export const getRooms = async () => {
  try {
    const response = await apiClient.get(
      "/api/v1/dapot/position/rooms?nopage=yes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching brand rooms:", error);
    throw error;
  }
};
