import { useSelector } from "react-redux";
import type { Projects, UserDetail } from "../../dataModel/userDetailDataModel";
import type { UserDetailDataModel } from "../../dataModel/userDetailDataModel";
import {
  ProjectContainer,
  ProjectDetail,
  ProjectTitle,
  SectionTitle,
  Summary,
  SummaryContainer,
  UserDetailContainer,
  UserEmailContainer,
  UserImage,
  UserImageContainer,
  USerInfoContainer,
  UserNameContainer,
} from "./UserDetail.style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Chip, Divider } from "@mui/material";

function UserDetail() {
  const paramID = useParams().id;
  const reduxUserDetail: UserDetail | undefined = useSelector(
    (state: UserDetailDataModel) =>
      state?.userData?.userDetail.find((user) => user.id === Number(paramID))
  );
  const [userDetail, setUserDetail] = useState<UserDetail | undefined>(
    reduxUserDetail
  );

  useEffect(() => {
    if (!reduxUserDetail) {
      const data = localStorage.getItem("userDetails");
      if (data) {
        const parsedData = JSON.parse(data);
        const foundUser = parsedData.find(
          (user: UserDetail) => user.id === Number(paramID)
        );
        setUserDetail(foundUser);
        console.log("parsedData", parsedData);
      }
    } else {
      setUserDetail(reduxUserDetail);
    }
  }, [reduxUserDetail, paramID]);

  return (
    <UserDetailContainer>
      <UserImageContainer>
        <UserImage src={userDetail?.image} alt={userDetail?.username} />
        <USerInfoContainer>
          <UserNameContainer>
            {userDetail?.username} | {userDetail?.companyName}
          </UserNameContainer>
          <UserEmailContainer>
            Email: {userDetail?.email} | Contact No: {userDetail?.contactNumber}
          </UserEmailContainer>
        </USerInfoContainer>
      </UserImageContainer>
      <SummaryContainer>
        <SectionTitle>Summary</SectionTitle>
        <Divider/>
        <Summary>{userDetail?.summary}</Summary>
      </SummaryContainer>
      {userDetail?.projects?.map((project: Projects) => (
        <ProjectContainer key={project?.id}>
          <ProjectTitle>{project?.projectName}</ProjectTitle>
          <Divider/>
          <ProjectDetail>{project?.whatHaveDone}</ProjectDetail>
          <ProjectDetail>{project?.roleAndResponsibility}</ProjectDetail>
          <ProjectDetail>
            <strong>Skills:</strong> {project?.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                style={{ marginRight: "5px" }}
              />
            ))}
          </ProjectDetail>
        </ProjectContainer>
      ))}
    </UserDetailContainer>
  );
}

export default UserDetail;
