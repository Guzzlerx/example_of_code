import { RootState } from './store';

export const selectUser = (state: RootState) => state.user;
export const selectIsAuthenticated = (state: RootState): boolean => state.user.isAuthenticated;
export const selectIsLoading = (state: RootState): boolean => state.user.isLoading;
export const selectBaseURL = (state: RootState) => state.user.baseURL;
