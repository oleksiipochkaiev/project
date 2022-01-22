import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../interfaces/IPost';

interface PostState {
  post: IPost | null;
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  post: null,
  isLoading: false,
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postFetching(state) {
      state.isLoading = true;
    },

    postFetchingSucces(state, action: PayloadAction<IPost>) {
      state.isLoading = false;
      state.error = '';
      state.post = action.payload;
    },

    postFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
