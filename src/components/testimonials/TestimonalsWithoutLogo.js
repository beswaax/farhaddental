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

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
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
    color: theme.palette.primary.dark,
  },
  button: {
    borderRadius: 0,
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    description:
      "The only thing 'routine' at Farhad Dental Care is the pursuit of excellence. We don't settle for anything less than perfect.",
    button1: "Book Consultation",
    button2: "Learn More",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box pt={3} pb={5}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="h5"
                  paragraph={true}
                  className={classes.decription}
                >
                  {content["description"]}
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                  <Box>
                    <Button
                      disableRipple
                      disableTouchRipple
                      className={classes.button}
                      variant="outlined"
                      href="https://calendly.com/samuelclintoc99/30min"
                      target="_blank"
                      color="primary"
                    >
                      {content.button1}
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
