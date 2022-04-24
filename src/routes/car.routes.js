const router = require('express').Router();
const {
  createCar, getCar, getsCar, updateCar, deleteCar,
} = require('../controllers/car.controller');

const { createValidations, updateValidations } = require('../validations/car');
const validate = require('../middlewares/validate');

router.use('/cars', router);

router.route('/lists').get(getsCar);
router.route('/create').post(validate(createValidations), createCar);
router.route('/:carId').get(getCar);
router.route('/:carId').patch(validate(updateValidations), updateCar);
router.route('/:carId').delete(deleteCar);
module.exports = router;
