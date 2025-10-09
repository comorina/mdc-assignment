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
  CardFooter,
  CardMainContainer,
  CardStyled,
  SkillContainer,
  TopHeader,
} from "./ProfileCard.style";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { removeUser } from "../../storeManagement/slices/userDetailsSlice";
import { useDispatch } from "react-redux";
import AddNewUserDialog from "../dialogBox/addNewUSerDialogBox/addNewUser";
import type { UserDetail } from "../../dataModel/userDetailDataModel";



function ProfileCard({ userData }: { userData: UserDetail }) {
  const [editOpen, setEditOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDetailsClick() {
    navigate(`/user/${userData.id}`);
  }

  function handleDelete() {
    if (confirm("Delete this user?")) {
      dispatch(removeUser(userData.id));
    }
  }
  if (!userData) return <div>Loading...</div>;
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
            {userData.yearsOfExperience} years experience at{" "}
            {userData.companyName}
          </Typography>
          <SkillContainer variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {userData.shortInfo}
          </SkillContainer>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            gap={1}
          >
            {userData.skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
        <CardFooter>
          <CardActions>
            <Button size="small" onClick={handleDetailsClick}>
              Details
            </Button>
            <Button size="small" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button size="small" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        </CardFooter>
      </CardStyled>
      {editOpen && <AddNewUserDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        editingUser={userData} 
      />}
    </CardMainContainer>
  );
}

export default React.memo(ProfileCard);
