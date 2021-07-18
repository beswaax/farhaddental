import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100%",
    height: "356px",
    marginBottom: theme.spacing(2),
    borderRadius: 0,
  },
  title: {
    fontWeight: 500,
    color: "#2a2a2a",
  },

  section: {
    backgroundColor: theme.palette.grey[50],
  },
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Meet the Team",
    persons: [
      {
        image: "/assets/expert/1.jpg",
        name: "Kiran Ravi",
        job: "Registered Dental Hygienist",
      },
      {
        image: "/assets/expert/4.jpg",
        name: "Caitlin Flann",
        job: "Certified Dental Assistant",
      },
      {
        image: "/assets/expert/3.jpg",
        name: "Harshad Jayant",
        job: "Certified Dental Assistant",
      },
      {
        image: "/assets/expert/2.jpg",
        name: "Meriem Khadija",
        job: "Dental Assistant",
      },
      {
        image: "/assets/expert/5.jpg",
        name: "Alexander Stone",
        job: "Dental Assistant",
      },
      {
        image: "/assets/expert/6.jpg",
        name: "Conrad Kody",
        job: "Dental Hygienist",
      },
      {
        image: "/assets/expert/7.jpg",
        name: "Rowena Deena",
        job: "Dental Hygienist",
      },
      {
        image: "/assets/expert/8.jpg",
        name: "Kynaston Tate",
        job: "Receptionist",
      },
      {
        image: "/assets/expert/9.jpg",
        name: "Fenella Beitris",
        job: "Receptionist",
      },
    ],
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={13} pb={14}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
              <Typography
                className={classes.title}
                variant="h4"
                component="h2"
                gutterBottom={true}
              >
                {content["header-p1"]}{" "}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={9}>
            {content.persons.map((person, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={i}
                className={classes.gridContainer}
              >
                <Avatar
                  alt="hello mate"
                  variant="rounded"
                  src={person.image}
                  className={classes.avatar}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom={true}
                    className={classes.title}
                  >
                    {person.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="span"
                  >
                    {person.job}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
