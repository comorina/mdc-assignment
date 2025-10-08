import { useDispatch, useSelector } from "react-redux";
import { HomeContainer } from "./Home.styles";
import { Box, Drawer } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { storeTheData } from "../../storeManagement/slices/userDetailsSlice";
import { useCallback, useEffect } from "react";
import type { UserDetailDataModel } from "../../dataModel/userDetailDataModel";

function Home() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: UserDetailDataModel) => state.userData.userDetail); // adjust selector as needed
console.log("Home Render")
  const getUserDataCallback = useCallback(() => {
    fetch("src/assets/userDetails.json", {
      method: "GET",
    }).then((response) => {
      response.json().then((response) => {
        localStorage.setItem("userDetails", JSON.stringify(response));
        dispatch(storeTheData(response));
      });
    });
  }, [dispatch]);

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0) {
      const localData = localStorage.getItem("userDetails");
      if (localData) {
        dispatch(storeTheData(JSON.parse(localData)));
      } else {
        getUserDataCallback();
      }
    }
  }, [userDetails, getUserDataCallback, dispatch]);

  return (
    <HomeContainer>
      <Drawer variant="permanent" anchor="left">
        <Sidebar />
      </Drawer>
      <Box sx={{ width: "100%", height: "100vh", overflow: "auto" }}>
        <Outlet />
      </Box>
    </HomeContainer>
  );
}

export default Home;
