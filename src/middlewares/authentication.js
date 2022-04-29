const jwt = require('jsonwebtoken');

const authentications = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'You don`t have token' });
  }

  const user = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

  if (!user) {
    return res.status(404).json({ message: 'Invalid Token' });
  }
  // eslint-disable-next-line no-underscore-dangle
  req.user = user._doc;
  return next();
};

module.exports = authentications;
