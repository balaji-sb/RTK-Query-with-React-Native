import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  useFetchTodoQuery,
  useLazyFetchTodoQuery,
  useRefreshTodoListMutation,
} from '../services/TodoApi';

const TodoListUi = () => {
  const {isLoading, isError, error, data} = useFetchTodoQuery();

  const [refreshAll, {isLoading: isRefreshing}] = useRefreshTodoListMutation();

  // TODO : For handling the api trigger on need basis we are using lazy method
  // const [fetchTodo, {isLoading, isError, error, data}] =
  //   useLazyFetchTodoQuery();

  // useEffect(() => {
  //   fetchTodo();
  // }, [fetchTodo]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshAll} />
      }>
      <Text>{JSON.stringify(data)}</Text>
    </ScrollView>
  );
};

export default TodoListUi;
