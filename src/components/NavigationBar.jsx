import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export default function NavigationBar() {
  const navigate = useNavigate();

  const StyledTypography = styled(Typography)({
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  });

  const StyledAdbIcon = styled(AdbIcon)({
    display: { xs: "none", md: "flex" },
    mr: 1,
  });

  const StyledButton = styled(Button)({
    my: 2,
    color: "white",
    display: "flex",
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledAdbIcon  />
          <StyledTypography
            variant="h6"
            noWrap
            component="a"
          >
            LOGO
          </StyledTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <StyledButton onClick={() => navigate("../")} startIcon={<HomeIcon />}>
              Home
            </StyledButton>
            <StyledButton onClick={() => navigate("../users")} startIcon={<SearchIcon />}>
                
              Users
            </StyledButton>
            <StyledButton onClick={() => navigate("../create")} startIcon={<AddIcon />}>
                
              Create
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
