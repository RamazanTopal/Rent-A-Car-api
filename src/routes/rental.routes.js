const router = require('express').Router();
const {
  createRental, getRental, getsRental, updateRental, deleteRental,
} = require('../controllers/rental.controller');

const authentications = require('../middlewares/authentication');
const { createValidations, updateValidations } = require('../validations/rental');
const validate = require('../middlewares/validate');

router.use('/rentals', router);

router.route('/lists').get(authentications, getsRental);
router.route('/create').post(authentications, validate(createValidations), createRental);
router.route('/:rentalId').get(authentications, getRental);
router.route('/:rentalId').patch(authentications, validate(updateValidations), updateRental);
router.route('/:rentalId').delete(authentications, deleteRental);
module.exports = router;
