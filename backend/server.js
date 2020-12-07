const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const productRoutes = require("./Routes/productRoutes");

require("dotenv").config();

const app = express();
app.use(morgan("dev")); // notify which request just received

const PORT = process.env.PORT || 3000;
app.use(cors()); // apply middleware
app.use(express.json()); // to directly convert it into JSON without using body parser
app.use("/products", productRoutes);

const uri = process.env.Mongo_Atlas_uri;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => console.log("conncted to MongoDb---"));

app.listen(PORT, () => console.log(`Server is Up and Running: ${PORT}`));
