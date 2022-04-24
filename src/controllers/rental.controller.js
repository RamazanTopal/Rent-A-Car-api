const { container } = require('../config/awilix');

const rentalService = container.resolve('rentalService');

exports.createRental = async (req, res) => {
  try {
    const rental = req.body;

    await rentalService.create(rental);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getRental = async (req, res) => {
  try {
    const { rentalId } = req.params;

    const rental = await rentalService.get(rentalId);

    res.status(200).json({ success: true, rental });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsRental = async (req, res) => {
  try {
    const allRental = await rentalService.gets();

    res.status(200).json({ success: true, allRental });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateRental = async (req, res) => {
  try {
    const { rentalId } = req.params;
    const data = req.body;

    await rentalService.update(rentalId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteRental = async (req, res) => {
  try {
    const { rentalId } = req.params;

    await rentalService.delete(rentalId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
