import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Img1 from "./photos/ph2.png";
import Img2 from "./photos/ph1.png";
import Img3 from "./photos/ph3.png";
import Img4 from "./photos/ph4.png";
import Img5 from "./photos/ph5.png";
import Img6 from "./photos/ph6.png";

function Main() {
  return (
    <>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardContent sx={{ flex: 1, mt: 3 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Dent & Paint
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Dent and paint car service provides expert solutions for restoring
              vehicle's exterior, using advanced techniques and top-quality
              materials to enhance appearance and durability.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 360,
              height: 220,
              display: { xs: "none", sm: "block" },
            }}
            image={Img1}
            alt="img"
          />
        </Card>
      </Grid>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardMedia
            component="img"
            sx={{
              width: 360,
              height: 220,
              display: { xs: "none", sm: "block" },
              mr: 3,
            }}
            image={Img2}
            alt="img"
          />
          <CardContent sx={{ flex: 1, mt: 3, maxWidth: "60%" }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Diagnostics
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Car diagnostic services use advanced technology to identify
              vehicle issues accurately by connecting diagnostic tools to the
              onboard computer. This process helps diagnose engine and
              electrical problems for efficient and safe repairs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardContent sx={{ flex: 1, mt: 3 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Oil/Lube/filters
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Oil/lube/filter services by expert technicians ensure engine
              health by replacing old oil, lubricating components, and
              installing fresh filters, promoting smooth operation and reducing
              repair costs.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 360,
              height: 220,
              display: { xs: "none", sm: "block" },
            }}
            image={Img3}
            alt="img"
          />
        </Card>
      </Grid>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardMedia
            component="img"
            sx={{
              width: 360,
              height: 220,
              display: { xs: "none", sm: "block" },
              mr: 3,
            }}
            image={Img4}
            alt="img"
          />
          <CardContent sx={{ flex: 1, mt: 3, maxWidth: "60%" }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Brakes
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Brake services by expert technicians ensure safe vehicle stops by
              inspecting, repairing, and replacing components, using quality
              parts, and enhancing driving safety.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardContent sx={{ flex: 1, mt: 3 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Suspension
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Suspension car services involve expert technicians diagnosing and
              repairing issues related to your vehicle's suspension system,
              including shocks, struts, and springs, to ensure smooth,
              comfortable, and safe driving.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 360,
              height: 220,
              display: { xs: "none", sm: "block" },
            }}
            image={Img5}
            alt="img"
          />
        </Card>
      </Grid>
      <Grid item xs={10} md={3}>
        <Card sx={{ display: "flex", mt: 9, ml: 5, mr: 5 }} variant="none">
          <CardMedia
            component="img"
            sx={{
              width: 420,
              height: 220,
              display: { xs: "none", sm: "block" },
              mr: 3,
            }}
            image={Img6}
            alt="img"
          />
          <CardContent sx={{ flex: 1, mt: 3, mr: 3, maxWidth: "60%" }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Detailing
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Detailing car service involves skilled professionals meticulously
              cleaning, polishing, and protecting every surface of your vehicle,
              restoring its interior and exterior to a pristine condition.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Main;
