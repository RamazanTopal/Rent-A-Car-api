const express = require('express');

const router = express.Router();

const brandRoutes = require('./brand.routes');
const colorRoutes = require('./color.routes');

router.use([brandRoutes, colorRoutes]);

module.exports = router;
