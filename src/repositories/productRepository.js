
class ProductRepository {
  constructor(ProductModel) {
    this.ProductModel = ProductModel;
  }

  async findAll() {
    return await this.ProductModel.find();
  }

  async findById(id) {
    return await this.ProductModel.findById(id);
  }

  async findByCategory(category) {
    return await this.ProductModel.find({ category: new RegExp(`^${category}$`, "i") });
  }

  async create(product) {
    const newProduct = new this.ProductModel(product);
    return await newProduct.save();
  }
}

module.exports = ProductRepository;
