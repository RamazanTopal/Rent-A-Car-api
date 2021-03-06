class ColorService {
  constructor({
    colorSchema,
  }) {
    this.colorSchema = colorSchema;
  }

  async create(color) {
    try {
      await this.colorSchema.create(color);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const color = await this.colorSchema.findOne({ _id: id });
      return color;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allColor = await this.colorSchema.find();
      return allColor;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.colorSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.colorSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ColorService;
