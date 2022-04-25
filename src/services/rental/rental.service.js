class RentalService {
  constructor({
    rentalSchema,
  }) {
    this.rentalSchema = rentalSchema;
  }

  async create(rental) {
    try {
      await this.rentalSchema.create(rental);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const rental = await this.rentalSchema.findOne({ _id: id }).populate(['customerId', 'carId']);
      return rental;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allRental = await this.rentalSchema.find().populate(['customerId', 'carId']);
      return allRental;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.rentalSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.rentalSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = RentalService;
