import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonBase } from "@material-ui/core";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    backgroundColor: "rgba(67, 179, 163, 0.6)",
    padding: 30,
    minHeight: 200,
    [theme.breakpoints.down("sm")]: {
      minHeight: 70,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 50,
    },
  },
  title: {
    color: theme.palette.common.white,
  },
  title2: {},
  buttonTypography: {
    fontWeight: 400,
    color: theme.palette.grey[800],
    transition: "color 0.4s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

export default function Features() {
  const classes = useStyles();

  const services = [
    {
      title: "Preventive Care",
      url: "services/1",
      description:
        "From time to time, it is useful to take a fresh look at a corporate structure to determine whether every available tax-planning opportunity has been employed. This exercise is worthwhile every few years because circumstances and laws change, yielding new opportunities.",
      img: "hello",
      id: 0,
    },
    {
      title: "Restorative Care",
      url: "services/2",
      description:
        "We have developed an understanding of e-commerce technology and have spoken and written extensively on the tax issues involved in e-commerce. We can advise existing businesses as well as new ventures on the feasibility of setting up international structures. ",
      img: "hello",
      id: 1,
    },
    {
      title: "Dental Implants",
      url: "services/3",
      description:
        "We frequently develop tax-planning strategies for high net worth families. We attempt to minimize their current taxes and develop a long-term strategic tax plan that will minimize their taxes on and after retirement.",
      img: "hello",
      id: 2,
    },
    {
      title: "Advanced Dentistry",
      url: "services/4",
      description:
        "We take time to nurture your business because if you grow, we grow! We look at areas such as your profitability and accounting function, accounting compliance, and the directors’ own tax positions and strategies for the future",
      img: "hello",
      id: 3,
    },
    {
      title: "Cosmetic Dentistry",
      url: "services/5",
      description:
        "Use our professional and confidential service to ensure you have accurate, up-to-date information at your fingertips. Real-time data will allow you to make better decisions as you grow your business.",
      img: "hello",
      id: 4,
    },
    {
      title: "Surgical Procedures",
      url: "services/6",
      description:
        "A successful real estate company needs more than just experienced agents. Like any business, the hub of the business requires excellent management and brokerage budgeting. Any licensed broker must able to identify market trends and ensure that their brokerage is running efficiently.",
      img: "hello",
      id: 5,
    },
  ];

  const content = {
    title: "Our Services",
    button: "Learn More",
  };

  return (
    <section>
      <Box my={10}>
        <Container maxWidth="lg">
          <Box pb={8}>
            <Typography
              component="h3"
              align="center"
              color="primary"
              variant="h4"
              className={classes.title2}
            >
              {content.title}
            </Typography>{" "}
          </Box>
          <Grid container alignItems="center" justify="center" spacing={2}>
            {services.map((service) => (
              <Grid item md={4} sm={6} xs={12}>
                <Box className={classes.boxContainer}>
                  <Box>
                    <Grid container direction="column" spacing={10}>
                      <Grid item xs={6}>
                        <Typography
                          component="h4"
                          variant="h4"
                          className={classes.title}
                        >
                          {service.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          className={classes.buttonTypography}
                          variant="h6"
                          color="textSecondary"
                          component={Link}
                          href={service.url}
                        >
                          {content.button}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
