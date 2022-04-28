const router = require('express').Router();
const {
  createCar, getCar, getsCar, updateCar, deleteCar,
} = require('../controllers/car.controller');

const authentications = require('../middlewares/authentication');
const { createValidations, updateValidations } = require('../validations/car');
const validate = require('../middlewares/validate');

router.use('/cars', router);

router.route('/lists').get(authentications, getsCar);
router.route('/create').post(authentications, validate(createValidations), createCar);
router.route('/:carId').get(authentications, getCar);
router.route('/:carId').patch(authentications, validate(updateValidations), updateCar);
router.route('/:carId').delete(authentications, deleteCar);
module.exports = router;
