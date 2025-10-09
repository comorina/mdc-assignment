import { configureStore } from '@reduxjs/toolkit'
import { userDetailsSlice } from './slices/userDetailsSlice';
import { sideBarSlice } from './slices/sidebarToggleSlice';

export default configureStore({
  reducer: {
    userData: userDetailsSlice.reducer,
    sideBarToggle: sideBarSlice.reducer,
  },
  devTools: true,
});