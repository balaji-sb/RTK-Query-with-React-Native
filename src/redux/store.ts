import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from '../services/api';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';
import {RTKLogger} from './RTKLogger';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: EncryptedStorage,
};

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend([RTKLogger, api.middleware]),
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
