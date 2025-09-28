import { useEffect, useState } from "react";
import ProfileCard from "../pofileCardComponent/ProfileCard";
import { Box } from "@mui/material";

type Project = {
  projectName: string;
  whatHaveDone: string;
  roleAndResponsibility: string;
  skills: string[];
};

type User = {
  id: number;
  username: string;
  shortInfo: string;
  companyName: string;
  yearsOfExperience: number;
  skills: string[];
  projects: Project[];
};

type Users = User[];

function Dashboard() {
  const [userData, setUserData] = useState<Users>();

  function getUserData() {
    fetch("src/assets/userDetails.json", {
      method: "GET",
    }).then((response) => {
      response.json().then((response) => {
        setUserData(response);
      });
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Box>
      <ProfileCard />
    </Box>
  );
}

export default Dashboard;
