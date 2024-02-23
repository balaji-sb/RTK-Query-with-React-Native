import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';

type Props = PropsWithChildren<{}>;

export const StoreProvider = (props: Props) => {
  const {children} = props;
  console.log('childre', children);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
