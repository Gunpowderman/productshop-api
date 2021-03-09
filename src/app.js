const express = require("express");
const cors = require("cors");

let data = require("./data");

const app = express();
app.use(cors());

app.get("/products", (_, response) => {
  response.json(data);
});

app.delete("/products/:productId", (request, response) => {
  const { productId } = request.params;
  const foundProduct = data.find((product) => product.id === +productId);
  if (foundProduct) {
    data = data.filter((product) => product !== foundProduct);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Product not found" });
  }
});

app.listen(8000, () => {
  console.log("server is up");
});
