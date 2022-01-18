import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../interfaces/IUser';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getAllUsers: builder.query<IUser[], string> ({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
