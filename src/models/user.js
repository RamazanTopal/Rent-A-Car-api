const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
  },
  userSurname: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPhone: {
    type: String,
  },
  userPassword: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = model('User', userSchema);
