import styled from "@emotion/styled";
import { Box, ListItemButton } from "@mui/material";

export const SidebarContainer = styled(Box)({
  height: "100%",
  // backgroundColor: "#2d8be7",
  backgroundColor: "#1565C0",
  display: "flex",
  flexDirection: "column",
});

export const SidebarHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 10px",
  height: 56,
});

export const HeaderTextContainer = styled(Box)({
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
});

export const BurggerIconContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const UserListContainer = styled(Box)({
  height: "calc(100% - 56px)",
  overflowY: "auto",
  scrollbarWidth: "none",
});

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "#fff",
  borderRadius: 4,
  margin: "2px 6px",
  paddingTop: 6,
  paddingBottom: 6,
  transition: "background-color .2s, color .2s",
  "& .MuiListItemText-primary": {
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
  },
  "&:hover": {
    backgroundColor: "#1976D2",
    color: "#000",
    "& .MuiListItemText-primary": {
      color: "#000",
      fontWeight: 500,
    },
  },

  "&.Mui-selected, &.active": {
    backgroundColor: "#fff",
    color: "#000",
    "& .MuiListItemText-primary": {
      color: "#000",
      fontWeight: 600,
    },
  },
  "&.Mui-selected:hover, &.active:hover": {
    backgroundColor: "#fff",
  },
  "&:active": {
    transform: "scale(.98)",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.common.white}`,
    outlineOffset: 2,
  },
}));
