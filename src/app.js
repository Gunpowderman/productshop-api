//dependancies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const slugify = require("slugify");

//exports
let data = require("./data");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (_, response) => {
  response.json(data);
});

app.post("/products", (request, response) => {
  const id = data[data.length - 1].id + 1;
  const slug = slugify(request.body.name, { lower: true });
  const newProduct = { id, slug, ...request.body };
  data.push(newProduct);
  response.status(201).json(newProduct);
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
