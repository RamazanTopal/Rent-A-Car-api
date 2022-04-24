const joi = require('joi');

const createValidations = joi.object({
  dailyPrice: joi.number().min(0).max(99999).required(),
  modelYear: joi.string().min(4).required(),
  description: joi.string().required().min(4),
  brandId: joi.string().required(),
  colorId: joi.string().required(),
});
const updateValidations = joi.object({
  dailyPrice: joi.number().min(0).max(99999),
  modelYear: joi.string().min(4),
  description: joi.string().min(4),
  brandId: joi.string(),
  colorId: joi.string(),
});

module.exports = {
  createValidations,
  updateValidations,
};
