import React, { useState } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardMedia,
  Divider,
  Tab,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Rating from "@material-ui/lab/Rating";
import { deepPurple, pink, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
  },
  gridItem: {
    display: "flex",
    flex: 1,
  },
  paper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  media: {
    display: "flex",
    flex: 1,
    maxWidth: "100%",
    height: "auto",
  },
  title: {
    padding: theme.spacing(2),
  },
  gridSizeRatingConatiner: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sizes: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  avatar: {
    cursor: "not-allowed",
  },
  sizeAvalible: {
    backgroundColor: deepPurple[500],
    cursor: "pointer",
  },
  sizeSelected: {
    backgroundColor: pink[500],
  },

  description: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    minHeight: "40vh",
    maxHeight: "60vh",
    padding: theme.spacing(1),
  },
  button: {
    flex: 1,
    margin: theme.spacing(1),
  },
  price: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: theme.spacing(2),
    background: deepPurple[100],
  },
}));

export default function FullWidthGrid(props) {
  const [selectedSize, setSelectedsize] = useState(false);
  const [clickedPanel, setClickedPanel] = useState(0);
  const classes = useStyles();
  const {
    image,
    title,
    description,
    rating,
    size,
    price,
    availableSizesCount,
    handleOpen,
    addToCart,
    reviewCount,
  } = props;

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            {title}. White hair cloth with Harmon and Effective crystals
          </Typography>
          <Grid item conatiner className={classes.gridSizeRatingConatiner}>
            <Grid item xs={12} sm className={classes.gridItem}>
              <Box component="fieldset" borderColor="transparent">
                <Rating name="read-only" value={rating} readOnly />
              </Box>
            </Grid>
            <Grid item xs={12} sm className={classes.gridItem}>
              <Box
                component="fieldset"
                borderColor="transparent"
                className={classes.sizes}
              >
                {size.map((s) => (
                  <Avatar
                    key={s}
                    className={clsx([
                      classes.avatar,
                      { [classes.sizeAvalible]: availableSizesCount[s] },
                      { [classes.sizeSelected]: selectedSize },
                    ])}
                    onClick={() => setSelectedsize(true)}
                  >
                    {s}
                  </Avatar>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Card className={classes.price}>
            <Typography variant="h5"> get it only on </Typography>
            <Typography variant="h2" color="secondary">
              $ {price}
            </Typography>
          </Card>
          <Grid item container>
            <Grid item className={classes.gridItem}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => handleOpen(false)}
              >
                Close Item
              </Button>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Middle part */}

      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Card className={classes.paper}>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
        </Card>
      </Grid>

      {/* third Part */}

      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <Tabs
            value={clickedPanel}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={(e, newIndex) => setClickedPanel(newIndex)}
          >
            <Tab label="About" id={0} />

            <Tab
              label={
                <Badge badgeContent={reviewCount} max={20}>
                  Reviews
                </Badge>
              }
              id={1}
            />
          </Tabs>
          <TabPanel panelIndex={0} clickedPanel={clickedPanel}>
            <Typography variant="h4" className={classes.title}>
              "why this product.."
            </Typography>

            <Typography variant="body2" className={[classes.description]}>
              {description}. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              {description}. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </Typography>
          </TabPanel>
          <TabPanel panelIndex={1} clickedPanel={clickedPanel}></TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}

function TabPanel({ panelIndex, clickedPanel, children }) {
  return clickedPanel === panelIndex && <div>{children}</div>;
}
