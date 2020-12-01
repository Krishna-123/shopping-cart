import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Products from "../Content/product.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  section1: {
    margin: theme.spacing(2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cover: {
    height: 100,
    width: 100,
    margin: theme.spacing(1),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                $4.50
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider variant="middle" />
        <div className={classes.section2}>
          <Card className={classes.content}>
            <CardMedia
              className={classes.cover}
              image="https://source.unsplash.com/random/100x100"
              title={Products.products[0].description}
            />

            <CardContent className={classes.content}>
              <div className={classes.details}>
                <Typography component="h6">
                  {Products.products[0].description}
                </Typography>
                <Typography component="h6">
                  1 X ${Products.products[0].price}
                </Typography>
                <Button color="primary">Remove from Cart</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.section3}>
          <Button color="primary" variant="contained">
            Proceed to Payment
          </Button>
        </div>
      </div>
    </Paper>
  );
}
