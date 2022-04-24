const { container } = require('../config/awilix');

const carService = container.resolve('carService');

exports.createCar = async (req, res) => {
  try {
    const car = req.body;

    await carService.create(car);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getCar = async (req, res) => {
  try {
    const { carId } = req.params;

    const car = await carService.get(carId);

    res.status(200).json({ success: true, car });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsCar = async (req, res) => {
  try {
    const allCar = await carService.gets();

    res.status(200).json({ success: true, allCar });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const data = req.body;

    await carService.update(carId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const { carId } = req.params;

    await carService.delete(carId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
