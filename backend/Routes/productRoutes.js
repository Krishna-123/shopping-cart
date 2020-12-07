const { json } = require("express");
const express = require("express");
const router = express.Router();
const productsModal = require("../model/Product.model");

router.get("/getAllProducts", (req, res, next) => {
  productsModal
    .find()
    .then((resData) => res.json({ data: resData }))
    .catch((error) =>
      res.json({ message: "no product availabe for the given id" })
    );
});

router.get("/getProduct/:id", (req, res, next) => {
  productsModal
    .findById(req.params.id)
    .then((resData) => res.json({ data: resData }))
    .catch((error) =>
      res.json({ message: "no product availabe for the given id" })
    );
});

router.post("/addProduct", (req, res, next) => {
  const { title, description, image, price, size } = req.body;
  const newProduct = new productsModal({
    title,
    description,
    image,
    price,
    size,
  });
  newProduct
    .save()
    .then((resData) => res.json({ data: resData }))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
