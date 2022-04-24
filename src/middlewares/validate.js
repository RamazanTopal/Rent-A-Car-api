// eslint-disable-next-line consistent-return
const validate = (validateSchema) => (req, res, next) => {
  const { value, error } = validateSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    res.status(400).json({ error: errorMessage });
  } else {
    Object.assign(req, value);
    return next();
  }
};

module.exports = validate;
