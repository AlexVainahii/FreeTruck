import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { itemsReducer } from './items/itemsSlice';
import { getItemsReducer } from './getItems/getItems';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const itemsPersistConfig = {
  key: 'items',
  storage,
};

const persistedItemsReducer = persistReducer(itemsPersistConfig, itemsReducer);
const getItemPersistConfig = {
  key: 'getItems',
  storage,
};

const persistedGetItemReducer = persistReducer(
  getItemPersistConfig,
  getItemsReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    items: persistedItemsReducer,
    getItems: persistedGetItemReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
