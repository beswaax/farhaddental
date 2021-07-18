import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  header: {
    marginBottom: "1rem",
    color: theme.palette.primary.dark,
  },
}));

export default function Content({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={18}>
          <Grid container spacing={8}>
            {" "}
            <Grid item xs={12} md={6}>
              <Card style={{ borderRadius: 0 }}>
                <CardMedia image={content["image"]} className={classes.card} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    color="primary"
                    component="h3"
                    gutterBottom={true}
                    variant="h3"
                    className={classes.header}
                  >
                    {content["header-p1"]}{" "}
                  </Typography>
                  <Typography
                    color="primary"
                    component="h3"
                    gutterBottom={true}
                    variant="h3"
                    className={classes.header}
                  >
                    {content["header-p2"]}{" "}
                  </Typography>
                  <Typography
                    color="primary"
                    component="h3"
                    gutterBottom={true}
                    variant="h3"
                    className={classes.header}
                  >
                    {content["header-p3"]}{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Box pt={matchesSM ? 5 : matchesMD ? 5 : 7}>
                    <Typography
                      color="primary"
                      component="h3"
                      gutterBottom={true}
                      variant="h4"
                      className={classes.header}
                    >
                      {content["header-p4"]}{" "}
                    </Typography>{" "}
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      paragraph={true}
                    >
                      {content["description2"]}{" "}
                    </Typography>
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
