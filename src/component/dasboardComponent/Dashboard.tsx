import { useEffect } from "react";
import ProfileCard from "../pofileCardComponent/ProfileCard";
import { DashboardContainer } from "./dashboard.style";
import { useDispatch, useSelector } from "react-redux";
import { storeTheData } from "../../storeManagement/slices/userDetailsSlice";

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
  image: string;
};

type Users = User[];
interface RootState {
  userData: {
    userDetail: Users;
  };
}

function Dashboard() {
  const data = useSelector((state: RootState) => {
    return state?.userData?.userDetail;
  });
  const dispatch = useDispatch();

  function getUserData() {
    fetch("src/assets/userDetails.json", {
      method: "GET",
    }).then((response) => {
      response.json().then((response) => {
        dispatch(storeTheData(response));
      });
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  console.log("data from redux", data);

  return (
    <DashboardContainer sx={{}}>
      {data?.map((user) => (
        <ProfileCard key={user.id} userData={user} />
      ))}
    </DashboardContainer>
  );
}

export default Dashboard;
