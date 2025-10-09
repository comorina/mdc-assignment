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
import { Chip, Divider } from "@mui/material";

function UserDetail() {
  console.log("User Detail component rendered");
  const { id } = useParams();
  const numericId = Number(id);

  const userDetail = useSelector((state: UserDetailDataModel) =>
    state.userData.userDetail.find((u) => u.id === numericId)
  );

  if (!userDetail) {
    return <UserDetailContainer>Loading...</UserDetailContainer>;
  }

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
        <Divider />
        <Summary>{userDetail?.summary}</Summary>
      </SummaryContainer>
      {userDetail?.projects?.map((project: Projects) => (
        <ProjectContainer key={project?.id}>
          <ProjectTitle>{project?.projectName}</ProjectTitle>
          <Divider />
          <ProjectDetail>{project?.whatHaveDone}</ProjectDetail>
          <ProjectDetail>{project?.roleAndResponsibility}</ProjectDetail>
          <ProjectDetail>
            <strong>Skills:</strong>{" "}
            {project?.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                style={{ marginRight: "5px", border: "1px solid #E6E9EE" }}
              />
            ))}
          </ProjectDetail>
        </ProjectContainer>
      ))}
    </UserDetailContainer>
  );
}

export default UserDetail;
