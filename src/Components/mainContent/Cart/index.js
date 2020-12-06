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
    margin: theme.spacing(1),
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
    display: "flex",
    justifyContent: "center",
  },
  content: {
    margin: theme.spacing(1, 0),
    display: "flex",
    alignItems: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cover: {
    display: "flex",
    flex: 1,
    height: "auto",
    maxWidth: "100%",
    margin: theme.spacing(1),
  },
}));

export default function MiddleDividers(props) {
  const classes = useStyles();
  const { Products, Cart, changeCartItems, TotalCartItems, TotalPrice } = props;
  const renderCards = passProduct(Products, changeCartItems, classes);

  return (
    <Paper className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Total
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              ${TotalPrice}
            </Typography>
          </Grid>
        </Grid>
        {(Cart.length && (
          <Typography gutterBottom variant="subtitle1">
            You have total {TotalCartItems} Items
          </Typography>
        )) ||
          null}
      </div>
      <Divider variant="middle" />

      <div className={classes.section2}>
        {(Cart.length &&
          Cart.map((item) => renderCards(item.id, item.count))) || (
          <Typography gutterBottom variant="body1">
            Add Items to the Cartet
          </Typography>
        )}
      </div>

      <div className={classes.section3}>
        <Button color="primary" variant="contained">
          Proceed to Payment
        </Button>
      </div>
    </Paper>
  );
}

const passProduct = (...args) => (...args1) =>
  CartItemToProduct.apply(null, [...args, ...args1]);

const CartItemToProduct = (Products, changeCartItems, classes, id, count) => {
  return (
    <Card className={classes.content}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={Products[id].image}
        title={Products[id].title}
      />

      <CardContent className={classes.content}>
        <div className={classes.details}>
          <Typography component="h6">{Products[id].title}</Typography>
          <Typography component="h6">
            {count} X ${Products[id].price}
          </Typography>
          <Button color="secondary" onClick={() => changeCartItems(id)}>
            Remove from Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
