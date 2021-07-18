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

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": "Farhad Dental Care, your trusted Toronto Dentists.",
    description:
      "With a compassionate team approach, skill and experience, and “Red Carpet” patient treatment, we blend the newest methodologies with genuine compassion to build, rebuild or simply tune the most natural looking smiles possible. Our dentists and hygienists aim to deliver you the highest quality of dentistry, and we stand behind our work.",
    description2:
      "Our state-of-the-art dental implant center is equipped with technology and comforts to provide every patient with an exceptional experience and consistently successful outcomes.",
    "primary-action": "Learn More",
    image: "/assets/doc2.jpg",
    ...props.content,
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
                  alt="image of a highway with skylines in the background"
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
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      className={classes.action}
                      href="/about"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
