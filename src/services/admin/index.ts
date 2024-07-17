import { AxiosInstance } from "axios";
import { apiClient } from "../apiClient";

export interface IParamsTable {
  page: number;
  filter: string;
  limit: number;
}

export const movementsAdmin = async (
  data: IParamsTable,
  client?: AxiosInstance
) => {
  client = client || apiClient;
  const response = await client.get("/admin/movements", {
    params: data,
  });
  return response.data;
};
export const movementsFileAdmin = async (
  data: IParamsTable,
  client?: AxiosInstance
) => {
  client = client || apiClient;
  const response = await client.get("/admin/movements-file/xlsx", {
    params: data,
    responseType: "arraybuffer",
  });
  return response;
};
export const usersAdmin = async (
  data: IParamsTable,
  client?: AxiosInstance
) => {
  client = client || apiClient;
  const response = await client.get("/admin/users", {
    params: data,
  });
  return response.data;
};
export const usersFileAdmin = async (
  data: IParamsTable,
  client?: AxiosInstance
) => {
  client = client || apiClient;
  const response = await client.get("/admin/users-file/xlsx", {
    params: data,
    responseType: "arraybuffer",
  });
  return response;
};
export interface IParamsDataGlobal {
  startDate: string;
  endDate: string;
}
export interface IResponseDataGlobal {
  amountBitcoin: number;
  amountDolar: number;
  totalBuys: number;
  totalSells: number;
  totalTransactions: number;
  usersRegistered: number;
}
export const dataGlobalAdmin = async (
  data: IParamsDataGlobal,
  client?: AxiosInstance
): Promise<IResponseDataGlobal> => {
  client = client || apiClient;
  const response = await client.get("/admin/global-data", {
    params: data,
  });
  return response.data;
};
export interface IParamsChnageStatusUser {
  id: string;
}
export const changeStatusUser = async (
  data: IParamsChnageStatusUser,
  client?: AxiosInstance
) => {
  client = client || apiClient;
  const response = await client.post(
    `/admin/user/${data.id}/change-status`
  );
  return response.data;
};
