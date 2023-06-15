import AppListModel from "../../models/AppListModel";
import CardModel from "../../models/CardModel";
import LanguageModel from "../../models/LanguageModel";
import PlatformModel from "../../models/PlatformModel";
import PriceModel from "../../models/PriceModel";
import IAppListParamsModel from "../../models/AppListParamsModel";
import api from "../api";

export default class CatalogService {
  static GetCardInformation(cardTag: number) {
    const result = api
      .get<CardModel[]>(`/AppStore/GetCardInformationAsync?cardTag=${cardTag}`)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("cardsCatalog", result);
    return result;
  }

  static GetAppList(params: IAppListParamsModel) {
    // const result = api
    //   .get<AppListModel[]>(
    //     `/AppStore/GetAppListAsync?appType=${appType ?? ""}&releaseDate=${
    //       releaseDate ?? ""
    //     }&companyId=${companyId ?? ""}&rating=${rating ?? ""}&priceId=${
    //       priceId ?? ""
    //     }&genreId=${genreId ?? ""}&platformId=${platformId ?? ""}&languageId=${
    //       languageId ?? ""
    //     }&categoryId=${categoryId ?? ""}&title=${title ?? ""}`
    //   )
    //   .then((res) => res.data);
    const result = api
      .post<AppListModel[]>(`/AppStore/GetAppListAsync`, params)
      .then((res) => res.data);

    return result;
  }

  static GetPlatforms() {
    const result = api
      .get<PlatformModel[]>(`/AppStore/GetPlatformsAsync`)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("platformsList", result);
    return result;
  }

  static GetLanguages() {
    const result = api
      .get<LanguageModel[]>(`/AppStore/GetLanguagesAsync`)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("languagesList", result);
    return result;
  }

  static GetPrices() {
    const result = api
      .get<PriceModel[]>(`/AppStore/GetPricesAsync`)
      .then((res) => res.data);
    // eslint-disable-next-line no-console
    console.log("pricesList", result);
    return result;
  }
}
