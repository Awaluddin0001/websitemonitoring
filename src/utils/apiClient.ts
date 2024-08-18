import axios from "axios";

export const apiClientDapot = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
});
export const exportClientDapot = axios.create({
  baseURL: import.meta.env.VITE_API_DAPOT,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "blob",
});
