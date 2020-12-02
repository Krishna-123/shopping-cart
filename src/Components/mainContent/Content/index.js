import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    overflow: "auto",
    maxHeight: 1200,
  },
}));

const Content = (props) => {
  const classes = useStyles();
  const { Products, changeCartItems } = props;

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      spacing={2}
      className={classes.root}
    >
      {Products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={() => changeCartItems(product.id)}
        />
      ))}
    </Grid>
  );
};

export default Content;
