import { Box } from "@mui/material";

function UserNotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        alignItems: "center",
      }}
    >
      <Box sx={{ fontSize: "50px", fontWeight: "bolder" }}>
        Oops!, User Not Found
      </Box>
    </Box>
  );
}

export default UserNotFound;
