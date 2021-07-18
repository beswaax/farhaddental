import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { Avatar, Button, useTheme } from "@material-ui/core";

import { FaTooth, FaAward } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: theme.spacing(1),
    color: theme.palette.darkBlue.main,
  },
  iconWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 300,
    color: theme.palette.common.black,
  },
  description: {
    fontWeight: 400,
  },
  section: {
    // backgroundColor: theme.palette.grey[50],
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 30,
  },
  titleOfSub: {
    fontWeight: 500,
  },
  gridContainer: {
    borderRadius: 6,
    padding: 45,
    backgroundColor: "white",
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    title: "OUR PROMISES TO YOU",
    "col1-header": "5 Year warranty on major dentistry",
    "col2-header": "Same day emergency dental guarantee",
    "col3-header": "Your best ever dental experience",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pb={10}>
          <Box pb={3}>
            <Typography align="center" variant="h5" className={classes.title}>
              {content.title}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <FaAward
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h4"
                  gutterBottom={true}
                >
                  {content["col1-header"]}
                </Typography>
                <Button>{content.button}</Button>
              </Box>
            </Grid>

            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <FaTooth
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["col2-header"]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {content["col2-desc"]}
                </Typography>
              </Box>
            </Grid>

            <Grid align="center" item xs={12} md={4}>
              <Box className={classes.gridContainer}>
                <Box pb={2}>
                  <Avatar className={classes.iconWrapper} variant="rounded">
                    <BsFillPersonFill
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Avatar>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["col3-header"]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {content["col3-desc"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
