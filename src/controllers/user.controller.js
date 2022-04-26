const { container } = require('../config/awilix');

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
    const user = req.body;
    const userInformation = await userService.login(user);
    res.status(200).json({ success: true, userInformation });
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
