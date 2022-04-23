const { container } = require('../config/awilix');

const colorService = container.resolve('colorService');

exports.createColor = async (req, res) => {
  try {
    const color = req.body;

    await colorService.create(color);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getColor = async (req, res) => {
  try {
    const { colorId } = req.params;

    const color = await colorService.get(colorId);

    res.status(200).json({ success: true, color });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsColor = async (req, res) => {
  try {
    const allcolors = await colorService.gets();
    res.status(200).json({ success: true, allcolors });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateColor = async (req, res) => {
  try {
    const { colorId } = req.params;
    const data = req.body;

    await colorService.update(colorId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteColor = async (req, res) => {
  try {
    const { colorId } = req.params;

    await colorService.delete(colorId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
