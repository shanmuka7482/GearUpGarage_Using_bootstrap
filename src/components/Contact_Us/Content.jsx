import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import { pink } from "@mui/material/colors";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h2" component="div" textAlign={"center"}>
        Contact Us
      </Typography>
      <div style={{ display: "flex", alignItems: "center", marginTop: "3px" }}>
        <LocationOnIcon
          sx={{ color: "#C92A2A", fontSize: 55, mt: 3, mr: 5, ml: 2, mb: 2 }}
        />
        <Typography variant="h6" textAlign={"center"} sx={{ mr: 3 }}>
          Neeru Konda, Amaravati, Andhra Pradesh 522502
        </Typography>
      </div>
      <hr style={{ borderTop: " 8px dashed #FFFFFF" }} />
      <div style={{ display: "flex", alignItems: "center", marginTop: "3px" }}>
        <PhoneIcon
          sx={{ color: "#C92A2A", fontSize: 55, mt: 2, mr: 5, ml: 2 }}
        />
        <Typography variant="h6" textAlign={"center"} sx={{ mr: 3, ml: 2 }}>
          123-4567-8910
        </Typography>
      </div>
      <hr style={{ borderTop: " 8px dashed #FFFFFF" }} />
      <div style={{ display: "flex", alignItems: "center", marginTop: "3px" }}>
        <LanguageIcon
          sx={{ color: "#C92A2A", fontSize: 55, mt: 3, mr: 5, ml: 2, mb: 2 }}
        />
        <Typography variant="h6" textAlign={"center"} sx={{ mr: 3, ml: 2 }}>
          GearUpGarage.com
        </Typography>
      </div>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, #F47F8F 40%, rgba(0,0,0,0) 20%)",
          zIndex: -20,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width="90%" maxWidth="500px">
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "#272525",
              color: "white",
              borderRadius: "8%",
            }}
          >
            {card}
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: "5%",
          zIndex: 30,
        }}
      >
        <LensBlurIcon sx={{ color: "white", fontSize: 200 }} />
      </Box>{" "}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          zIndex: 30,
        }}
      >
        <LensBlurIcon sx={{ color: pink[200], fontSize: 200 }} />
      </Box>
    </>
  );
}
