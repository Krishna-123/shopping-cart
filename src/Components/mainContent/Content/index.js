import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Product from "./product.json";
import Card from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      spacing={2}
      className={classes.root}
    >
      {Product.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Content;
