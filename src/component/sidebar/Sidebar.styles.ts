import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  border: "1px solid red",
}));

export const SidebarHeader = styled(Box)(() => ({
  display: "flex",
}));

export const HeaderTextContainer = styled(Box)({
  color: "white",
  width: "180px",
  padding: "10px",
  textAlign: "center" as const,
  border: "1px solid white",
});

export const BurggerIconContainer = styled(Box)(() => ({
  padding: "10px",
  width: "30px",
  border: "1px soli red",
}));

export const UserListContainer = styled(Box)(() => ({
  border: "1px solid white",
}));
