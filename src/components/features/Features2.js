// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import ApartmentIcon from "@material-ui/icons/Apartment";

// const useStyles = makeStyles((theme) => ({
//   section: {
//     backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   },
//   iconWrapper: {
//     backgroundColor: theme.palette.primary.main,
//   },
// }));

// export default function Features(props) {
//   const classes = useStyles();

//   const content = {
//     badge: "LOREM IPSUM",
//     "header-p1": "Donec lacinia",
//     "header-p2": "turpis non sapien lobortis pretium",
//     description:
//       "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
//     "col1-header": "Lorem ipsum dolor sit amet",
//     "col1-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     "col2-header": "Lorem ipsum dolor sit amet",
//     "col2-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     "col3-header": "Lorem ipsum dolor sit amet",
//     "col3-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     "col4-header": "Lorem ipsum dolor sit amet",
//     "col4-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     "col5-header": "Lorem ipsum dolor sit amet",
//     "col5-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     "col6-header": "Lorem ipsum dolor sit amet",
//     "col6-desc":
//       "In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.",
//     ...props.content,
//   };

//   return (
//     <section className={classes.section}>
//       <Container maxWidth="lg">
//         <Box py={6}>
//           <Box textAlign="center" mb={9}>
//             <Container maxWidth="sm">
//               <Typography variant="overline" color="textSecondary">
//                 {content["badge"]}
//               </Typography>
//               <Typography variant="h3" component="h2" gutterBottom={true}>
//                 <Typography variant="h3" component="span" color="primary">
//                   {content["header-p1"]}{" "}
//                 </Typography>
//                 <Typography variant="h3" component="span">
//                   {content["header-p2"]}
//                 </Typography>
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 color="textSecondary"
//                 paragraph={true}
//               >
//                 {content["description"]}
//               </Typography>
//             </Container>
//           </Box>
//           <Grid container spacing={6}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col1-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col1-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col2-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col2-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col3-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col3-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col4-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col4-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col5-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col5-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Box display="flex">
//                 <Box pr={5}>
//                   <Avatar variant="rounded" className={classes.iconWrapper}>
//                     <ApartmentIcon />
//                   </Avatar>
//                 </Box>
//                 <div>
//                   <Typography variant="h6" component="h3" gutterBottom={true}>
//                     {content["col6-header"]}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     component="p"
//                     color="textSecondary"
//                   >
//                     {content["col6-desc"]}
//                   </Typography>
//                 </div>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </section>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Fade from "@material-ui/core/Fade";
import Carousel from "react-elastic-carousel";
import {
  Paper,
  Button,
  Card,
  CardActionArea,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";

import { BsBuilding } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Avatar } from "@material-ui/core";
import Item from "./Item";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HouseIcon from "@material-ui/icons/House";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import AirplanemodeInactiveIcon from "@material-ui/icons/AirplanemodeInactive";
import ApartmentIcon from "@material-ui/icons/Apartment";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: theme.spacing(1),
  },
  iconWrapper: {
    backgroundColor: theme.palette.alternate.dark,
    padding: 10,
    borderRadius: 3,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 400,
  },
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 30,
  },
  titleOfSub: {
    fontWeight: 700,
  },
  container: {
    backgroundColor: "#FFFFFF",
  },
  item: {
    height: "250px",
    width: "100%",
    backgroundColor: "#00008b",
    color: "#fff",
    margin: "0 15px",
  },
}));

export default function Features() {
  const classes = useStyles();

  const content = [
    // {
    //   images: "01",
    //   title: "What is the Difference between Web and Brand.",
    //   category: "App Development",
    //   icon: ArrowForwardIcon,
    //   color: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    //   text: "China Tax",
    // },
    {
      images: "02",
      title: "A big ticket gone to be an interesting look New York.",
      category: "React App",
      icon: AccountBalanceIcon,
      color: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
      text: "Corporate Tax",
    },
    {
      images: "03",
      title: "Getting tickets to the big show have a closer look.",
      category: "Photoshop",
      icon: HouseIcon,
      color: "linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)",
      text: "Personal Tax",
    },
    {
      images: "04",
      title: " Getting tickets to the big show",
      category: "Development",
      icon: LocalTaxiIcon,
      color:
        "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
      text: "e-Commerce Tax",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "International Tax",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Transfer Pricing",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Tax Disputes",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "US Taxation",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Commodity Taxation",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Private Equity Funds & Investments",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "China Business and Taxation",
    },
    {
      images: "05",
      title: "A big ticket gone to be an interesting ",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Valuatians and Dispute Resolutions",
    },
    {
      images: "05",
      title: "Special Services to Accountants",
      category: "Management",
      icon: ApartmentIcon,
      color: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      text: "Private Equity Funds & Investments",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "50vh", width: "100%", paddingTop: "3rem" }}
      >
        <Carousel swipe={true} breakPoints={breakPoints}>
          {content.map((item) => (
            <Item value={item} />
          ))}
        </Carousel>
      </Grid>
    </>
  );
}
