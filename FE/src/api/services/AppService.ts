import ILoginModel from "../../models/LoginModel";
import IRegisterModel from "../../models/RegisterModel";
import IUserModel from "../../models/UserModel";
import api from "../api";

export default class AppService {
  static Logout() {
    const result = true;
    return result;
  }

  static Login(loginModel: ILoginModel) {
    const result = api
      .post<{ token: string; user: IUserModel }>("/Auth/login", loginModel)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("loginResult", result);
    return result;
  }

  static Register(registerModel: IRegisterModel) {
    const result = api
      .post<boolean>("/Auth/register", registerModel)
      .then((res) => res.data);

    return result;
  }

  static getUser(userId: number) {
    const result = api
      .get<IUserModel>(`/AppStore/GetUserInformationAsync?userId=${userId}`)
      .then((res) => res.data);

    return result;
  }
}
