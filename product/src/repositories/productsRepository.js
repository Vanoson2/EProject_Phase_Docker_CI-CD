const Product = require("../models/productsModel");

class ProductsRepository {
  async create(product) {
    return await Product.create(product);
  }

  async findById(productId) {
    return await Product.findById(productId).lean(); // Sử dụng .lean() để trả về Plain Object
  }
  
  async findByName(name) {
    return await Product.findOne({ name }).lean();
  }
  async findAll() {
    return await Product.find().lean(); // Sử dụng .lean() để trả về Plain Object
  }
  async findByIdgetProductsById(productIds) {
    return await Product.find({ _id: { $in: productIds } }).lean();
  }
}
module.exports = ProductsRepository;
