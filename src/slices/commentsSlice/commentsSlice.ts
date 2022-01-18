import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../interfaces/IComment";

interface PostState {
  comments: IComment[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  comments: [],
  isLoading: false,
  error: '',
}

export const commentsSlice = createSlice({
  name: 'post',
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

    commentsFetchingError(state,action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default commentsSlice.reducer;
