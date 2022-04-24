const express = require('express');

const router = express.Router();

const brandRoutes = require('./brand.routes');
const colorRoutes = require('./color.routes');
const rentalRoutes = require('./rental.routes');
const customerRoutes = require('./customer.routes');
const userRoutes = require('./user.routes');
const carRoutes = require('./car.routes');

router.use([carRoutes, userRoutes, brandRoutes, colorRoutes, rentalRoutes, customerRoutes]);

module.exports = router;
