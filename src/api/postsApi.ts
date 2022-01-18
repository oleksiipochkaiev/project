import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../interfaces/IPost';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getAllPosts: builder.query<IPost[], number> ({
      query: (page: 1) => ({
        url: '/posts',
        params: {
          _limit: 10,
          _page: page,
        }
      }),
    }),
  }),
})

export const { useGetAllPostsQuery } = postsApi;
