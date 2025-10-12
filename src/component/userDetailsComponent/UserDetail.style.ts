import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const UserDetailContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  borderRadius: 8,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
  },
}));

export const UserImage = styled("img")(({ theme }) => ({
  width: 150,
  height: 150,
  objectFit: "cover",
  borderRadius: "50%",
  border: "8px solid #fff",
  marginLeft: 20,
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  transition: "width .25s,height .25s",
  [theme.breakpoints.down("md")]: {
    width: 120,
    height: 120,
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: 100,
    height: 100,
  },
}));

export const UserImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(3),
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#DFF3FF",
  padding: theme.spacing(3, 3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
  },
}));

export const USerInfoContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  marginLeft: 20,
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

export const UserNameContainer = styled(Box)(({ theme }) => ({
  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
  fontWeight: 600,
  marginTop: 10,
  color: "#3b3838",
  fontFamily: "serif",
  lineHeight: 1.15,
  wordBreak: "break-word",
}));

export const UserEmailContainer = styled(Box)(({ theme }) => ({
  fontSize: "clamp(.85rem, 1.4vw, 1.15rem)",
  color: "#616161",
  marginTop: 6,
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const SummaryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 1.5),
  },
}));

export const SectionTitle = styled(Box)(({ theme }) => ({
  fontSize: "clamp(1.25rem, 2.4vw, 1.9rem)",
  fontWeight: 600,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
  fontFamily: "sans-serif",
}));

export const Summary = styled(Box)(({ theme }) => ({
  fontSize: "clamp(.9rem, 1.4vw, 1.15rem)",
  lineHeight: 1.55,
  color: "#333",
  marginTop: 10,
  fontFamily: "sans-serif",
  whiteSpace: "pre-line",
}));

export const SkillsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.2),
  flexWrap: "wrap",
  marginTop: theme.spacing(1),
}));

export const ProjectContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  padding: theme.spacing(3),
  borderRadius: 12,
  background: "#fafafa",
  boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.75),
  },
}));

export const ProjectTitle = styled(Box)(({ theme }) => ({
  fontSize: "clamp(1.05rem, 2vw, 1.6rem)",
  fontWeight: 600,
  marginBottom: 10,
  wordBreak: "break-word",
}));

export const ProjectDetail = styled(Box)(({ theme }) => ({
  fontSize: "clamp(.85rem, 1.2vw, 1.05rem)",
  lineHeight: 1.5,
  color: "#555",
  marginBottom: 10,
  marginTop: 6,
  wordBreak: "break-word",
}));
