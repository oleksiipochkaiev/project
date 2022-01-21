import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from '../../interfaces/IComment';

interface PostState {
  comments: IComment[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  comments: [],
  isLoading: false,
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsFetching(state) {
      state.isLoading = true;
    },

    commentsFetchingSucces(state, action: PayloadAction<IComment[]>) {
      state.isLoading = false;
      state.error = '';
      state.comments = action.payload;
    },

    commentsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    commentAdd(state, action) {
      state.isLoading = false;
      state.error = '';
      state.comments = [action.payload, ...state.comments];
    },

    deleteComment(state, action) {
      state.isLoading = false;
      state.error = '';
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
  },
});

export default commentsSlice.reducer;
