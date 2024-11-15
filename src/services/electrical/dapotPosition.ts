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
    const response = await apiClient.get("/position/floors?nopage=yes");
    console.log("floor", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand floors:", error);
    throw error;
  }
};
export const getRooms = async () => {
  try {
    const response = await apiClient.get("/position/rooms?nopage=yes");
    console.log("rooms", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching brand rooms:", error);
    throw error;
  }
};
