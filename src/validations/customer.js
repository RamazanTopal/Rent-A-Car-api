const joi = require('joi');

const createValidations = joi.object({
  companyName: joi.string().required().min(2),
  userId: joi.string().required(),

});
const updateValidations = joi.object({
  companyName: joi.string().min(2),
  userId: joi.string(),
});

module.exports = {
  createValidations,
  updateValidations,
};
