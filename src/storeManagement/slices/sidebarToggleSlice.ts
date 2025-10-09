import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: "sidebarToggle",
    initialState: {
        collapsed: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.collapsed = !state.collapsed
        }
    }, 
})

export const {toggleSidebar} = sideBarSlice.actions;
export default sideBarSlice.reducer;