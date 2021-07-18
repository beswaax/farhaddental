import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useMediaQuery, useTheme } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage:
      "linear-gradient(90deg,rgba(67, 179, 163, 0.84) 8%,rgba(67, 179, 163, 0.84) 100%,rgba(67, 179, 163, 0.84) 95%,rgba(67, 179, 163, 0.84)), url('https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/quang-tri-nguyen-VckdJzo7ig0-unsplash_1_nbhcdn.jpg')",
  },
  logo: {
    height: 48,
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    maxHeight: 128,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[50],
    border: 0,
  },
  title: {
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  button: {
    borderRadius: 0,
    paddingTop: 7,
    fontWeight: 600,

    paddingBottom: 7,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      textDecoration: "none",
    },
  },
  button2: {
    borderRadius: 0,
    border: "2px solid white",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    transition: "background-color 0.2s ease-in-out, colo 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[900],

      textDecoration: "none",
    },
  },
}));

export default function Testimonials({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={5}>
          <Grid
            direction="column"
            container
            spacing={2}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography
                  align="center"
                  variant="h3"
                  component="h2"
                  gutterBottom={true}
                >
                  <Typography
                    align="center"
                    color="primary"
                    variant="h4"
                    className={classes.title}
                    component="span"
                  >
                    {content["header-p1"]}
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pr={1}>
                  <Button
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    variant="contained"
                    href="/about"
                    color="secondary"
                    className={classes.button}
                    endIcon={<ChevronRightIcon />}
                  >
                    {content.button1}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
