const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userSurname: {
    type: String,
    required: true,
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
