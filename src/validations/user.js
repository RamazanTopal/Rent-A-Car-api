const joi = require('joi');

const createValidations = joi.object({
  userName: joi.string().min(2).required(),
  userSurname: joi.string().min(2).required(),
  userEmail: joi.string().email().min(6).required(),
  userPhone: joi.string().min(10).required(),
  userPassword: joi.string().min(6).required(),
});
const updateValidations = joi.object({
  userName: joi.string().min(2),
  userSurname: joi.string().min(2),
  userEmail: joi.string().min(6),
  userPhone: joi.string().min(10),
  userPassword: joi.string().min(6),
});
const loginValidations = joi.object({
  userEmail: joi.string().min(6),
  userPassword: joi.string().min(6),
});

module.exports = {
  createValidations,
  updateValidations,
  loginValidations,
};
