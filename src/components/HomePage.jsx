import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <>
      <Typography variant="h1" component="h2">
        Hello!
      </Typography>
      <Typography variant="h5" component="h2">
        This is my first project with React and MaterialUI libraries.
      </Typography>
      <Box >
      <Stack direction="row" spacing={2} justifyContent={'center'}>
        <Button variant="contained" onClick={() => navigate("../users")}>
          Users
        </Button>
        <Button variant="contained" onClick={() => navigate("../create")}>
          Create
        </Button>
      </Stack>
      </Box>
    </>
  );
}