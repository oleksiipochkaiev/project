import axios from 'axios';
import { AppDispatch } from '../../app/store';
import { IPost } from '../../interfaces/IPost';
import { postSlice } from './postSlice';

const fetchPost = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postSlice.actions.postFetching());
    const post = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);

    dispatch(postSlice.actions.postFetchingSucces(post.data));
  } catch (e) {
    dispatch(postSlice.actions.postFetchingError((e as Error).message));
  }
};

export default fetchPost;
