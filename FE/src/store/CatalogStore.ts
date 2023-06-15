import { makeAutoObservable, defineProperty } from "mobx";
import AppStore from "./AppStore";
import CategoryModel from "../models/CategoryModel";
import HomeService from "../api/services/HomeService";
import CatalogService from "../api/services/CatalogService";
import AppListModel from "../models/AppListModel";
import PlatformModel from "../models/PlatformModel";
import PriceModel from "../models/PriceModel";
import LanguageModel from "../models/LanguageModel";
import IAppListParamsModel from "../models/AppListParamsModel";

class CatalogStore {
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  appStore: AppStore;

  params: IAppListParamsModel = {
    appTypeIds: null,
    releaseDate: null,
    companyName: null,
    rating: null,
    priceIds: null,
    genreIds: null,
    platformIds: null,
    languageIds: null,
    categoryIds: null,
    title: null,
  };

  setParams = (params: IAppListParamsModel) => {
    this.params = params;
  };

  changeParams = (param: keyof IAppListParamsModel, value: unknown) => {
    defineProperty(this.params, param, { value, configurable: true });
  };

  categoryCards: CategoryModel[] = [];

  setCategoryCards = (categoryCards: CategoryModel[]) => {
    this.categoryCards = categoryCards;
  };

  getCategoryCards = () => {
    HomeService.GetCategories()
      .then((e) => this.setCategoryCards(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  smallCards: AppListModel[] = [];

  setSmallCards = (smallCards: AppListModel[]) => {
    this.smallCards = smallCards;
  };

  getSmallCards = () => {
    CatalogService.GetAppList(this.params)
      .then((e) => this.setSmallCards(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  platforms: PlatformModel[] = [];

  setPlatforms = (platforms: PlatformModel[]) => {
    this.platforms = platforms;
  };

  getPlatforms = () => {
    CatalogService.GetPlatforms()
      .then((e) => this.setPlatforms(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  prices: PriceModel[] = [];

  setPrices = (prices: PriceModel[]) => {
    this.prices = prices;
  };

  getPrices = () => {
    CatalogService.GetPrices()
      .then((e) => this.setPrices(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };

  languages: LanguageModel[] = [];

  setLanguages = (languages: LanguageModel[]) => {
    this.languages = languages;
  };

  getLanguages = () => {
    CatalogService.GetLanguages()
      .then((e) => this.setLanguages(e))
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error(err)
      );
  };
}

export default CatalogStore;
