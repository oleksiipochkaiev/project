import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { postsApi } from '../api/postsApi';
import { usersApi } from '../api/usersApi';
import postReducer from '../slices/postSlice/postSlice';
import commentsReducer from '../slices/commentsSlice/commentsSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    postReducer,
    commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(postsApi.middleware).concat(usersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
