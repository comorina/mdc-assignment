import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeContainer } from "./Home.styles";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useUserDetails } from "../../customHook/useUserDetails";

function Home() {
  useUserDetails();
  const collapsed = useSelector(
    (state: { sideBarToggle: { collapsed: boolean } }) =>
      state.sideBarToggle.collapsed
  );

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
