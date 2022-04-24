const joi = require('joi');

const createValidations = joi.object({
  startRentDate: joi.date().required(),
  endRentDate: joi.date().required(),
  carId: joi.string().required(),
  customerId: joi.string().required(),
});
const updateValidations = joi.object({
  startRentDate: joi.date(),
  endRentDate: joi.date(),
  carId: joi.string(),
  customerId: joi.string(),
});

module.exports = {
  createValidations,
  updateValidations,
};
