import ICompanyModel from "./CompanyModel";
import IPictureModel from "./PictureModel";

export default interface IAppModel {
  id: number;
  appType: number /* не точно */;
  title: string;
  description: string;
  status: string /* не точно */;
  releaseDate: Date;
  company: ICompanyModel;
  rating: string;
  pictures: IPictureModel[];
  price: number;
  icon: string;
  platformsName: string[];
  genresName: string[];
  languagesName: string[];
}
