const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchmema = new Schema(
  {
    userName: { type: String, required: true, minlength: 5, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, // validity frontend and bitmap convert into abnormal string and then store
    image: { type: URL },
    OrderHistory: { type: String },
  },
  { timestamps: true, collection: "Users" }
);

const User = mongoose.model("User", userSchmema);
module.exports = User;
