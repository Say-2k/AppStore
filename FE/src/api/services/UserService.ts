import IUserModel from "../../models/UserModel";
import api from "../api";

export default class ProductService {
  static getUser(userId: number) {
    const result = api
      .get<IUserModel>(`/AppStore/GetUserInformationAsync?userId=${userId}`)
      .then((res) => res.data);

    return result;
  }
}
