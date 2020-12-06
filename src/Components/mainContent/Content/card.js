import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { CardContent, Grid, Typography } from "@material-ui/core";

import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 300,
    // margin: theme.spacing(1),
  },
  media: {
    display: "flex",
    flex: 1,
    maxWidth: "100%",
    height: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  actions: {
    justifyContent: "center",
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { title, description, image, price, size } = props.product;
  const [open, setOpen] = useState(false);

  return (
    <Grid item xs={12} md={6} className={classes.root}>
      <Modal
        open={open}
        handleOpen={setOpen}
        {...props.product}
        addToCart={props.addToCart}
      />
      <Card>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={props.addToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
