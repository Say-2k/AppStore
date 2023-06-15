import IGenreModel from "./GenreModel";
import IPlatformModel from "./PlatformModel";

export default interface ICardModel {
  id: number;
  title: string;
  description: string | null;
  picture: string;
  price: number;
  subDescription: string | null;
  platforms: IPlatformModel[] | null;
  genres: IGenreModel[] | null;
}
