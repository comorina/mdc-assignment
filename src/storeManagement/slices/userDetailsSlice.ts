import { createSlice } from "@reduxjs/toolkit";
import type { UserDetailDataModel } from "../../dataModel/userDetailDataModel";

interface UserDetailsState {
  userDetail: UserDetailDataModel[];
}

const initialState: UserDetailsState = {
  userDetail: [],
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    storeTheData: (state, action) => {
      state.userDetail = action.payload;
    },
    removeUser: (state, action) => {
        console.log("action payload ", action.payload)
    state.userDetail = state.userDetail.filter((user: UserDetailDataModel) => user.id !== action.payload);
      console.log(action.payload);
      localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
    },
  },
});

export const { storeTheData, removeUser } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
