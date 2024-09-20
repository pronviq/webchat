import $api from "@/api/AxiosApi";
import { IAuthResponse } from "@/models/authModel";
import Handling from "@/utils/Handling";

class MessageService {
  public static async ping(): Promise<IAuthResponse> {
    try {
      const { data } = await $api.get("/messages/ping");
      return { status: 200, data };
    } catch (error) {
      return Handling.handleError(error);
    }
  }
}

export default MessageService;
