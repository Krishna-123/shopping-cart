import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
  },
  media: {
    height: 500,
  },
  cardContent: {
    flexGrow: 1,
  },
  actions: {
    justifyContent: "center",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { title, description, image, price, size } = props.product;

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="small" variant="contained" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
