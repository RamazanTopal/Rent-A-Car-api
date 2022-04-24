const joi = require('joi');

const createValidations = joi.object({
  colorName: joi.string().required(),

});
const updateValidations = joi.object({
  colorName: joi.string(),
});

module.exports = {
  createValidations,
  updateValidations,
};
