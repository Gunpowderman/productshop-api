//dependancies
const express = require("express");
const router = express.Router();
const slugify = require("slugify");

//imports
let data = require("../data");
const {
  productList,
  createProduct,
  deleteProduct,
} = require("../controllers/productsController");

//get product data
router.get("/", productList);

//create product
router.post("/", createProduct);

//delete product
router.delete("/:productId", deleteProduct);

module.exports = router;
