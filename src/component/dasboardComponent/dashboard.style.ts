import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  gap: "32px",
  paddingTop: "32px",
  paddingBottom: "32px",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));