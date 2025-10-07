import styled from "@emotion/styled";
import { Box, Card, Paper, Typography } from "@mui/material";

export const CardMainContainer = styled(Paper)(() => ({
  height: "400px",
  padding: "40px",
  boxShadow: "0 12px 30px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)",
  width: "360px",
}));

export const TopHeader = styled(Box)(() => ({
  height: "84px",
  background: "#1e88e5",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
}));

export const CardStyled = styled(Card)(() => ({
  width: "100%",
  borderRadius: "8px",
  height: "100%",
  overflow: "visible",
  boxShadow: "0 12px 30px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)",
}));

export const AvatarWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "-44px",
}));

export const SkillContainer = styled(Typography)(() => ({
  width: "326px",
}));
