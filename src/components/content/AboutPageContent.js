import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  switchOrder1: {
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  switchOrder0: {
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      order: 0,
    },
  },
  stepContainer: {
    marginBottom: theme.spacing(4),
  },
  media: {
    height: "400px",
  },
  cardRoot: {
    borderRadius: 0,
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  const content = {
    image1:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626531895/atikah-akhtar-XJptUS8nbhs-unsplash_kifxah.jpg",
    step1:
      "You can be confident that you are getting the best dentistry available",
    "step1-desc":
      "It is hard to decide which dental practice and dentist to put your trust in. At Farhad Dental Care we want to help take the stress out of this decision. You can be confident that when you are choosing Farhad Dental Care you are choosing quality, trusted dentists who use the latest techniques and technologies to deliver you the best dentistry possible. ",
    "step1-desc2":
      "Many dentists and businesses make claims that they are the best or greatest, but at Farhad Dental Care we didn’t want to make unfounded claims so we let our awards do the talking for us.",
    image2:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626531902/caroline-lm--m-4tYmtLlI-unsplash_srv4ea.jpg",
    step2: "Fear of the Dentist is Nonexistent at Farhad Dental Care",
    "step2-desc":
      "Patient anxiety immediately melts away at the entrance, distracted by stanchions and the red carpet rolling right up to the welcoming reception desk. Both new patients and returning members of the Farhad Dental “family” are quickly embraced by a spa-like aura of wellness that immediately envelops them.",
    "step2-desc2":
      "The Farhad Dental reception area is the “Oasis” of the Preserve. Spacious, contemporary, uncluttered and comfortable, it is replete with hot and cold beverages, but one does not long linger admiring the décor; the team is dedicated to punctuality and patients are generally seen for dental treatment right on time.",
    image3:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626531910/marcel-scholte-LPurJnihmQI-unsplash_b7bl3k.jpg",
    step3: "Art & Science meet your Smile at Farhad Dental Care",
    "step3-desc":
      "Ongoing education and research propels innovation at Farhad Dental Care. Dr. Farhad is driven to consistently seek the emerging science that provides patients with the best dental solutions possible, but he is equally dedicated to esthetics. Patient satisfaction is “key” at Farhad Dental Care and this team understands that today’s discerning patients require not just healthy dental function, but also smiles that are natural, facially appropriate and attractive.",
    "step3-desc2":
      " The best smiles are distinctive for every patient. They require conversation, planning, and the mutuality between doctor and patient that results in everyone’s expectations being precisely met.",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={15} pb={10}>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6}>
              <Card className={classes.cardRoot}>
                <CardMedia
                  className={classes.media}
                  image={content["image1"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    color="primary"
                    variant="h4"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step1-desc"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step1-desc2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6} className={classes.switchOrder1}>
              <Card className={classes.cardRoot}>
                <CardMedia
                  className={classes.media}
                  image={content["image2"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    align="left"
                    color="primary"
                    variant="h4"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step2"]}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step2-desc"]}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step2-desc2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card className={classes.cardRoot}>
                <CardMedia
                  className={classes.media}
                  image={content["image3"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    color="primary"
                    variant="h4"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step3"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step3-desc"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step3-desc2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
