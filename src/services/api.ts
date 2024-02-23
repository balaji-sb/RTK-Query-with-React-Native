import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ServiceConstants} from './ServiceConstants';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: (headers, {}) => {
      return headers;
    },
  }),
  reducerPath: 'api',
  endpoints: () => ({}),
  tagTypes: [ServiceConstants.TODO_LIST],
});
