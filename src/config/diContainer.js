const ProductRepository = require("../repositories/productRepository");

// const GetAllProductsQuery = require("../app/queries/getAllProductsQuery");

// const GetProductsByCategoryQuery = require("../app/queries/getProductsByCategoryQuery");
const CreateProductCommand = require("../app/commands/createProductCommand");
const ProductController = require("../controller/ProductController");

const productModel = require("../models/productModel");
const GetAllProductsQuery = require("../app/queries/getAllProductsQuery");
const GetProductsByCategoryQuery = require("../app/queries/getProductsByCategroyQuery");
const GetProductByIdQuery = require("../app/queries/getPRoductByIdQuery");

function createContainer() {
  const productRepo = new ProductRepository(productModel);

  return {
    productController: new ProductController({
      getAllProducts: new GetAllProductsQuery(productRepo),
      getProductById: new GetProductByIdQuery(productRepo),
      getProductsByCategory: new GetProductsByCategoryQuery(productRepo),
      createProduct: new CreateProductCommand(productRepo)
    })
  };
}

module.exports = createContainer;
