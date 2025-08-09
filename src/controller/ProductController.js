class ProductController {
  constructor({ getAllProducts, createProduct,getProductsByCategory,getProductById }) {
    this.getAllProducts = getAllProducts;
    this.getProductById = getProductById;
    this.getProductsByCategory = getProductsByCategory;
    this.createProduct = createProduct;
  }

  getProducts = async (req, res) => {
    try {
      const { category } = req.query;
      const result = category
        ? await this.getProductsByCategory.execute(category)
        : await this.getAllProducts.execute();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getProduct = async (req, res) => {
    try {
      const product = await this.getProductById.execute(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  addProduct = async (req, res) => {
    try {
      const newProduct = await this.createProduct.execute(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
}

module.exports = ProductController;
