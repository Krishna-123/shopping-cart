import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Filter from "./Filter";
import Content from "./Content";
import Cart from "./Cart";
import Products from "./product.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  const [cart, setCart] = useState([]);
  // currently this is static so we can do like this.
  const [products, setProducts] = useState({});
  const [productKeys, setProductKeys] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState("0.00");

  useEffect(() => {
    setProducts(Products.products);
    setProductKeys(Object.keys(Products.products));
  }, []);

  useEffect(() => {
    const newtotalPrice =
      (cart.length &&
        cart.reduce(
          (tPrice, item) =>
            tPrice + products[item.id].price * item.count.toFixed(2),
          0.0
        )) ||
      "0.00";

    const totalItems =
      (cart.length && cart.reduce((tItem, item) => tItem + item.count, 0)) || 0;
    setTotalCartItem(totalItems);
    setTotalPrice(newtotalPrice);
  }, [cart, products]);

  useEffect(() => {
    console.log("cart has been changed", cart);
  }, [cart]);

  const addToCart = (productKey) => {
    const currentCart = cart;
    if (currentCart.length) {
      let cartItemIndex = currentCart.findIndex(
        (item) => item.id === productKey
      );
      setCart((prevCart) =>
        cartItemIndex >= 0
          ? [
              ...prevCart.slice(0, cartItemIndex),
              { id: productKey, count: prevCart[cartItemIndex].count + 1 },
              ...prevCart.slice(cartItemIndex + 1),
            ]
          : [...prevCart, { id: productKey, count: 1 }]
      );
    } else {
      setCart([{ id: productKey, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const currentCart = cart;
    const updatedCart = currentCart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

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
          <Filter Products={products} changeProducts={setProducts} />
        </Grid>
        <Grid item container xs={12} md={6}>
          <Content
            Products={products}
            ProductKeys={productKeys}
            changeCartItems={addToCart}
          />
        </Grid>
        <Grid item container xs={12} md>
          <Cart
            Products={products}
            ProductKeys={productKeys}
            Cart={cart}
            changeCartItems={removeFromCart}
            TotalCartItems={totalCartItem}
            TotalPrice={totalPrice}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
