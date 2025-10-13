import styled from "@emotion/styled";
import { Box, ListItemButton } from "@mui/material";

export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED_WIDTH = 60;

interface SidebarProps {
  collapsed?: boolean;
}

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (p) => p !== "collapsed",
})<SidebarProps>(({ theme, collapsed }) => ({
  height: "100dvh",
  backgroundColor: "#1565C0",
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
  transition: "width .25s ease",
  overflow: "hidden",
  position: "relative",
  zIndex: 1300,
  [theme.breakpoints.down("sm")]: {
    // keep it always visible; optionally narrower when collapsed
    width: collapsed ? 56 : 200,
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1300,
  },
}));

export const SidebarHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 10px",
  height: 56,
  flexShrink: 0,
  position: "relative",
  zIndex: 1301,
});

export const HeaderTextContainer = styled(Box)<{ collapsed?: boolean }>(
  ({ collapsed }) => ({
    color: "white",
    padding: "10px",
    display: collapsed ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: ".5px",
    whiteSpace: "nowrap",
  })
);

export const BurggerIconContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const UserListContainer = styled(Box)(({ theme }) => ({
  height: "calc(100% - 56px)",
  overflowY: "auto",
  scrollbarWidth: "none",
  paddingBottom: theme.spacing(1),
  position: "relative",
  zIndex: 1301,
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255,255,255,.25)",
    borderRadius: 4,
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "#fff",
  borderRadius: 6,
  margin: "2px 6px",
  paddingTop: 6,
  paddingBottom: 6,
  transition: "background-color .2s, color .2s",
  "& .MuiListItemText-primary": {
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
