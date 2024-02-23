import {TodoListResponse} from '../model/TodoListResponse';
import {ServiceConstants} from './ServiceConstants';
import {api} from './api';

export const todoApi = api.injectEndpoints({
  endpoints(build) {
    return {
      fetchTodo: build.query<any, void>({
        query: () => ({
          url: 'todos',
          method: 'GET',
        }),

        providesTags: [ServiceConstants.TODO_LIST],
      }),
      refreshTodoList: build.mutation<null, void>({
        queryFn: () => ({data: null}),
        invalidatesTags: [ServiceConstants.TODO_LIST],
      }),
    };
  },
  overrideExisting: false,
});

export const {
  useFetchTodoQuery,
  useLazyFetchTodoQuery,
  useRefreshTodoListMutation,
} = todoApi;
