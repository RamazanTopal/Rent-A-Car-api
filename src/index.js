const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes/index.routes');
const dbConnect = require('./config/db');
const errorHandler = require('./errors/errorHandler');
const page404 = require('./errors/page404');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
// dbConnect
dbConnect();
// Routes
app.use('/api/v1', routes);
app.use(page404);
app.use(errorHandler);
app.listen(process.env.API_SERVER_PORT, () => {
  console.log('Server is running');
});
