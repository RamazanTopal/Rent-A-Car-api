const mongoose = require('mongoose');
const chalk = require('chalk');

const { DATABASE_URI } = process.env;
const dbConnect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection Success.', chalk.green('✓'));
  } catch (error) {
    console.log('MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  }
};
module.exports = dbConnect;
