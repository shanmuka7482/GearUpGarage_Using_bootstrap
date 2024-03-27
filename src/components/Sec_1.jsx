import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
}));

const WhyChooseUsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ paddingBottom: "45px" }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4} justify="center">
          {/* Points */}
          {[
            {
              title: "Convenience at Your Doorstep",
              description:
                "We provide convenient automotive services that come to you, saving you time and making it hassle-free.",
            },
            {
              title: "Skilled technicians, great service.",
              description:
                "Our highly skilled and certified technicians ensure top-notch service with every visit.",
            },
            {
              title: "Transparency and Trust",
              description:
                "We believe in transparent pricing and operations, so you know precisely what you're paying for.",
            },
            {
              title: "Reliability",
              description:
                "You can count on us to be on time and to respond to your questions right away.",
            },
          ].map((point, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    {point.title}
                    <br />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {point.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
