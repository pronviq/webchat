import { ITokenResponse } from "@/models/authModel";
import store from "@/redux/store";
import { initialState, setUser } from "@/redux/userSlice";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASEURL = process.env.SERVER_BASEURL;

const $api: AxiosInstance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

const responseErrorHandling = async (err: any) => {
  const originalRequest = err.config;

  if (err.response?.status === 401 && err.config && !err.config._isRetry) {
    try {
      originalRequest._isRetry = true;

      const { data } = await axios.post<ITokenResponse>(BASEURL + "/refresh", {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.accessToken);

      return $api.request(originalRequest);
    } catch (err) {
      console.log(err);
      store.dispatch(setUser(initialState));
    }
  }

  if (err.config._isRetry && err.response.status === 401) {
    store.dispatch(setUser(initialState));
  }

  throw err;
};

const requestConfigHandling = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

$api.interceptors.request.use(requestConfigHandling);
$api.interceptors.response.use((r) => r, responseErrorHandling);

export default $api;
