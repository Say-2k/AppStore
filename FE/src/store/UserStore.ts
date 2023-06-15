import { makeAutoObservable } from "mobx";
import UserService from "../api/services/UserService";
import AppStore from "./AppStore";
import IUserModel from "../models/UserModel";

class UserStore {
  constructor(appStore: AppStore) {
    makeAutoObservable(this);

    this.appStore = appStore;
  }

  appStore: AppStore;

  user: IUserModel | null = null;

  setUser = (user: IUserModel | null) => {
    this.user = user;
  };

  getUser = (userId: number) => {
    UserService.getUser(userId)
      .then((e) => this.setUser(e))
      // eslint-disable-next-line no-console
      .catch((e) => console.error("getUser", e));
  };
}

export default UserStore;
