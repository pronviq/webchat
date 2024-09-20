export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IRegisterPayload {
  username: string;
  password: string;
  age: number;
}

export interface IAuthResponse {
  status: number;
  data: any;
  username?: string;
}

export interface ITokenResponse {
  accessToken: string;
  username?: string;
}
