import CardModel from "../../models/CardModel";
import CategoryModel from "../../models/CategoryModel";
import GenreModel from "../../models/GenreModel";
import api from "../api";

export default class HomeService {
  static GetGenres() {
    const result = api
      .get<GenreModel[]>("/AppStore/GetGenresAsync")
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("genres", result);
    return result;
  }

  static GetCategories() {
    const result = api
      .get<CategoryModel[]>("/AppStore/GetCategoriesAsync")
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("categories", result);
    return result;
  }

  static GetCardInformation(cardTag: number) {
    const result = api
      .get<CardModel[]>(`/AppStore/GetCardInformationAsync?cardTag=${cardTag}`)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("cardsHome", result);
    return result;
  }
}
