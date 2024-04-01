import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "2rem",
        paddingBottom: "1rem",
      }}
    >
      <hr />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} GearUpGarage. All rights Reserved.`}
            </Typography>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/Haranarayanakarthik"
              color="inherit"
              underline="none"
            >
              <GitHubIcon sx={{ fontSize: 25, mr: 1 }} color="secondary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kommaraju-hara-narayana-karthik-564917258/"
              color="inherit"
              underline="none"
            >
              <LinkedInIcon sx={{ fontSize: 25 }} color="secondary" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
