const { container } = require('../config/awilix');
const { generateAccessToken, generateRefreshToken } = require('../utils/Helper');
const { hashPassword } = require('../utils/Helper');
const ApiError = require('../errors/apiError');

const userService = container.resolve('userService');

exports.createUser = async (req, res, next) => {
  try {
    const user = req.body;
    await userService.create(user);
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const userBody = req.body;
    const user = await userService.login(userBody);

    const userInformation = {
      ...user.toObject(),
      tokens: {
        access_token: generateAccessToken(user),
        refresh_token: generateRefreshToken(user),
      },
    };
    res.status(200).json({ success: true, userInformation });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const result = await userService.update(
      { userEmail: email },
      { userPassword: hashPassword(password) },
    );
    if (result) {
      throw new ApiError({ message: 'This email address is used. Please try a different email address.', status: 400 });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    // eslint-disable-next-line no-underscore-dangle
    const result = await userService.update({ _id: req.user?._id }, req.body);
    if (result) {
      throw new ApiError({ message: 'This password is not changed', status: 400 });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await userService.get({ _id: userId });

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

exports.getsUser = async (req, res, next) => {
  try {
    const allUser = await userService.gets();

    res.status(200).json({ success: true, allUser });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    await userService.update(userId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    await userService.delete(userId);

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
