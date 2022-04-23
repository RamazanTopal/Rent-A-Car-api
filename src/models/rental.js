const { Schema, model } = require('mongoose');

const rentalSchema = new Schema({
  startRentDate: Date,
  endRentDate: Date,
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  carId: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },
}, {
  timestamps: true,
});

module.exports = model('Rental', rentalSchema);
