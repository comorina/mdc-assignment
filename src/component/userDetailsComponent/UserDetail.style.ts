import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const UserDetailContainer = styled(Box)(() => ({
  height: "100vh",
  borderRadius: "8px",
  backgroundColor: "#fff",
}));

export const UserImage = styled("img")(() => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "8px solid white",
  marginLeft: "20px",
}));

export const UserImageContainer = styled(Box)(() => ({
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "#c9ebfb",
}));

export const USerInfoContainer = styled(Box)(() => ({
  marginLeft: "20px",
}))

export const UserNameContainer = styled(Box)(() => ({
  fontSize: "50px",
  fontWeight: "600",
  marginTop: "10px",
  color: "#3b3838ff",
}));

export const UserEmailContainer = styled(Box)(() => ({
  fontSize: "20px",
  color: "gray",
  marginTop: "5px",
}));

export const SummaryContainer = styled(Box)(() => ({
  padding: "20px",
}));

export const SectionTitle = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: "600",
  marginTop: "20px",
  marginBottom: "10px",
}));

export const Summary = styled(Box)(() => ({
  fontSize: "20px",
  lineHeight: "1.6",
  color: "#333",
  marginTop: "10px",
}));

export const SkillsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

export const ProjectContainer = styled(Box)(() => ({
  marginTop: "20px",
  padding: "20px",
  borderRadius: "8px",
}));

export const ProjectTitle = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: "600",
  marginBottom: "10px",
}));

export const ProjectDetail = styled(Box)(() => ({
  fontSize: "20px",
  lineHeight: "1.6",
  color: "#555",
  marginBottom: "10px",
  marginTop: "10px",
}));



