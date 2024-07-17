import { AppInterceptors } from "@/interceptors";
import axios from "axios";

// Get the environment variables
const baseURL = import.meta.env.VITE_URL_BACK_API_BASE;
export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_APP_API_KEY,
  },
});

apiClient.interceptors.request.use(AppInterceptors.req, AppInterceptors.reqErr);

apiClient.interceptors.response.use(
  AppInterceptors.res,
  AppInterceptors.resErr
);
