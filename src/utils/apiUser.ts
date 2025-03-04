import axios from "axios";

export const apiUser = axios.create({
  baseURL: import.meta.env.VITE_API_USER,
  headers: {
    "Content-Type": "application/json",
  },
});
