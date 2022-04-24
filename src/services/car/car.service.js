class CarService {
  constructor({
    carSchema,
  }) {
    this.carSchema = carSchema;
  }

  async create(car) {
    try {
      await this.carSchema.create(car);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const car = await this.carSchema.findOne({ _id: id }).populate(['colorId', 'brandId']);
      return car;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allCar = await this.carSchema.find().populate(['colorId', 'brandId']);
      return allCar;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.carSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.carSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CarService;
