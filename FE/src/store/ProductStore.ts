import { makeAutoObservable } from "mobx";
import IAppModel from "../models/AppModel";
import ProductService from "../api/services/ProductService";
import AppStore from "./AppStore";
import ICommentModel from "../models/CommentModel";

class ProductStore {
  constructor(appStore: AppStore) {
    makeAutoObservable(this);

    this.appStore = appStore;
  }

  appStore: AppStore;

  comments: ICommentModel[] = [];

  setComments = (comments: ICommentModel[]) => {
    this.comments = comments;
  };

  getComments = (
    userId?: number,
    appId?: number,
    rating?: number,
    orderBy?: number
  ) => {
    ProductService.getComments(userId, appId, rating, orderBy)
      .then((e) => this.setComments(e))
      .catch((e) => console.error("getComments", e));
  };

  product: IAppModel | null = null;

  setProduct = (product: IAppModel | null) => {
    this.product = product;
  };

  getProduct = (productId: number) => {
    ProductService.getProduct(productId)
      .then((e) => this.setProduct(e))
      // eslint-disable-next-line no-console
      .catch((e) => console.error("getProduct", e));
  };
}

export default ProductStore;
