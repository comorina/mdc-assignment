import React, { useMemo } from "react";
import {
  BurggerIconContainer,
  HeaderTextContainer,
  SidebarContainer,
  SidebarHeader,
  StyledListItemButton,
  UserListContainer,
  
} from "./Sidebar.styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { NavLink, useLocation } from "react-router-dom";
import type {
  UserDetail,
  UserDetailDataModel,
  userList,
} from "../../dataModel/userDetailDataModel";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../storeManagement/slices/sidebarToggleSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const collapsed = useSelector(
    (state: { sideBarToggle: { collapsed: boolean } }) =>
      state.sideBarToggle.collapsed
  );
  const data: UserDetail[] = useSelector(
    (state: UserDetailDataModel) => state.userData.userDetail
  );

  const userList: userList[] = useMemo(
    () => data.map(({ id, username }) => ({ id, username })),
    [data]
  );

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  const isDashboardActive = location.pathname === "/dashboard";
  const isUserActive = (id: number) => location.pathname === `/user/${id}`;

  return (
<SidebarContainer>
      <SidebarHeader>
        {!collapsed && <HeaderTextContainer>Sopra Steria</HeaderTextContainer>}
        <BurggerIconContainer>
          <IconButton aria-label="toggle sidebar" onClick={handleToggle}>
            <MenuRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </BurggerIconContainer>
      </SidebarHeader>

      {!collapsed && (
        <UserListContainer>
          <List sx={{ width: "100%", py: 0 }}>
            <ListItem disablePadding>
              <StyledListItemButton
                component={NavLink}  
                to="/dashboard"
                end
                disableRipple
                selected={isDashboardActive}
              >
                <ListItemText primary="Dashboard" />
              </StyledListItemButton>
            </ListItem>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.4)" }} />

            {userList.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem disablePadding>
                  <StyledListItemButton
                    component={NavLink} 
                    to={`/user/${item.id}`}
                    end
                    disableRipple
                    selected={isUserActive(item.id)}
                  >
                    <ListItemText primary={item.username} />
                  </StyledListItemButton>
                </ListItem>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.25)" }} />
              </React.Fragment>
            ))}
          </List>
        </UserListContainer>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
