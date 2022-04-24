class CustomerService {
  constructor({
    customerSchema,
  }) {
    this.customerSchema = customerSchema;
  }

  async create(customer) {
    try {
      await this.customerSchema.create(customer);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const customer = await this.customerSchema.findOne({ _id: id }).populate('userId');
      return customer;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allCustomer = await this.customerSchema.find().populate('userId');
      return allCustomer;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.customerSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.customerSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CustomerService;
