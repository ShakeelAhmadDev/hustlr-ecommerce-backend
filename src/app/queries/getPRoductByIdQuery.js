class GetProductByIdQuery {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  execute(id) {
    return this.productRepo.findById(id);
  }
}

module.exports = GetProductByIdQuery;
