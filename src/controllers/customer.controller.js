const { container } = require('../config/awilix');

const customerService = container.resolve('customerService');

exports.createCustomer = async (req, res) => {
  try {
    const customer = req.body;

    await customerService.create(customer);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    const customer = await customerService.get(customerId);

    res.status(200).json({ success: true, customer });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsCustomer = async (req, res) => {
  try {
    const allCustomer = await customerService.gets();

    res.status(200).json({ success: true, allCustomer });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const data = req.body;

    await customerService.update(customerId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    await customerService.delete(customerId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
