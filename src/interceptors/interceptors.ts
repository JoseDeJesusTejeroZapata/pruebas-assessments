import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const AppInterceptors = {
  req: (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const jwt = localStorage.getItem("accessToken");

    if (jwt) config.headers.Authorization = `Bearer ${jwt}`;
    config.headers["x-api-key"] = import.meta.env.VITE_APP_API_KEY;

    return config;
  },
  reqErr: (err: AxiosError) => {
    return Promise.reject(err);
  },
  res: (res: AxiosResponse): AxiosResponse => {
    if (res.data.metadata) {
      return res;
    }

    if (res.data?.data?.data?.prices) {
      return res.data.data;
    }
    return res.data;
  },
  resErr: (err: AxiosError) => {
    if (err.response?.status === 401) {
      window.location.href = "/login";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("auth");
      console.log("Response error: ", err);
    }

    return Promise.reject(err);
  },
};
