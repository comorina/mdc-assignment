import {
  Avatar,
  Button,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import {
  AvatarWrapper,
  ButtonStyled,
  CardFooter,
  CardMainContainer,
  CardStyled,
  SkillContainer,
  TopHeader,
} from "./ProfileCard.style";
import { useNavigate } from "react-router-dom";
import React, { Suspense, useState } from "react";
import { removeUser } from "../../storeManagement/slices/userDetailsSlice";
import { useDispatch } from "react-redux";
import type { UserDetail } from "../../dataModel/userDetailDataModel";

function ProfileCard({ userData }: { userData: UserDetail }) {
  const AddNewUserDialog = React.lazy(
    () => import("../dialogBox/addNewUSerDialogBox/addNewUser")
  );
  const [editOpen, setEditOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDetailsClick() {
    navigate(`/user/${userData.id}`);
  }

  function handleDelete() {
    if (confirm("Delete this user?")) {
      dispatch(removeUser(userData));
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
            loading="lazy"
          />
        </AvatarWrapper>

        <CardContent sx={{ textAlign: "center", paddingTop: 0 }}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{ color: "#212121" }}
          >
            {userData.username}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ mb: 1, color: "#616161" }}
          >
            {userData.yearsOfExperience} years experience at{" "}
            {userData.companyName}
          </Typography>
          <SkillContainer
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, color: "#616161" }}
          >
            {userData.shortInfo}
          </SkillContainer>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            gap={1}
          >
            {userData?.skills?.map((skill) => (
              <Chip
                sx={{
                  border: "1px solid #E6E9EE",
                  color: "#424242",
                }}
                key={skill}
                label={skill}
                variant="outlined"
              />
            ))}
          </Stack>
        </CardContent>
        <CardFooter>
          <ButtonStyled
            size="small"
            variant="contained"
            onClick={handleDetailsClick}
          >
            Details
          </ButtonStyled>
          <ButtonStyled
            size="small"
            variant="contained"
            onClick={() => setEditOpen(true)}
          >
            Edit
          </ButtonStyled>
          <Button
            sx={{ borderRadius: "20px" }}
            size="small"
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardFooter>
      </CardStyled>
      {editOpen && (
        <Suspense fallback={null}>
          <AddNewUserDialog
            open={editOpen}
            onClose={() => setEditOpen(false)}
            editingUser={userData}
          />
        </Suspense>
      )}
    </CardMainContainer>
  );
}

export default React.memo(ProfileCard);
