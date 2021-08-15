import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    // backgroundColor: theme.palette.primary.main,
  },
  cardMedia: {
    height: 512,

    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  title: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  action: {
    borderRadius: 0,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Content({ content1 }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": content1.title,
    description: content1.description,
    description2: content1.description2,
    image: content1.image,
  };
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={matchesSM ? 5 : 15} pb={matchesSM ? 5 : 15}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a dentistry"
                />
              </Card>
            </Grid>
            <Grid item md={1} xs={0}></Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="h4"
                    >
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
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
