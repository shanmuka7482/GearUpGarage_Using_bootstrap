import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import img1 from "../photos/advantages/f1.png";
import img2 from "../photos/advantages/f2.png";
import img3 from "../photos/advantages/f3.png";
import img4 from "../photos/advantages/f4.png";

const images = [
  {
    url: img1,
    title: "Authentic OEM Products",
    discription: "Dependable and Authentic Parts at Affordable Prices.",
    width: "30%",
  },
  {
    url: img2,
    title: "Fair and Transparent Pricing",
    discription: "Clear On-Call Quotations",
    width: "25%",
  },
  {
    url: img3,
    title: "Cutting-Edge Workshop",
    discription: "very skilled service personnel ",
    width: "25%",
  },
  {
    url: img4,
    title: "Door Step Quick Service ",
    discription: "set-up and drop-off locations ",
    width: "20%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 5,
          fontFamily: "sans-serif",
          letterSpacing: "2px",
          fontSize: "1.725rem",
        }}
        color={"#434454"}
      >
        ▶ Advantages of GearUpGarage
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          mb: 6,
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <br />
                {image.discription}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </>
  );
}
