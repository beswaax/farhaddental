import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#E8F3F3",
  },
  switchOrder1: {
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  switchOrder0: {
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      order: 0,
    },
  },
  stepContainer: {
    marginBottom: theme.spacing(4),
  },
  media: {
    height: "256px",
  },
  card: {
    borderRadius: 0,
  },
  title: {
    color: theme.palette.grey[900],
    fontWeight: 500,
  },
  title2: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export default function HowItWorks({ content }) {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="sm">
        {/* <Box pt={8} textAlign="center">
          <Typography
            variant="h4"
            className={classes.title}
            component="h2"
            gutterBottom={true}
          >
            {content["02_header"]}
          </Typography>
        </Box> */}
      </Container>
      <Container maxWidth="md">
        <Box pt={8} pb={10}>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image1"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    className={classes.title2}
                    c
                    variant="h5"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["step1-desc"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6} className={classes.switchOrder1}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image2"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    className={classes.title2}
                    c
                    align="left"
                    variant="h5"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step2"]}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["step2-desc"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image3"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="h5"
                    className={classes.title2}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step3"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["step3-desc"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
