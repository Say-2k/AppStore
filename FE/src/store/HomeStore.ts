import { makeAutoObservable } from "mobx";
import HomeService from "../api/services/HomeService";
import CardModel from "../models/CardModel";
import GenreModel from "../models/GenreModel";
import AppStore from "./AppStore";
import CategoryModel from "../models/CategoryModel";

class HomeStore {
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  appStore: AppStore;

  genres: GenreModel[] = [];

  setGenres = (genres: GenreModel[]) => {
    this.genres = genres;
  };

  getGenres = () => {
    HomeService.GetGenres()
      .then((e) => this.setGenres(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  categories: CategoryModel[] = [];

  setCategories = (categories: CategoryModel[]) => {
    this.categories = categories;
  };

  getCategories = () => {
    HomeService.GetCategories()
      .then((e) => this.setCategories(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  bigCards: CardModel[] = [];

  setBigCards = (bigCards: CardModel[]) => {
    this.bigCards = bigCards;
  };

  getBigCards = () => {
    HomeService.GetCardInformation(1)
      .then((e) => this.setBigCards(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  smallCards: CardModel[] = [];

  setSmallCards = (smallCards: CardModel[]) => {
    this.smallCards = smallCards;
  };

  getSmallCards = () => {
    HomeService.GetCardInformation(2)
      .then((e) => this.setSmallCards(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  squareCards: CardModel[] = [];

  setSquareCards = (squareCards: CardModel[]) => {
    this.squareCards = squareCards;
  };

  getSquareCards = () => {
    HomeService.GetCardInformation(3)
      .then((e) => this.setSquareCards(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };
}

export default HomeStore;
