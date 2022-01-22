import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../interfaces/IPost';

type querryes = {
  page: number;
  selectedUser: number;
}
export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<{ apiResponse: IPost[], totalCount: number}, querryes>({
      query: ({ page = 0, selectedUser: userId }) => (
        userId
          ? `/posts?_page=${page}&userId=${userId}`
          : `/posts?_page=${page}`
      ),
      transformResponse(apiResponse: IPost[], meta) {
        return { apiResponse, totalCount: Number(meta!.response!.headers.get('X-Total-Count')) };
      },
    }),
    // ?_page=1&userId=4
    getUserPosts: builder.query<IPost[], any>({
      query: ({ page, selectedUser: userId }) => ({
        url: `/posts?userId=${userId}`,
        params: {
          _limit: 10,
          _page: page,
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetUserPostsQuery } = postsApi;
