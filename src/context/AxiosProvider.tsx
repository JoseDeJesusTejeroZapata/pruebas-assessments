// import { AppInterceptors } from '@/interceptors';
// import { useAppSelector } from '@/redux/hooks';
// import { selectToken } from '@/redux/slices/auth.slice';

// import Axios, { AxiosInstance } from 'axios';
// import { createContext, useMemo } from 'react';
// // import { AppInterceptors } from "@/services/interceptors";

// export const AxiosContext = createContext<AxiosInstance>(undefined!);

// const baseURL = import.meta.env.VITE_URL_BACK_API_BASE;

// export default function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
//    const token = useAppSelector(selectToken);
//    const axios = useMemo(() => {
//       const axios = Axios.create({
//          baseURL,
//          headers: {
//             'Content-Type': 'application/json',
//             'x-api-key': import.meta.env.VITE_APP_API_KEY,
//          },
//       });

//       axios.interceptors.request.use((config) => {
//          if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//          }

//          return config;
//       });
//       axios.interceptors.response.use(AppInterceptors.res, AppInterceptors.resErr);
//       return axios;
//    }, [token]);
//    return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>;
// }
