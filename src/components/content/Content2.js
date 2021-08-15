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
    "header-p1":
      "We care deeply about helping patients to achieve better oral-health.",
    description:
      "Whatever your dental needs, you have come to the right place, as we offer a complete range of dentistry from emergency appointments to deal with a nasty toothache or a broken tooth to cosmetic dentistry, children’s dentistry, teeth whitening, dental implants and smile makeovers.",
    description2:
      "Our dental practice has the most up-to-date equipment, dental technology, facilities, and a caring and professional team to enhance your comfort and the quality of treatment.",
    "primary-action": "Learn More",
    image: "/assets/doc1.jpg",
    ...props.content,
  };
  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={matchesSM ? 5 : 15} pb={matchesSM ? 5 : 15}>
          <Grid container spacing={2}>
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
            <Grid item md={1} xs={0}></Grid>

            <Grid item xs={12} md={5} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a highway with skylines in the background"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
