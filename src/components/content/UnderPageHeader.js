import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import { Parallax, Background } from "react-parallax";
import { ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionbg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E8F3F3",
  },

  section: {
    paddingTop: "3%",
    paddingBottom: "3%",
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

  title: {
    color: "#2a2a2a",
    fontWeight: 400,
  },
  text: {
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  button: {
    backgroundColor: "#222222",
    borderRadius: 0,
  },
  boxContainer: {
    maxWidth: "18rem",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
}));

const PageHeader = ({ title, buttonTrue }) => {
  const classes = useStyles();

  const content = {
    "header-p1": title,
    button: "Book Consultation",
  };

  return (
    <section className={classes.sectionbg}>
      <Container maxWidth="lg" className={classes.section}>
        <Box pt={1} pb={1}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            <Grid item xs={12}>
              <Box height="100%" data-aos="fade-up">
                <Box>
                  <Container maxWidth="lg">
                    <Box>
                      <Typography
                        align="center"
                        variant="h5"
                        component="h2"
                        gutterBottom={true}
                      >
                        <Typography
                          align="center"
                          className={classes.title}
                          variant="h5"
                          component="h2"
                        >
                          {content["header-p1"]}
                        </Typography>
                      </Typography>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            {buttonTrue ? (
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  href="https://calendly.com/samuelclintoc99/30min"
                  target="_blank"
                  color="primary"
                >
                  <Typography variant="body1" className={classes.text}>
                    {content.button}
                  </Typography>
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PageHeader;
