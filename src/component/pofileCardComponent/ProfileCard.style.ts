import styled from "@emotion/styled";
import { Box, Button, Card, Paper, Typography } from "@mui/material";

export const CardMainContainer = styled(Paper)(() => ({
  height: "400px",
  padding: "40px",
  boxShadow: "0 12px 30px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)",
  width: "360px",
  backgroundColor: "#fff",
}));

export const TopHeader = styled(Box)(() => ({
  height: "84px",
  background: "linear-gradient(180deg, #1976D2, #1565C0)",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
}));

export const CardStyled = styled(Card)({
  width: "100%",
  borderRadius: "8px",
  height: "100%",
  overflow: "visible",
  boxShadow: "0 12px 30px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)",
  display: "flex",
  flexDirection: "column",
});

export const AvatarWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "-44px",
}));

export const SkillContainer = styled(Typography)(() => ({
  width: "326px",
}));

export const CardFooter = styled(Box)(() => ({
  display: "flex",
  gap: 8,
  padding: "8px 16px 16px",
  justifyContent: "space-between",
  marginTop: "auto",
}));

export const ButtonStyled = styled(Button)({
  borderRadius: "20px",
  backgroundColor: "#1976D2",
  transition: "background 0.2s",
  "&:hover": {
    background: "#1565C0",
  },
});
