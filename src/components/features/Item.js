import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Card,
  CardActionArea,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Business } from "@material-ui/icons";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HouseIcon from "@material-ui/icons/House";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import AirplanemodeInactiveIcon from "@material-ui/icons/AirplanemodeInactive";
import ApartmentIcon from "@material-ui/icons/Apartment";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 256,
    minWidth: 300,
    minHeight: 230,
    borderRadius: 1,
    color: "white",
    transition:
      "transform 0.6s ease-in-out, background-color 0.6s ease-in-out, border-radius 0.6s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.08, 1.13, 1)",
      background: "white",
      borderRadius: 0,
    },
  },
}));

const Item = ({ value, i }) => {
  const classes = useStyles();

  return (
    <Grid item key={i}>
      <Card
        disableRipple
        disableTouchRipple
        className={classes.card}
        style={{ background: value.color }}
      >
        <CardActionArea disableRipple disableTouchRipple>
          <CardContent disableRipple disableTouchRipple>
            <Box pl={1} pt={2}>
              <ApartmentIcon
                style={{
                  fontSize: "3rem",
                  color: "#F7F7F7",
                }}
              />
            </Box>
            <Box pb={3}>
              <Typography gutterBottom variant="h5" component="h2">
                {value.text}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Item;
