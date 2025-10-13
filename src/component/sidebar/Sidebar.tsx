import React, { useMemo } from "react";
import {
  BurggerIconContainer,
  HeaderTextContainer,
  SidebarContainer,
  SidebarHeader,
  StyledListItemButton,
  UserListContainer,
  SIDEBAR_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
} from "./Sidebar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PeopleIcon from "@mui/icons-material/People";
import {
  IconButton,
  List,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  ListItemIcon,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import type {
  UserDetail,
  UserDetailDataModel,
  userList,
} from "../../dataModel/userDetailDataModel";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../storeManagement/slices/sidebarToggleSlice";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

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

  const handleNavigate = (id?: number) => {
    if (id) navigate(`/user/${id}`);
    else navigate("/dashboard");
    if (isMobile && !collapsed) {
      // after navigation close (collapse) sidebar
      dispatch(toggleSidebar());
    }
  };

  const sidebarVisible = !collapsed;

  return (
    <>
      {isMobile && sidebarVisible && (
        <Box
          onClick={() => dispatch(toggleSidebar())}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,.4)",
            zIndex: 1200,
          }}
          aria-hidden="true"
        />
      )}
      <SidebarContainer
        collapsed={collapsed}
        role="navigation"
        aria-label="User navigation"
        data-collapsed={collapsed}
      >
        <SidebarHeader
          sx={isMobile ? { justifyContent: "flex-start" } : undefined}
        >
          {!isMobile && !collapsed && (
            <HeaderTextContainer>Users</HeaderTextContainer>
          )}
          <BurggerIconContainer>
            <IconButton
              size="small"
              onClick={handleToggle}
              sx={{ color: "white" }}
              aria-label="toggle sidebar"
              aria-expanded={!collapsed}
              aria-controls="sidebar-user-list"
            >
              {collapsed ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </BurggerIconContainer>
        </SidebarHeader>

        <UserListContainer id="sidebar-user-list">
          <List dense disablePadding>
            <StyledListItemButton
              selected={isDashboardActive}
              onClick={() => handleNavigate()}
            >
              <ListItemIcon sx={{ minWidth: 34, color: "inherit" }}>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              {(!collapsed || isMobile) && <ListItemText primary="Dashboard" />}
            </StyledListItemButton>

            {userList.map((u) => (
              <StyledListItemButton
                key={u.id}
                selected={isUserActive(u.id)}
                onClick={() => handleNavigate(u.id)}
              >
                <ListItemIcon sx={{ minWidth: 34, color: "inherit" }}>
                  <PeopleIcon fontSize="small" />
                </ListItemIcon>
                {(!collapsed || isMobile) && (
                  <ListItemText primary={u.username} />
                )}
              </StyledListItemButton>
            ))}
          </List>
        </UserListContainer>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
