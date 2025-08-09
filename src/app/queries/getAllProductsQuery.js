class GetAllProductsQuery {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  async execute() {
    return await this.productRepo.findAll();
  }
}

module.exports = GetAllProductsQuery;
