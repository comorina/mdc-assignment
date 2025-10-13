import { configureStore } from '@reduxjs/toolkit'
import { userDetailsSlice } from './slices/userDetailsSlice';
import { sideBarSlice } from './slices/sidebarToggleSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    userData: userDetailsSlice.reducer,
    sideBarToggle: sideBarSlice.reducer,
    theme: themeReducer,
  },
  devTools: true,
});

// Export the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;