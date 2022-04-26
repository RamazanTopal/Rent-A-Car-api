// eslint-disable-next-line consistent-return
const validate = (validateSchema) => (req, res, next) => {
  const { error } = validateSchema.validate(req.body);

  if (error) {
    const errors = {};
    Object.keys(error.details).forEach((key) => {
      errors.message = error.details[key].message;
      errors.status = 400;
      errors.name = 'ValidationError';
    });

    return next(errors);
  }
  return next();
};

module.exports = validate;
