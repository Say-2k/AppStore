import IAppModel from "../../models/AppModel";
import ICommentModel from "../../models/CommentModel";
import api from "../api";

export default class ProductService {
  static getProduct(productId: number) {
    const result = api
      .get<IAppModel>(`/AppStore/GetAppAsync?appId=${productId}`)
      .then((res) => res.data);

    return result;
  }

  static getComments(
    userId?: number,
    appId?: number,
    rating?: number,
    orderBy?: number
  ) {
    const reult = api
      .get<ICommentModel[]>(
        `/AppStore/GetCommentsAsync?userId=${userId ?? ""}&appId=${
          appId ?? ""
        }&rating=${rating ?? ""}&orderBy=${orderBy ?? ""}`
      )
      .then((res) => res.data);

    return reult;
  }
}
