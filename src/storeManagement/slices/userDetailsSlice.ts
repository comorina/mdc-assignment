import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserDetail } from "../../dataModel/userDetailDataModel";

interface UserDetailsState {
  userDetail: UserDetail[];
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
    removeUser: (state, action: PayloadAction<UserDetail>) => {
      state.userDetail = state.userDetail.filter((user: UserDetail) => {
        console.log("Filtering user:", user?.id);
        return user.id !== action.payload?.id;
      });
      localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload[0];
      const index = state.userDetail.findIndex(
        (user) => user?.id === updatedUser?.id
      );
      if (index !== -1) {
        state.userDetail[index] = updatedUser;
        console.log("Updated user at index:", index, state.userDetail);
        localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
      }
    },
    addUser: (state, action) => {
      state.userDetail.push(action.payload);
      localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
    },
  },
});
console.log("slice render");

export const { storeTheData, removeUser, updateUser, addUser } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
