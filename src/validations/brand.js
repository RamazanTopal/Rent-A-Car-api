const joi = require('joi');

const createValidations = joi.object({
  brandName: joi.string().required().min(2),

});
const updateValidations = joi.object({
  brandName: joi.string().min(2),
});

module.exports = {
  createValidations,
  updateValidations,
};
