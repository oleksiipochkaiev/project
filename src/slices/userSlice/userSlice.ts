import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

interface userState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: userState = {
  user: null,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postFetching(state) {
      state.isLoading = true;
    },

    postFetchingSucces(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },

    postFetchingError(state,action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default userSlice.reducer;
