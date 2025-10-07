import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import {
  AvatarWrapper,
  CardMainContainer,
  CardStyled,
  SkillContainer,
  TopHeader,
} from "./ProfileCard.style";
import { useNavigate } from "react-router-dom";

type UserData = {
  id: number;
  username: string;
  shortInfo: string;
  companyName: string;
  yearsOfExperience: number;
  skills: string[];
  image: string;
  projects: {
    projectName: string;
    whatHaveDone: string;
    roleAndResponsibility: string;
    skills: string[];
  }[];
};

interface ProfileCardProps {
  userData: UserData;
}

function ProfileCard({ userData }: ProfileCardProps) {
  const navigate = useNavigate();
  if (!userData) return <div>Loading...</div>;
  function handleDetailsClick() {
    navigate(`/user/${userData.id}`);
  }
  return (
    <CardMainContainer>
      <CardStyled>
        <TopHeader />
        <AvatarWrapper>
          <Avatar
            alt={userData.username}
            src={userData.image}
            sx={{ width: 88, height: 88, border: "4px solid #fff" }}
          />
        </AvatarWrapper>

        <CardContent sx={{ textAlign: "center", paddingTop: 0 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {userData.username}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
            {userData.yearsOfExperience} years experience at {userData.companyName}
          </Typography>
          <SkillContainer variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {userData.shortInfo}
          </SkillContainer>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
            {userData.skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDetailsClick}>Details</Button>
        </CardActions>
      </CardStyled>
    </CardMainContainer>
  );
}

export default ProfileCard;
