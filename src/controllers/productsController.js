//imports
let data = require("../data");
const { Product } = require("../db/models");

//get product data
exports.productList = async (_, response) => {
  try {
    const products = await Product.findAll();
    response.json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

//create product
exports.createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(201).json(newProduct);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

//delete product
exports.deleteProduct = async (request, response) => {
  const { productId } = request.params;
  try {
    const foundProduct = await Product.findByPk(productId);
    if (foundProduct) {
      await foundProduct.destroy();
      response.status(204).end();
    } else {
      response.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    response.status(500).json({ message: error.message });
  }
};
