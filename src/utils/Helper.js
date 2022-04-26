const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPasswordawait = await bcrypt.hash(password, salt);
  return hashedPasswordawait;
}

async function comparePassword(candidatePassword, password) {
  const match = await bcrypt.compare(candidatePassword, password);
  return match;
}

module.exports = {
  hashPassword,
  comparePassword,
};
