import { useEffect, useState } from "react";
import ProfileCard from "../pofileCardComponent/ProfileCard";
import { DashboardContainer } from "./dashboard.style";
import { useSelector } from "react-redux";

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
  const reduxData = useSelector((state: RootState) => state?.userData?.userDetail);
  const [data, setData] = useState<Users>(reduxData ?? []);

  useEffect(() => {
    if (!reduxData || reduxData.length === 0) {
      const localData = localStorage.getItem("userDetails");
      if (localData) {
        setData(JSON.parse(localData));
      }
    } else {
      setData(reduxData);
    }
  }, [reduxData]);

  return (
    <DashboardContainer sx={{}}>
      {data?.map((user) => (
        <ProfileCard key={user.id} userData={user} />
      ))}
    </DashboardContainer>
  );
}

export default Dashboard;
