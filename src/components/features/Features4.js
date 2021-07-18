import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";

import Link from "../../Link";

import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import AssignmentLateOutlinedIcon from "@material-ui/icons/AssignmentLateOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import DeckOutlinedIcon from "@material-ui/icons/DeckOutlined";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.grey[50],
  },
  iconWrapper: {
    backgroundColor: theme.palette.grey[200],
    padding: 15,
    borderRadius: 50,
    border: `0.5px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.primary.dark,
  },
  icon1: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.primary.dark,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    textDecoration: "none",
    transition: "color 0.15s ease-in",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const [inOrNot, setInOrNot] = useState(false);

  const content = [
    {
      title: "Corporate Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: AcUnitOutlinedIcon,
    },
    {
      title: "International Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: AddCircleOutlineOutlinedIcon,
    },
    {
      title: "Personal Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: AssignmentLateOutlinedIcon,
    },
    {
      title: "E-Commerce Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: BuildOutlinedIcon,
    },
    {
      title: "China & US Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: DeckOutlinedIcon,
    },
    {
      title: "Real Estate Tax",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of",
      icon: InputOutlinedIcon,
    },
  ];

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={15}>
          <Box pb={8}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <div>
                <Typography
                  align="center"
                  variant="body1"
                  component="p"
                  className={classes.description}
                  color="primary"
                >
                  Area of Practice
                </Typography>
                <Typography
                  align="center"
                  variant="h4"
                  component="h3"
                  className={classes.title}
                  gutterBottom={true}
                >
                  How Can We Help You
                </Typography>
              </div>
            </Grid>
          </Box>
          <Grid container spacing={10}>
            {content.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <service.icon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography
                        variant="h6"
                        component={Link}
                        href="/"
                        className={classes.title}
                        gutterBottom={true}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.description}
                        color="textSecondary"
                      >
                        {service.description}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
