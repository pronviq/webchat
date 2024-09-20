import $api from "@/api/AxiosApi";
import { IAuthResponse, ILoginPayload, IRegisterPayload, ITokenResponse } from "@/models/authModel";
import { initialState, setUser } from "@/redux/userSlice";
import Handling from "@/utils/Handling";
import axios, { AxiosError, AxiosResponse } from "axios";

class AuthService {
  public static async logout(): Promise<IAuthResponse> {
    try {
      await $api.post("/logout");
      localStorage.removeItem("accessToken");
      return { status: 200, data: null };
    } catch (error) {
      return Handling.handleError(error);
    }
  }

  public static async login({ username, password }: ILoginPayload): Promise<IAuthResponse> {
    try {
      const payload: ILoginPayload = {
        password,
        username,
      };
      const { data }: AxiosResponse<ITokenResponse> = await $api.post("/login", payload);

      localStorage.setItem("accessToken", data.accessToken);
      return { status: 200, data: null };
    } catch (error) {
      return Handling.handleError(error);
    }
  }

  public static async registration({
    username,
    password,
    age,
  }: IRegisterPayload): Promise<IAuthResponse> {
    try {
      const payload: IRegisterPayload = {
        password,
        username,
        age,
      };
      const { data }: AxiosResponse<ITokenResponse> = await $api.post("/registration", payload);

      localStorage.setItem("accessToken", data.accessToken);
      return { status: 200, data: null };
    } catch (error) {
      return Handling.handleError(error);
    }
  }

  public static async refresh(): Promise<IAuthResponse> {
    try {
      const { data } = await $api.post<ITokenResponse>("/refresh");

      localStorage.setItem("accessToken", data.accessToken);
      return { status: 200, data: null, username: data.username };
    } catch (error) {
      setUser(initialState);
      return Handling.handleError(error);
    }
  }
}

export default AuthService;
