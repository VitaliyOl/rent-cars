import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './Cars/slice';
import { favoriteReducer } from './Favorites/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
