import React from "react";
import Img from "./photos/bgsec_1.png";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function Heading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundImage: `url(${Img})`,
        height: "20vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h3"
        style={{
          color: "white",
          fontSize: "34pt !important",
          paddingBottom: "15px",
        }}
      >
        Services
      </Typography>
    </Box>
  );
}

export default Heading;
