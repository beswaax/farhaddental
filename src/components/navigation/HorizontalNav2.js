import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import {
  ButtonBase,
  Collapse,
  Container,
  Menu,
  MenuItem,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.secondary.main,
    marginTop: 90,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    borderBottom: "0.1px dotted gray",
    backgroundColor: theme.palette.common.white,
  },
  toolbar: { toolbar: theme.mixins.toolbar, minHeight: 90 },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  link: {
    fontWeight: 500,
    marginRight: theme.spacing(5),
    color: [theme.palette.grey[900]],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  linkMenu: {
    color: [theme.palette.common.white],
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkDifferent: {
    fontWeight: 500,
    marginRight: "auto",
    color: [theme.palette.grey[900]],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  linkSelectedDifferent: {
    fontWeight: 500,
    color: [theme.palette.grey[900]],
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  linkSelected: {
    fontWeight: 500,
    color: [theme.palette.grey[900]],
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    color: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 240,
  },
  listItem: {
    // backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    fontWeight: 500,
    borderRadius: 1,
    color: theme.palette.common.white,
  },
  listItemSmaller: {
    paddingLeft: "2.5rem",
    boxShadow: "none",
    borderRadius: 1,
    color: theme.palette.grey[200],
  },
  calendlyListItem: {
    marginTop: "0.2rem",
    fontWeight: 500,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: 2,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  calendlyLink: {
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "none",
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  services: {
    color: theme.palette.common.black,
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

export default function Navigation({ tabValue, setTabValue }) {
  const classes = useStyles();
  // const router = useRouter();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [state, setState] = React.useState({ open: false });

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const closeCollapseAndMenu = () => {
    setState({ open: !state.open });
    setOpenCollapse(!openCollapse);
  };

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const content = {
    brand: {
      image: "/assets/logo1/vector/default-monochrome.svg",
      width: 170,
    },
    drawerBrand: "/assets/logo1/vector/default-monochrome.svg",
    link1: "Home",
    link2: "About",
    link3: "Services",
    link4: "Careers",
    link5: "Contact",
    link6: "Free Consultation",
    servicesLinks: {
      link1: "Preventive Care",
      link2: "Restorative Care",
      link3: "Dental Implants",
      link4: "Advanced Dentistry",
      link5: "Cosmetic Dentistry",
      link6: "Surgical Procedures",
    },
    "primary-action": "Free Consultation",
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const StyledMenu = withStyles({
    paper: {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      paddingBottom: 10,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          // color: theme.palette.secondary.dark,
        },
      },
    },
  }))(MenuItem);

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Link
            href="/"
            color="primary"
            underline="none"
            variant="h5"
            className={classes.brand}
          >
            {brand}
          </Link>
          <Link
            href="/"
            color="textPrimary"
            variant="body1"
            className={tabValue === 0 ? classes.linkSelected : classes.link}
          >
            {content["link1"]}
          </Link>
          <Link
            href="/about"
            color="textPrimary"
            variant="body1"
            className={tabValue === 1 ? classes.linkSelected : classes.link}
          >
            {content["link2"]}
          </Link>

          <ButtonBase
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickMenu}
            disableRipple
            disableTouchRipple
            variant="subtitle1"
            className={tabValue === 2 ? classes.linkSelected : classes.link}
          >
            <Typography
              color="textPrimary"
              variant="body1"
              className={classes.services}
            >
              {content["link3"]}
            </Typography>
          </ButtonBase>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem
              disableRipple
              disableTouchRipple
              onClick={handleCloseMenu}
              component={Link}
              href="/services/1"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
            >
              {" "}
              {content.servicesLinks.link1}
            </StyledMenuItem>
            <StyledMenuItem
              disableRipple
              disableTouchRipple
              onClick={handleCloseMenu}
              component={Link}
              href="/services/2"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
            >
              {content.servicesLinks.link2}
            </StyledMenuItem>
            <StyledMenuItem
              disableRipple
              component={Link}
              disableTouchRipple
              onClick={handleCloseMenu}
              href="/services/3"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
            >
              {content.servicesLinks.link3}
            </StyledMenuItem>
            <StyledMenuItem
              disableRipple
              component={Link}
              disableTouchRipple
              href="/services/4"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
              onClick={handleCloseMenu}
            >
              {content.servicesLinks.link4}
            </StyledMenuItem>
            <StyledMenuItem
              component={Link}
              href="/services/5"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
              disableRipple
              disableTouchRipple
              onClick={handleCloseMenu}
            >
              {content.servicesLinks.link5}
            </StyledMenuItem>
            <StyledMenuItem
              disableRipple
              component={Link}
              disableTouchRipple
              onClick={handleCloseMenu}
              href="/services/6"
              color="textPrimary"
              variant="subtitle1"
              className={classes.linkMenu}
            >
              {content.servicesLinks.link6}
            </StyledMenuItem>
          </StyledMenu>

          {/* <Link
            href="/career"
            color="textPrimary"
            variant="body1"
            className={tabValue === 3 ? classes.linkSelected : classes.link}
          >
            {content["link4"]}
          </Link> */}
          <Link
            href="/contact"
            color="textPrimary"
            variant="body1"
            className={tabValue === 4 ? classes.linkSelected : classes.link}
          >
            {content["link5"]}
          </Link>
          <Button
            href="https://calendly.com/samuelclintoc99/30min"
            target="_blank"
            variant="outlined"
            color="primary"
            className={classes.calendlyLink}
          >
            {content["link6"]}
          </Button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            disableTouchRipple
            className={classes.menuButton}
            onClick={toggleDrawer(!state.open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="left"
        open={state.open}
        onClose={toggleDrawer(false)}
      >
        <div className={classes.drawerContainer}>
          {/* <Box
            mb={1}
            ml={2}
            pb={2}
            // border={1}
            // borderTop={0}
            // borderLeft={0}
            // borderRight={0}
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              <img
                src={content.drawerBrand}
                alt={""}
                width={content.brand.width}
              />{" "}
            </Link>
          </Box> */}
          <List>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link1"]}
              component={Link}
              href="/"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link2"]}
              component={Link}
              href="/about"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link2"]} />
            </ListItem>{" "}
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link3"]}
              onClick={handleOpenSettings}
            >
              {" "}
              <ListItemText primary={content["link3"]} />
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link1}
                  component={Link}
                  href="/services/1"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link1} />
                </ListItem>{" "}
              </List>
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link2}
                  component={Link}
                  href="/services/2"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link2} />
                </ListItem>{" "}
              </List>{" "}
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link3}
                  component={Link}
                  href="/services/3"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link3} />
                </ListItem>{" "}
              </List>{" "}
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link4}
                  component={Link}
                  href="/services/4"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link4} />
                </ListItem>{" "}
              </List>{" "}
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link5}
                  component={Link}
                  href="/services/5"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link5} />
                </ListItem>{" "}
              </List>{" "}
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link6}
                  component={Link}
                  href="/services/6"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link6} />
                </ListItem>{" "}
              </List>{" "}
            </Collapse>
            {/* <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link4"]}
              component={Link}
              href="/career"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link4"]} />
            </ListItem> */}
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link5"]}
              component={Link}
              href="/contact"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link5"]} />
            </ListItem>
            <ListItem
              className={classes.calendlyListItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link6"]}
              component={Link}
              href="https://calendly.com/accountingservices-philly/60min"
              target="_blank"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link6"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
