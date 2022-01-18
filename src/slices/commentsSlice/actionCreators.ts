import axios from "axios";
import { AppDispatch } from "../../app/store";
import { IComment } from "../../interfaces/IComment";
import { commentsSlice } from "./commentsSlice";


export const fetchComments = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(commentsSlice.actions.commentsFetching())
    const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    dispatch(commentsSlice.actions.commentsFetchingSucces(response.data))
  } catch (e) {
    dispatch(commentsSlice.actions.commentsFetchingError((e as Error).message))
  }
}
