const ApiError = require('../../errors/apiError');
const { hashPassword, comparePassword } = require('../../utils/Helper');

class UserService {
  constructor({
    userSchema,
  }) {
    this.userSchema = userSchema;
  }

  async create(user) {
    try {
      const isExistEmail = await this.get({ userEmail: user.userEmail });

      if (isExistEmail) {
        throw new ApiError({ message: 'This email address is used. Please try a different email address.', status: 400 });
      }
      // eslint-disable-next-line no-param-reassign
      user.userPassword = await hashPassword(user.userPassword);
      await this.userSchema.create(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(user) {
    try {
      const isExistUser = await this.get({ userEmail: user.userEmail });

      if (!isExistUser) {
        throw new ApiError({ message: 'This email address is incorrect. Please enter another email address', status: 400 });
      }
      // eslint-disable-next-line no-param-reassign
      const isMatch = await comparePassword(user.userPassword, isExistUser.userPassword);

      if (!isMatch) {
        throw new ApiError({ message: 'This password is incorrect. Please enter correct password', status: 400 });
      }

      return isExistUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(where) {
    try {
      const user = await this.userSchema.findOne(where);
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

  async update(where, data) {
    try {
      await this.userSchema.findOneAndUpdate(where, data, { new: true });
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
