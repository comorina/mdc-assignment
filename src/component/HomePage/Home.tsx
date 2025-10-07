import { Box, Drawer } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { HomeContainer } from "./Home.styles";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <Drawer variant="permanent" anchor="left">
        <Sidebar />
      </Drawer>
      <Box sx={{width: "100%", height: "100vh", overflow: "auto"}}>
        <Outlet />
      </Box>
    </HomeContainer>
  );
}

export default Home;
