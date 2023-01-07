import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootSlice } from './root.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedSlice = persistReducer(persistConfig, rootSlice)

export const store = createStore(persistedSlice);

export const persistor = persistStore(store);
