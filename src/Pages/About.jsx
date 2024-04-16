import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Img from "../photos/about.jpg";

const About = () => {
  return (
    <>
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
          About Me
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "50%", textAlign: "left", pl: 8,pt:5}}>
        <Typography variant="h5" sx={{ pb: 1 }}>
          Welcome to Gear Up Garage
        </Typography>
        <Typography variant="body1">
          Gear Up Garage offers a wide range of automotive services, including
          routine maintenance, diagnostics, and emergency repairs, with a
          skilled network of technicians.
        </Typography>
        <br />
        <Typography variant="h5" sx={{ pb: 1 }}>
          Our Story
        </Typography>
        <Typography variant="body1">
          Gear Up Garage, founded by automotive enthusiasts, simplifies vehicle
          maintenance and repair by empowering users to take control of their
          vehicle's care.
        </Typography>
        <br />
        <Typography variant="h5" sx={{ pb: 1 }}>
          Why Choose Us
        </Typography>
        <Typography variant="body1" sx={{ pb: 1.5 }}>
          <b>Convenience: </b>With Gear Up Garage, you can conveniently schedule
          motor servicing or repairs at your convenience, whether at home, work,
          or on the road.
        </Typography>
        <Typography variant="body1" sx={{ pb: 1.5 }}>
          <b>Expertise:</b> Our mechanics are highly trained and certified to
          provide top-quality service to ensure your vehicle's safety and
          comfort.
        </Typography>
        <Typography variant="body1" sx={{ pb: 1.5 }}>
          <b>Transparency:</b> We prioritize transparent and honest
          communication, providing detailed explanations of work performed and
          upfront pricing to ensure your satisfaction throughout the process.
        </Typography>
        <Typography variant="body1">
          <b>Reliability:</b> Gear Up Garage ensures your vehicle's safety and
          satisfaction by providing reliable service and a commitment to quality
          work.
        </Typography>
        <br />
        <Typography variant="h5" sx={{ pb: 1 }}>
          What We Offer
        </Typography>
        <Typography variant="body1">
          Gear Up Garage offers a wide range of automotive services, including
          routine maintenance, diagnostics, and emergency repairs, with a
          skilled network of technicians.
        </Typography>
        <br />
        <Typography variant="h5" sx={{ pb: 1 }}>
          Get in Touch
        </Typography>
        <Typography variant="body1">
          Contact us today to schedule an appointment or learn more about our
          mobile automotive repair services for convenience and smooth vehicle
          operation.
        </Typography>
      </Box>
    </>
  );
};

export default About;
