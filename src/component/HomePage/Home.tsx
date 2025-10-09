import { useDispatch, useSelector } from "react-redux";
import { HomeContainer } from "./Home.styles";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { storeTheData } from "../../storeManagement/slices/userDetailsSlice";
import { useCallback, useEffect } from "react";
import type { UserDetailDataModel } from "../../dataModel/userDetailDataModel";

function Home() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: UserDetailDataModel) => state.userData.userDetail);
  const collapsed = useSelector((state: { sideBarToggle: { collapsed: boolean } }) => state.sideBarToggle.collapsed);
  const getUserDataCallback = useCallback(() => {
    fetch("src/assets/userDetails.json", {
      method: "GET",
    }).then((response) => {
      response.json().then((response) => {
        dispatch(storeTheData(response));
        localStorage.setItem("userDetails", JSON.stringify(response));
      });
    });
  }, [dispatch]);

  useEffect(() => {
    if (userDetails.length === 0) {
      const localData = localStorage.getItem("userDetails");
      if (localData) {
        dispatch(storeTheData(JSON.parse(localData)));
      } else {
        getUserDataCallback();
      }
    }
  }, [ getUserDataCallback, dispatch, userDetails.length]);
  console.log("home colapse ", collapsed )

  return (
    <HomeContainer collapsed={collapsed}>
      <Box sx={{ height: "100vh" }}>
        <Sidebar />
      </Box>
      <Box sx={{ width: "100%", height: "100vh", overflow: "auto" }}>
        <Outlet />
      </Box>
    </HomeContainer>
  );
}

export default Home;
