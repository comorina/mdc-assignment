import { useSelector } from "react-redux";
import type { Projects, UserDetail } from "../../dataModel/userDetailDataModel";
import type { UserDetailDataModel } from "../../dataModel/userDetailDataModel";
import {
  ProjectContainer,
  ProjectDetail,
  ProjectTitle,
  SectionTitle,
  SkillsContainer,
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
import { Box, Chip, Divider } from "@mui/material";

function UserDetail() {
  const { id } = useParams();
  const numericId = Number(id);

  const userDetail = useSelector((state: UserDetailDataModel) =>
    state.userData.userDetail.find((u) => u.id === numericId)
  );

  if (!userDetail) {
    return <UserDetailContainer>Loading...</UserDetailContainer>;
  }

  const MAX_INLINE_SKILLS = 12;
  const skillOverflow = (userDetail.skills?.length || 0) > MAX_INLINE_SKILLS;

  return (
    <UserDetailContainer>
      <UserImageContainer>
        <UserImage src={userDetail.image} alt={userDetail.username} />
        <USerInfoContainer>
          <UserNameContainer>
            {userDetail.username} | {userDetail.companyName}
          </UserNameContainer>
          <UserEmailContainer>
            <span>Email: {userDetail.email}</span>
            <span>Contact: {userDetail.contactNumber}</span>
            {userDetail.yearsOfExperience != null && (
              <span>YOE: {userDetail.yearsOfExperience}</span>
            )}
          </UserEmailContainer>
          {!!userDetail.skills?.length && (
            <Box mt={1.5}>
              <SectionTitle sx={{ mb: 1, fontSize: "clamp(1rem,2vw,1.3rem)" }}>
                Skills
              </SectionTitle>
              <SkillsContainer>
                {(skillOverflow
                  ? userDetail.skills.slice(0, MAX_INLINE_SKILLS)
                  : userDetail.skills
                ).map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontSize: "0.75rem",
                      height: 24,
                      lineHeight: 1.1,
                    }}
                  />
                ))}
                {skillOverflow && (
                  <Chip
                    label={`+${
                      userDetail.skills.length - MAX_INLINE_SKILLS
                    } more`}
                    size="small"
                    variant="filled"
                    color="secondary"
                    sx={{ fontSize: "0.65rem", height: 24 }}
                  />
                )}
              </SkillsContainer>
            </Box>
          )}
        </USerInfoContainer>
      </UserImageContainer>

      <SummaryContainer>
        <SectionTitle>Summary</SectionTitle>
        <Divider />
        <Summary>{userDetail.summary}</Summary>
      </SummaryContainer>

      {userDetail.projects?.map((project) => (
        <ProjectContainer key={project.id}>
          <ProjectTitle>{project.projectName}</ProjectTitle>
          <Divider />
          <ProjectDetail>{project.whatHaveDone}</ProjectDetail>
          <ProjectDetail>{project.roleAndResponsibility}</ProjectDetail>
          {!!project.skills?.length && (
            <ProjectDetail sx={{ mt: 1 }}>
              <strong>Skills:</strong>{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  verticalAlign: "middle",
                  maxWidth: "100%",
                }}
              >
                {project.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: ".85rem",
                      height: 22,
                      border: "1px solid #E6E9EE",
                    }}
                  />
                ))}
              </Box>
            </ProjectDetail>
          )}
        </ProjectContainer>
      ))}
    </UserDetailContainer>
  );
}

export default UserDetail;
