import { IAuthResponse } from "@/models/authModel";

class Handling {
  public static handleError(error: any): IAuthResponse {
    if (error.response?.data) {
      const data: IAuthResponse = error.response.data;
      return data;
    } else {
      return { data: error.message || "Unknown error", status: error.status || 500 };
    }
  }
}

export default Handling;
