export default interface ICommentModel {
  id: number;
  userId: number;
  userName: string;
  icon: string;
  appId: number;
  commentText: string;
  date: Date;
  rating: number;
}
