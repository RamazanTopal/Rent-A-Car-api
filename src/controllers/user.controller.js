const { container } = require('../config/awilix');

const userService = container.resolve('userService');

exports.createUser = async (req, res) => {
  try {
    const user = req.body;

    await userService.create(user);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userService.get(userId);

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsUser = async (req, res) => {
  try {
    const allUser = await userService.gets();

    res.status(200).json({ success: true, allUser });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    await userService.update(userId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await userService.delete(userId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
