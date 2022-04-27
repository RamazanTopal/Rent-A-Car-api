const jwt = require('jsonwebtoken');

const authenticationToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'You don`t have token' });
  }

  const user = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  if (!user) {
    return res.status(404).json({ message: 'Invalid Token' });
  }
  req.user = user;
  return next();
};

module.exports = authenticationToken;
