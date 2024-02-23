import {View, Text} from 'react-native';
import React from 'react';
import {StoreProvider} from './src/redux/StoreProvier';
import TodoListUi from './src/ui/TodoListUi';

const App = () => {
  return <Text>Test App</Text>;
};

const AppWrapper = () => {
  return (
    <StoreProvider>
      <TodoListUi />
    </StoreProvider>
  );
};

export default AppWrapper;
