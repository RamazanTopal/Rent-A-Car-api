const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  dailyPrice: Number,
  modelYear: String,
  description: String,
  brandId: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
  },
  colorId: {
    type: Schema.Types.ObjectId,
    ref: 'Color',
  },
}, {
  timestamps: true,
});

module.exports = model('Car', carSchema);
