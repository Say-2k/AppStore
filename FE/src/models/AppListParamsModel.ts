export default interface IAppListParamsModel {
  appTypeIds: number[] | null;
  releaseDate: Date | null;
  companyName: string | null;
  rating: string | null;
  priceIds: number[] | null;
  genreIds: number[] | null;
  platformIds: number[] | null;
  languageIds: number[] | null;
  categoryIds: number[] | null;
  title: string | null;
}
