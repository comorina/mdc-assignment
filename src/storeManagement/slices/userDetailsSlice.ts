import { createSlice, current } from "@reduxjs/toolkit";
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
        return user.id !== action.payload?.id;
      });
      localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
    },
    updateUser: (state, action) => {
      // console.log(current(state));  //for inspection of state by thsi current method
      const updatedUser = action.payload[0];
      const index = state.userDetail.findIndex(
        (user) => user?.id === updatedUser?.id
      );
      if (index !== -1) {
        state.userDetail[index] = updatedUser;
        localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
      }
    },
    addUser: (state, action) => {
      state.userDetail.push(action.payload);
      localStorage.setItem("userDetails", JSON.stringify(state.userDetail));
    },
  },
});

export const { storeTheData, removeUser, updateUser, addUser } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
