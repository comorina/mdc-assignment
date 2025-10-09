import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const FormRow = styled(Box)({
  display: "flex",
  gap: 16,
  width: "100%",
});

export const TwoCol = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
  width: "100%",
  "@media (max-width: 720px)": {
    gridTemplateColumns: "1fr",
  },
});

export const SectionHeader = styled(Typography)({
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: ".5px",
  fontSize: 12,
  color: "#666",
  marginBottom: 4,
});

export const SkillChipsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  marginTop: 4,
});

export const ProjectPanel = styled(Box)({
  border: "1px solid #e0e0e0",
  padding: 12,
  borderRadius: 8,
  position: "relative",
  background: "#fafafa",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});