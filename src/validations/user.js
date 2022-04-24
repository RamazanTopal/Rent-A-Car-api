const joi = require('joi');

const createValidations = joi.object({
  userName: joi.string().required().min(2),
  userSurname: joi.string().required().min(2),
  userEmail: joi.string().email().required().min(6),
  userPhone: joi.string().required().min(10),
  userPassword: joi.string().required().min(6),
});
const updateValidations = joi.object({
  userName: joi.string().min(2),
  userSurname: joi.string().min(2),
  userEmail: joi.string().min(6),
  userPhone: joi.string().min(10),
  userPassword: joi.string().min(6),
});

module.exports = {
  createValidations,
  updateValidations,
};
