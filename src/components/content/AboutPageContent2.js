import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    // backgroundColor: theme.palette.primary.main,
  },
  cardMedia: {
    height: 512,

    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  title: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
  action: {
    borderRadius: 0,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  badge: {
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    badge: "Meet our founder",
    "header-p1": "Dr. Farhad Amuhabi",
    description:
      "Dr. Farhad's passion for dental excellence is fueled by intensive training, vast experience in multiple facets of dental care and the testimonies of countless patients. His philosophy, clearly manifested in his welcoming dental care center, promises the consistent delivery of comprehensive care with exclusive personalization for every individual patient.",
    description2:
      "Dr. Farhad continues to avidly pursue knowledge, methods and state of the art solutions for his patients. Always seeking the most innovative scientifically proven treatment modalities, he aligned himself with global giants in implant development and traveled extensively in pursuit of the technology needed to offer the highest quality of care available.",
    description3:
      "A dedicated family man, Dr. Farhad takes time from his busy practice to enjoy traveling, kayaking and golfing with his wife and four children, while still continuing to prize personal fitness and community service.",
    "primary-action": "Learn More",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626532827/jonathan-borba-Yui-VjmS8AA-unsplash_scdjmi.jpg",
    ...props.content,
  };
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={15} pb={matchesSM ? 5 : 15}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography className={classes.badge} variant="subtitle2">
                    {content.badge}
                  </Typography>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="h4"
                    >
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={1} xs={0}></Grid>

            <Grid item xs={12} md={5} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a doctor"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
