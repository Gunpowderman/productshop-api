//dependancies
const slugify = require("slugify");

//imports
let data = require("../data");

//get product data
exports.productList = (_, response) => {
  response.json(data);
};

//create product
exports.createProduct = (request, response) => {
  const id = data[data.length - 1].id + 1;
  const slug = slugify(request.body.name, { lower: true });
  const newProduct = { id, slug, ...request.body };
  data.push(newProduct);
  response.status(201).json(newProduct);
};

//delete product
exports.deleteProduct = (request, response) => {
  const { productId } = request.params;
  const foundProduct = data.find((product) => product.id === +productId);
  if (foundProduct) {
    data = data.filter((product) => product !== foundProduct);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Product not found" });
  }
};
