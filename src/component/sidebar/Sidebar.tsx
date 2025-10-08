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
import type {
  UserDetail,
  UserDetailDataModel,
  userList,
} from "../../dataModel/userDetailDataModel";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Sidebar() {
  let data: UserDetail[] = useSelector(
    (state: UserDetailDataModel) => state?.userData?.userDetail
  );
  let userList: userList[] = getUserList();

  function getUserList() {
    const list: userList[] = [];
    if (data.length === 0) {
      const localData = localStorage.getItem("userDetails");
      if (localData) {
        data = JSON.parse(localData);
      }
    }
    data.forEach((user) => {
      list.push({ id: user.id, username: user.username });
    });
    return list;
  }

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("userList", JSON.stringify(data));
    } else {
      const localData = localStorage.getItem("userList");
      userList = localData ? JSON.parse(localData) : [];
      // If you need to use fallbackData, handle it here (e.g., dispatch to redux or set state)
    }
  }, [userList]);
  console.log("userList", userList);

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
          {userList.map((item) => {
            return (
              <>
                <ListItem key={item.id}>
                  <ListItemButton
                    component={NavLink}
                    to={`/user/${item.id}`}
                    end
                  >
                    <ListItemText primary={item.username} />
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
