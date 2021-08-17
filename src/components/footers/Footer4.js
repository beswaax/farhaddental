import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridItem: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  footerLink: {
    marginBottom: theme.spacing(2),
    color: "#2a2a2a",
    fontWeight: 400,
    // "&:hover": {
    //   textDecoration: "none",
    // },
  },
  footerLinkalt: {
    color: theme.palette.common.black,
  },
  footerCopy: {
    borderTop: "1px solid grey",
    borderTopStyle: "solid",
  },
  copy: {
    color: theme.palette.common.black,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  icon: {
    marginRight: "0.3rem",
    color: theme.palette.grey[300],
  },
  icons: {
    color: theme.palette.grey[400],
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  footer: {
    backgroundColor: theme.palette.common.white,
  },
  title: {
    color: theme.palette.primary.dark,
  },
  anchor: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const content = {
    brand: { image: "/assets/logo1/vector/default-monochrome.svg", width: 190 },
    copy: "© 2021 Farhad Dental Care.",
    copy2: "All rights reserved.",
    header1: "Services",
    header2: "Quick Links",
    link1: "Home",
    link2: "About",
    link3: "Contact",
    link4: "Consultation",
    link5: "Privacy Policy",
    link6: "Terms of Use",
    link7: "Preventive Care",
    link8: "Restorative Care",
    link9: "Dental Implants",
    link10: "Advanced Dentistry",
    link11: "Cosmetic Dentistry",
    link12: "Surgical Procedures",
    email: "info@farhaddental.com",
    fax: "416-555-0130",
    tel: "416-555-0130",
    address1: "299 Sheldrake Blvd",
    address2: "Toronto ON",
    address3: "M4P 2B7",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box
          pt={6}
          pb={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="/" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              justify={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              alignItems={
                matchesXS ? "space-between" : matchesSM ? "center" : "inherit"
              }
              spacing={2}
            >
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header1}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/services/1"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link7"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/2"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link8"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/services/3"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link9"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="services/4"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link10"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="services/5"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link11"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="services/6"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link12"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid item className={classes.gridItem}>
                <Box color="secodary">
                  <Typography variant="h6" className={classes.title}>
                    {content.header2}
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="/home"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link1"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/about"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link2"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/contact"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link3"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="https://calendly.com/samuelclintoc99/30min"
                    target="_blank"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link4"]}
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/about"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link5"]}
                  </Link>
                </Box>{" "}
                <Box>
                  <Link
                    href="/about"
                    variant="body2"
                    className={classes.footerLink}
                  >
                    {content["link6"]}
                  </Link>
                </Box>
              </Grid>{" "}
              <Grid
                item
                className={classes.gridItem}
                style={{ paddingTop: "0.9rem" }}
              >
                <Box pb={matchesSM ? 0.5 : matchesMD ? 1 : 2}>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address1}
                  </Typography>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address2}
                  </Typography>
                  <Typography variant="body2" className={classes.footerLinkalt}>
                    {content.address3}
                  </Typography>
                </Box>
                <Box>
                  <Grid container>
                    {/* <Grid item>
                      <EmailOutlined className={classes.icon} />
                    </Grid> */}
                    <Grid item>
                      <Typography
                        variant="body2"
                        className={classes.footerLinkalt}
                      >
                        {content.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container>
                    {/* <Grid item>
                      <PhoneOutlined className={classes.icon} />
                    </Grid> */}
                    <Grid item>
                      <Typography
                        className={classes.footerLinkalt}
                        variant="body2"
                      >
                        {content.tel}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          pt={1}
          pb={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.footerCopy}
        >
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
            className={classes.copy}
          >
            {content["copy"]}
          </Typography>
          <Box ml="auto" className={classes.icons}>
            <Typography
              color="textSecondary"
              component="p"
              variant="caption"
              gutterBottom={false}
              className={classes.copy}
            >
              {content["copy2"]}
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
