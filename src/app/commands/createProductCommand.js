class CreateProductCommand {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  async execute(productDTO) {
    if (!productDTO.name || !productDTO.category || !productDTO.price) {
      throw new Error("Invalid product data");
    }
    return await this.productRepo.create(productDTO);
  }
}

module.exports = CreateProductCommand;
