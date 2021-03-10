//dependancies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//imports
const productsRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productsRoutes);

app.listen(8000, () => {
  console.log("server is up");
});
