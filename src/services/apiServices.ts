// src/services/apiService.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRectifiers = async () => {
  try {
    const response = await apiClient.get("/rectifiers");
    return response.data;
  } catch (error) {
    console.error("Error fetching rectifiers:", error);
    throw error;
  }
};
