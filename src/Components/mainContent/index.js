import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Filter from "./Filter";
import Cart from "./Cart";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={10}
        >
          <Filter />
          <Content />
          <Cart />
        </Grid>
      </Grid>
    </Grid>
  );
}
