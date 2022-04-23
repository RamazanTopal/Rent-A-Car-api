const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  companyName: {
    type: String,
  },

}, {
  timestamps: true,
});

module.exports = model('Customer', customerSchema);
