import { useState, useMemo, useEffect } from "react";
import type { ChangeEvent } from "react";
import type { FormEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { storeTheData } from "../../../storeManagement/slices/userDetailsSlice";
import type {
  UserDetail,
  UserDetailDataModel,
  Projects,
} from "../../../dataModel/userDetailDataModel";
import {
  TwoCol,
  SectionHeader,
  SkillChipsContainer,
  ProjectPanel,
} from "./addNewUser.styles";

type ProjectForm = {
  id?: number;
  projectName: string;
  whatHaveDone: string;
  roleAndResponsibility: string;
  projectSkills: string;
};

const emptyProject = (): ProjectForm => ({
  projectName: "",
  whatHaveDone: "",
  roleAndResponsibility: "",
  projectSkills: "",
});

interface AddNewUserDialogProps {
  open: boolean;
  onClose: () => void;
  editingUser?: UserDetail; // new
}

const steps = ["Personal Info", "Project"];

export default function AddNewUserDialog({
  open,
  onClose,
  editingUser,
}: AddNewUserDialogProps) {
  const dispatch = useDispatch();
  const existingUsers = useSelector(
    (s: UserDetailDataModel) => s.userData.userDetail
  );

  const [activeStep, setActiveStep] = useState(0);

  const [username, setUsername] = useState("");
  const [shortInfo, setShortInfo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [yearsOfExperience, setYOE] = useState<number | "">("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState<string>("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [summary, setSummary] = useState("");


  const [projects, setProjects] = useState<ProjectForm[]>([emptyProject()]);

  useEffect(() => {
    if (open && editingUser) {
      setActiveStep(0);
      setUsername(editingUser.username || "");
      setShortInfo(editingUser.shortInfo || "");
      setCompanyName(editingUser.companyName || "");
      setYOE(editingUser.yearsOfExperience ?? "");
      setImage(editingUser.image || "");
      setSkills((editingUser.skills || []).join(", "));
      setEmail(editingUser.email || "");
      setContactNumber(editingUser.contactNumber || "");
      setSummary(editingUser.summary || "");
      if (editingUser.projects && editingUser.projects.length) {
        setProjects(
          editingUser.projects.map((p) => ({
            id: p.id,
            projectName: p.projectName,
            whatHaveDone: p.whatHaveDone,
            roleAndResponsibility: p.roleAndResponsibility,
            projectSkills: (p.skills || []).join(", "),
          }))
        );
      } else {
        setProjects([emptyProject()]);
      }
    }
    if (open && !editingUser) {
      resetAll();
    }
  }, [open, editingUser]);

  const nextId = useMemo(
    () =>
      existingUsers.length
        ? Math.max(...existingUsers.map((u) => u.id)) + 1
        : 1,
    [existingUsers]
  );

  const handleNext = () => {
    if (activeStep === 0) {
      if (!username || !email) return;
    }
    setActiveStep((p) => p + 1);
  };

  const handleBack = () => setActiveStep((p) => p - 1);

  const resetAll = () => {
    setActiveStep(0);
    setUsername("");
    setShortInfo("");
    setCompanyName("");
    setYOE("");
    setImage("");
    setSkills("");
    setEmail("");
    setContactNumber("");
    setSummary("");
    setProjects([emptyProject()]);
  };

  const updateProject = (
    index: number,
    field: keyof ProjectForm,
    value: string
  ) => {
    setProjects((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  };

  const addProject = () => setProjects((prev) => [...prev, emptyProject()]);

  const removeProject = (index: number) => {
    setProjects((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== index)
    );
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const userSkills = skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const normalizedProjects: Projects[] = projects
      .map((p, idx) => {
        const trimmedSkills = p.projectSkills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        const isEmpty =
          !p.projectName &&
          !p.whatHaveDone &&
          !p.roleAndResponsibility &&
          trimmedSkills.length === 0;
        if (isEmpty) return null;
        return {
          id: p.id ?? idx + 1,
          projectName: p.projectName,
          whatHaveDone: p.whatHaveDone,
          roleAndResponsibility: p.roleAndResponsibility,
          skills: trimmedSkills,
        } as Projects;
      })
      .filter(Boolean) as Projects[];

    const newUser: UserDetail = {
      id: editingUser ? editingUser.id : nextId,
      username,
      shortInfo,
      companyName,
      yearsOfExperience: Number(yearsOfExperience) || 0,
      image:
        image || "https://i.pravatar.cc/150?u=" + encodeURIComponent(username),
      skills: userSkills,
      email,
      contactNumber,
      summary,
      projects: normalizedProjects,
    };

    const updated = editingUser
      ? existingUsers.map((u) => (u.id === editingUser.id ? newUser : u))
      : [...existingUsers, newUser];

    dispatch(storeTheData(updated));
    localStorage.setItem("userDetails", JSON.stringify(updated));
    handleClose();
  };
  console.log(editingUser);

  const personalInfoStep = (
    <Stack spacing={2}>
      <SectionHeader variant="subtitle1">Basic</SectionHeader>
      <TwoCol>
        <TextField
          label="Username*"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          size="small"
          fullWidth
        />
        <TextField
          label="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          fullWidth
        />
      </TwoCol>
      <TwoCol>
        <TextField
          label="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          size="small"
          fullWidth
        />
        <TextField
          label="Company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          size="small"
          fullWidth
        />
      </TwoCol>
      <TwoCol>
        <TextField
          label="Years of Experience"
          type="number"
          value={yearsOfExperience}
          onChange={(e) =>
            setYOE(e.target.value === "" ? "" : Number(e.target.value))
          }
          size="small"
          fullWidth
        />
        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          size="small"
          fullWidth
        />
      </TwoCol>
      <TextField
        label="Short Info"
        value={shortInfo}
        onChange={(e) => setShortInfo(e.target.value)}
        size="small"
        multiline
        rows={2}
        fullWidth
      />
      <TextField
        label="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        size="small"
        multiline
        rows={3}
        fullWidth
      />
      <TextField
        label="Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        size="small"
        fullWidth
      />
      {skills && (
        <SkillChipsContainer>
          {skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((s) => (
              <Box
                key={s}
                sx={{
                  px: 1,
                  py: 0.25,
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: 1,
                  fontSize: 12,
                  mr: 0.5,
                  mb: 0.5,
                }}
              >
                {s}
              </Box>
            ))}
        </SkillChipsContainer>
      )}
    </Stack>
  );

  const projectStep = (
    <Stack spacing={3}>
      <SectionHeader variant="subtitle1">Projects</SectionHeader>
      {projects.map((p, idx) => {
        const skillTokens = p.projectSkills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        return (
          <ProjectPanel key={idx}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle2">Project {idx + 1}</Typography>
              {projects.length > 1 && (
                <Button
                  size="small"
                  color="error"
                  onClick={() => removeProject(idx)}
                >
                  Remove
                </Button>
              )}
            </Box>
            <TextField
              label="Project Name"
              value={p.projectName}
              onChange={(e) =>
                updateProject(idx, "projectName", e.target.value)
              }
              size="small"
              fullWidth
            />
            <TextField
              label="What Have Done"
              value={p.whatHaveDone}
              onChange={(e) =>
                updateProject(idx, "whatHaveDone", e.target.value)
              }
              size="small"
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Role & Responsibility"
              value={p.roleAndResponsibility}
              onChange={(e) =>
                updateProject(idx, "roleAndResponsibility", e.target.value)
              }
              size="small"
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Project Skills (comma separated)"
              value={p.projectSkills}
              onChange={(e) =>
                updateProject(idx, "projectSkills", e.target.value)
              }
              size="small"
              fullWidth
            />
            {skillTokens.length > 0 && (
              <SkillChipsContainer>
                {skillTokens.map((s) => (
                  <Box
                    key={s}
                    sx={{
                      px: 1,
                      py: 0.25,
                      bgcolor: "secondary.main",
                      color: "#fff",
                      borderRadius: 1,
                      fontSize: 12,
                      mr: 0.5,
                      mb: 0.5,
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </SkillChipsContainer>
            )}
          </ProjectPanel>
        );
      })}
      <Box>
        <Button variant="outlined" size="small" onClick={addProject}>
          Add Another Project
        </Button>
      </Box>
    </Stack>
  );

  const hasAtLeastOneValidProject = projects.some(
    (p) =>
      p.projectName ||
      p.whatHaveDone ||
      p.roleAndResponsibility ||
      p.projectSkills.trim().length > 0
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      slotProps={{
        backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.6)" } },
        paper: { sx: { borderRadius: 2, p: 0.5 } },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        {editingUser ? "Edit User" : "Create User"}
      </DialogTitle>
      <DialogContent dividers>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box component="form" onSubmit={handleSubmit}>
          {activeStep === 0 && personalInfoStep}
          {activeStep === 1 && projectStep}
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mr: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Step {activeStep + 1} of {steps.length}
          </Typography>
        </Box>
        <Button onClick={handleClose} color="inherit" size="small">
          Cancel
        </Button>
        {activeStep > 0 && (
          <Button onClick={handleBack} size="small">
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 && (
          <Button
            onClick={handleNext}
            variant="contained"
            size="small"
            disabled={!username || !email}
          >
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="small"
            disabled={!hasAtLeastOneValidProject}
          >
            Submit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
