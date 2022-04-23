const { Schema, model } = require('mongoose');

const colorSchema = new Schema({
  colorName: String,
}, {
  timestamps: true,
});

module.exports = model('Color', colorSchema);
