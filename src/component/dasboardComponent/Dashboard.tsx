import React, { useMemo, useState } from "react";
import ProfileCard from "../pofileCardComponent/ProfileCard";
import { DashboardContainer } from "./dashboard.style";
import { shallowEqual, useSelector } from "react-redux";
import type {
  UserDetail,
  UserDetailDataModel,
} from "../../dataModel/userDetailDataModel";
import { Box, Button } from "@mui/material";
import AddNewUserDialog from "../dialogBox/addNewUSerDialogBox/addNewUser";

function Dashboard() {
  const [openDailog, setOpenDialog] = useState(false);
  const users = useSelector(
    (state: UserDetailDataModel) => state.userData.userDetail,
    shallowEqual
  );

  const effectiveUsers = useMemo(() => {
    if (users.length > 0) return users;
    const cached = localStorage.getItem("userDetails");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        return Array.isArray(parsed) ? (parsed as UserDetail[]) : [];
      } catch {
        return [];
      }
    }
    return [];
  }, [users]);

  if (effectiveUsers.length === 0) {
    return <DashboardContainer>Loading...</DashboardContainer>;
  }

  return (
    <>
      {openDailog &&<AddNewUserDialog
        open={openDailog}
        editingUser={undefined}
        onClose={() => setOpenDialog(false)}
      />}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "20px",
          paddingRight: "20px",
        }}
      >
        <Button variant="contained" onClick={() => setOpenDialog(!openDailog)}>
          {" "}
          Create User
        </Button>
      </Box>
      <DashboardContainer>
        {users?.map((user) => (
          <ProfileCard key={user.id} userData={user} />
        ))}
      </DashboardContainer>
    </>
  );
}

export default React.memo(Dashboard);
