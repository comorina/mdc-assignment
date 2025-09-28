import {
  BurggerIconContainer,
  HeaderTextContainer,
  SidebarContainer,
  SidebarHeader,
  UserListContainer,
} from "./Sidebar.styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <HeaderTextContainer>Sopra Steria</HeaderTextContainer>
        <BurggerIconContainer>
          <IconButton aria-label="comment">
            <MenuRoundedIcon />
          </IconButton>
        </BurggerIconContainer>
      </SidebarHeader>
      <UserListContainer>
        <List sx={{ width: "100%" }}>
          <ListItem key={"dashboard-view"}>
            <ListItemButton component={NavLink} to="/dashboard" end>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <Divider />
          {[1, 2, 3].map((item) => {
            return (
              <>
                <ListItem key={item}>
                  <ListItemButton>
                    <ListItemText primary={`User ${item}`} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </UserListContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
