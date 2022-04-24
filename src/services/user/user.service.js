class UserService {
  constructor({
    userSchema,
  }) {
    this.userSchema = userSchema;
  }

  async create(user) {
    try {
      await this.userSchema.create(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(id) {
    try {
      const user = await this.userSchema.findOne({ _id: id });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async gets() {
    try {
      const allUser = await this.userSchema.find();
      return allUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      await this.userSchema.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      await this.userSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
