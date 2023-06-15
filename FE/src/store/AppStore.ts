import { makeAutoObservable } from "mobx";
import AppService from "../api/services/AppService";
import ILoginModel from "../models/LoginModel";
import IRegisterModel from "../models/RegisterModel";
import IUserModel from "../models/UserModel";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  isAuth = false;

  setIsAuth = (isAuth: boolean) => {
    this.isAuth = isAuth;
  };

  logout = (): void => {
    this.setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    // AppService.Logout();
  };

  login = async (usernameOrEmail: string, password: string) => {
    const loginModel: ILoginModel = {
      usernameOrEmail,
      password,
    };

    const result = await AppService.Login(loginModel);

    if (result) {
      console.log("user1", result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("userId", result.user?.id.toString());
      this.setIsAuth(true);
      this.setUser(result.user);
      console.log("user2", result);
    }
    return this.isAuth;
  };

  isRegister = false;

  setIsRegister = (isRegister: boolean) => {
    this.isRegister = isRegister;
  };

  register = async (username: string, email: string, password: string) => {
    const registerModel: IRegisterModel = {
      username,
      email,
      password,
    };

    const result = await AppService.Register(registerModel);

    this.setIsRegister(result);
  };

  static format = (date: Date) => {
    const formatter = Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatter.format(date);
  };

  user: IUserModel | null = null;

  setUser = (user: IUserModel | null) => {
    this.user = user;
  };

  getUser = (userId: number) => {
    AppService.getUser(userId)
      .then((e) => this.setUser(e))
      // eslint-disable-next-line no-console
      .catch((e) => console.error("getUser", e));
  };

  static queryString = (...params: string[]) =>
    params.filter((e) => e !== "").join("&");
}

export default AppStore;
