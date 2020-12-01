import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Filter from "./Filter";
import Content from "./Content";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item container xs={12} md={2}>
          <Filter />
        </Grid>
        <Grid item container xs={12} md={6}>
          <Content />
        </Grid>
        <Grid item container xs={12} md>
          <Cart />
        </Grid>
      </Grid>
    </Grid>
  );
}
