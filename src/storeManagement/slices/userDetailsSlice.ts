import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        userDetail: []
    },
    reducers: {
        storeTheData: (state, action) => {
            state.userDetail = action.payload
        }
    },
})

export const {storeTheData} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
