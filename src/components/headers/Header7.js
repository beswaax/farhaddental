import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#fffff",
    backgroundImage: `url("/assets/1.jpg")`,
  },
  primaryAction: {
    borderRadius: 0,
    fontWeight: 500,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[700],
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey[700],
    },
  },
  secondaryAction: {
    borderRadius: 0,
    fontWeight: 500,

    backgroundColor: "#222222",
    color: "white",
    "&:hover": {
      backgroundColor: "#222222",
      color: "white",
    },
  },
  span: {
    color: theme.palette.primary.dark,
  },
  img: {
    maxWidth: "100%",
    borderTopLeftRadius: 125,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: 80,
      borderBottomRightRadius: 80,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  },
  title: {
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  description: {
    fontWeight: 400,
  },
  link: {
    border: "1px solid lightgray",
    padding: 8,
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  gridItem: {
    backgroundColor: "rgba(67, 179, 163, 0.6)",
    padding: 30,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Canada's Most Awarded Dental Practice",
    // "header-p2": "reliable",
    // "header-p3": "accounting firm",

    "primary-action": "Appointment",
    "secondary-action": "Call Us",
    image: "/assets/15.jpg",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className={classes.section}>
      <Container maxWidth={matchesSM ? "sm" : "lg"}>
        <Box
          pt={matchesXS ? 10 : matchesSM ? 15 : matchesMD ? 20 : 25}
          pb={matchesXS ? 10 : matchesSM ? 15 : matchesMD ? 20 : 25}
        >
          <Grid justify="center" alignItems="center" container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box display="flex" height="100%" className={classes.gridItem}>
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography
                      align="center"
                      variant="h2"
                      component="h2"
                      gutterBottom={true}
                    >
                      <Typography
                        align="center"
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p1"]}{" "}
                      </Typography>
                    </Typography>

                    <Box mt={3}>
                      <Grid
                        container
                        alignItems="center"
                        justify="center"
                        spacing={1}
                      >
                        <Grid item>
                          <Button
                            align="center"
                            disableRipple
                            disableTouchRipple
                            variant="contained"
                            href="https://calendly.com/samuelclintoc99/30min"
                            target="_blank"
                            className={classes.primaryAction}
                          >
                            {content["primary-action"]}
                          </Button>
                        </Grid>

                        <Grid item>
                          <Button
                            align="center"
                            disableRipple
                            disableTouchRipple
                            variant="contained"
                            href="tel:+4915901954867"
                            className={classes.secondaryAction}
                          >
                            {content["secondary-action"]}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
