// src/services/apiService.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPanels = async () => {
  try {
    const response = await apiClient.get("/api/v1/dapot/electrical/panels");
    return response.data;
  } catch (error) {
    console.error("Error fetching panels:", error);
    throw error;
  }
};
