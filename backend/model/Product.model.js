const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 5 },
    description: { type: String, required: true, minlength: 5 },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Object, required: true },
    orderDetails: { type: Object },
    userReviews: { type: Object },
  },
  { timestamps: true, collection: "Products" }
);

const product = mongoose.model("Product", productSchema);

module.exports = product;
