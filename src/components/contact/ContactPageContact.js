import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Snackbar,
  useMediaQuery,
  Card,
  CardMedia,
  Hidden,
} from "@material-ui/core";

import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  cardMedia: {
    height: 512,

    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 768,
    width: "100%",
  },
  title: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
  description: {
    fontWeight: 400,
  },
  container: {},
  contactWrapper: {
    backgroundColor: theme.palette.common.white,
  },
  iconWrapper: {
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    color: theme.palette.common.white,
  },
  TextField: {
    marginBottom: "1rem",
    [`& fieldset`]: {
      borderRadius: 0,
    },
  },
  link: {
    textDecoration: "none",
    color: [theme.palette.text.secondary],
    "&:hover": {
      textDecoration: "none",
      color: [theme.palette.primary.main],
    },
  },
  button: {
    borderRadius: 0,
  },
  card: {
    borderRadius: 0,
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your Name")
    .min(2, "Enter a valid name")
    .required("Name is required"),

  message: yup
    .string("Enter your Message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Message is required"),
});

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleClose = (event, reason) => {
    setAlert({ message: "", backgroundColor: "", open: false });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .get("http://localhost:3003/api/email/contactBasic", {
          params: {
            email: values.email,
            name: values.name,
            message: values.message,
          },
        })
        .then((res) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: theme.palette.success.main,
          });
        })
        .catch((error) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Something went wrong, please try again later.",
            backgroundColor: theme.palette.warning.main,
          });
          console.error(error);
        });
    },
  });

  const content = {
    header: "How can we help?",
    description:
      "We're here to answer your questions and be as helpful as possible.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Send Message",

    image: "/assets/1B.jpg",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Box pt={10}>
        <Container maxWidth="lg">
          <Grid container className={classes.container} alignItems="center">
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    image="/assets/1B.jpg"
                    className={classes.cardMedia}
                    alt="image of a highway with skylines in the background"
                  />
                </Card>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box
                pt={10}
                pb={5}
                display="flex"
                className={[classes.halfLg, classes.firstBox]}
              >
                <Container>
                  <Box mb={4}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="h2"
                      gutterBottom={true}
                    >
                      {content["header"]}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      paragraph={true}
                      className={classes.description}
                    >
                      {content["description"]}
                    </Typography>
                  </Box>

                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      fullWidth
                      className={classes.TextField}
                      variant="outlined"
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                      fullWidth
                      className={classes.TextField}
                      variant="outlined"
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                      className={classes.TextField}
                      multiline
                      variant="outlined"
                      id="message"
                      name="message"
                      label="Message"
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                      fullWidth
                    />

                    <Button
                      type="submit"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                      disableElevation
                      variant="raised"
                      className={classes.button}
                      color="primary"
                      variant="contained"
                    >
                      {content["primary-action"]}
                    </Button>
                  </form>
                </Container>
              </Box>
            </Grid>
          </Grid>
          <Snackbar
            open={alert.open}
            autoHideDuration={4000}
            onClose={handleClose}
            message={alert.message}
            ContentProps={{
              style: { backgroundColor: alert.backgroundColor },
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </Container>

        <Container maxWidth="lg">
          <Box pt={5}>
            <div
              style={{
                padding: 0,
                width: "100%",
                height: matchesXS ? "25rem" : matchesSM ? "30rem" : "35rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.727433548503!2d-79.39334068450017!3d43.71621317911919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b332803b7f675%3A0xd3775efa248366c1!2s299%20Sheldrake%20Blvd%2C%20Toronto%2C%20ON%20M4P%202B7%2C%20Canada!5e0!3m2!1sen!2sde!4v1626613265438!5m2!1sen!2sde"
                style={{
                  border: 0,
                  width: "100%",
                  height: "70%",
                }}
                aria-hidden="false"
                loading="lazy"
              />{" "}
            </div>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
