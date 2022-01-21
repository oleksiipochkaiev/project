import axios from 'axios';
import { v4 as idGenerator } from 'uuid';
import { AppDispatch } from '../../app/store';
import { IComment } from '../../interfaces/IComment';
import { commentsSlice } from './commentsSlice';

export const fetchComments = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(commentsSlice.actions.commentsFetching());
    const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    dispatch(commentsSlice.actions.commentsFetchingSucces(response.data));
  } catch (e) {
    dispatch(commentsSlice.actions.commentsFetchingError((e as Error).message));
  }
};

export const postComment = (
  id: string,
  name: string,
  email: string,
  text: string,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(commentsSlice.actions.commentsFetching());
    const response = await axios.post<IComment>('https://jsonplaceholder.typicode.com/comments', {
      postId: id,
      name,
      email,
      body: text,
      isMine: true,
      isNew: true,
    });

    const user = {
      ...response.data,
      id: idGenerator(),
    };

    dispatch(commentsSlice.actions.commentAdd(user));
  } catch (e) {
    dispatch(commentsSlice.actions.commentsFetchingError((e as Error).message));
  }
};

export const deleteComment = (id: number) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete<IComment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
    dispatch(commentsSlice.actions.deleteComment(id));
  } catch (e) {
    dispatch(commentsSlice.actions.commentsFetchingError((e as Error).message));
  }
};
