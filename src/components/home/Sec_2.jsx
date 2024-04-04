import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import Looks4RoundedIcon from "@mui/icons-material/Looks4Rounded";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "@material-ui/core";
// import image from "../photos/sec_2bg.jpg";
const Sec_2 = () => {
  return (
    <Container maxWidth="lg">
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
        py: 5,
      }}
      //style={{ backgroundImage: `URL(https://mangaclash.com/wp-content/themes/madara/images/bg-search.jpg)`,backgroundRepeat:"no-repeat" }}
    >
      <Grid container spacing={4} maxWidth="lg" justifyContent="center">
        <Grid item xs={4}>
          <Box sx={{ mb: 5 }}>
            <h2 color="primary">How It Works</h2>
          </Box>
          <Box sx={{ mb: 5 }}>
            <p color="primary">
              GearUpGarage simplifies the process of servicing or repairing your
              vehicle, ensuring convenience and simplicity.
            </p>
          </Box>
          <Form className="d-flex ">
            <Button
              variant="outline-dark"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              Get Started
            </Button>
          </Form>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" spacing={9}>
            <Box
              height={200}
              width={200}
              my={4}
              p={2}
              sx={{
                // border: "1px solid grey",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <LooksOneRoundedIcon fontSize="large" />
              <br />
              <p>Choose Your Service From Our Wide Range Of Offerings</p>
            </Box>
            <Box
              height={200}
              width={200}
              my={4}
              p={2}
              sx={{
                // border: "1px solid grey",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",

                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <LooksTwoRoundedIcon fontSize="large" />
              <br />
              <p>Make An Appointment With Us</p>
            </Box>
          </Stack>
          <Stack direction="row" spacing={9} sx={{ mt: 9 }}>
            <Box
              height={200}
              width={200}
              my={4}
              p={2}
              sx={{
                // border: "1px solid grey",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",

                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Looks3RoundedIcon fontSize="large" />
              <br />
              <p>Always Get a Fair Quote</p>
            </Box>
            <Box
              height={200}
              width={200}
              my={4}
              p={2}
              sx={{
                // border: "1px solid grey",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",

                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Looks4RoundedIcon fontSize="large" />
              <br />
              <p>Obtain a Door Step Pick-Up and Drop Service </p>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default Sec_2;
