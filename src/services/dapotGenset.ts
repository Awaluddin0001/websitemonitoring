// src/services/apiService.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getGensets = async () => {
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/gensets");
    return response.data;
  } catch (error) {
    console.error("Error fetching rectifiers:", error);
    throw error;
  }
};
