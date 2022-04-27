const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPasswordawait = await bcrypt.hash(password, salt);
  return hashedPasswordawait;
}

async function comparePassword(candidatePassword, password) {
  const match = await bcrypt.compare(candidatePassword, password);
  return match;
}

function generateAccessToken(user) {
  return jwt.sign({ ...user }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1w' });
}

function generateRefreshToken(user) {
  return jwt.sign({ ...user }, process.env.REFRESH_TOKEN_KEY);
}

module.exports = {
  hashPassword,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
};
