import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box)(() => ({
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateColumns: "250px 1fr",
  gap: "5px",
}));
