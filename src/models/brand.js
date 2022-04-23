const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
  brandName: String,
}, {
  timestamps: true,
});

module.exports = model('Brand', brandSchema);
