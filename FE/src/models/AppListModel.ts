export default interface IAppListModel {
  id: number;
  appType?: number /* не точно */;
  title: string;
  description: string;
  status: string /* не точно */;
  releaseDate: Date;
  companyName: string;
  rating: string;
  price: number;
  icon: string;
  picture: string;
  platformsName?: string[];
  genresName?: string[];
  languagesName?: string[];
  categoriesName?: string[];
}
