import React from "react";
import { Grid } from "@material-ui/core";

import Card from "./card";
import product from "./product.json";

const Cart = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        {product.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
};
export default Cart;
