import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { apiSlice } from './api/apiSlice';
import userDataSlice from './userDataSlice/userDataSlice';

export const rootReducer = combineReducers({
  user: userDataSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
