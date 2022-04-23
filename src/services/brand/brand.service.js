class BrandService {
  constructor({
    brandSchema,
  }) {
    this.brandSchema = brandSchema;
  }

  async create(brand) {
    try {
      await this.brandSchema.create(brand);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const brand = await this.brandSchema.findOne({ _id: id });
      return brand;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allBrand = await this.brandSchema.find();
      return allBrand;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.brandSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.brandSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BrandService;
