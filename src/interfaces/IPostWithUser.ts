import { IPost } from "./IPost";
import { IUser } from "./IUser";


export interface IPostWithUser {
  user: IUser;
  post: IPost
}
