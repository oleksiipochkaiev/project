import axios from "axios";
import { userInfo } from "os";
import { AppDispatch } from "../../app/store";
import { IPost } from "../../interfaces/IPost";
import { IPostWithUser } from "../../interfaces/IPostWithUser";
import { IUser } from "../../interfaces/IUser";
import { postSlice } from "./postSlice";


export const fetchPost = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postSlice.actions.postFetching())
    const post = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const user = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${post.data.userId}`)
    const postWithUser: IPostWithUser = {
      post: post.data,
      user: user.data,
    };

    dispatch(postSlice.actions.postFetchingSucces(postWithUser))
  } catch (e) {
    dispatch(postSlice.actions.postFetchingError((e as Error).message))
  }
}
