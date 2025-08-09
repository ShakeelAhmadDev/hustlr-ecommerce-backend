class GetProductsByCategoryQuery {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  execute(category) {
    return this.productRepo.findByCategory(category);
  }
}

module.exports = GetProductsByCategoryQuery;
