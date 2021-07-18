import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  sectionbg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  section: {
    paddingTop: "5%",
    paddingBottom: "5%",
    transformStyle: "preserve-3d",
    backfaceisibility: "hidden",

    [theme.breakpoints.down("md")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20%",
      paddingBottom: "20%",
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "100%",
  },

  title: {
    color: theme.palette.primary.main,
    fontWeight: 400,
  },

  boxContainer: {
    maxWidth: "18rem",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
}));

const PageHeader = ({ title, bg }) => {
  const classes = useStyles();

  const content = {
    "header-p1": title,
  };

  return (
    <section
      className={classes.sectionbg}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container maxWidth="lg" className={classes.section}>
        <Box pt={6} pb={6}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Box height="100%" data-aos="fade-up">
                <Box my="auto">
                  <Container className={classes.boxContainer}>
                    <Typography
                      align="center"
                      variant="h3"
                      component="h2"
                      gutterBottom={true}
                    >
                      <Typography
                        align="center"
                        className={classes.title}
                        variant="h3"
                        component="span"
                      >
                        {content["header-p1"]}
                      </Typography>
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PageHeader;
