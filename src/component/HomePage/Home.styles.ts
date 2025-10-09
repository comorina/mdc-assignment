import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "collapsed",
})<{ collapsed: boolean }>(({ collapsed }) => ({
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateColumns: collapsed ? "60px 1fr" : "300px 1fr",
  transition: "grid-template-columns 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
}));
