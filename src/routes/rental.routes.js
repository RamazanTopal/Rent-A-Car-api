const router = require('express').Router();
const {
  createRental, getRental, getsRental, updateRental, deleteRental,
} = require('../controllers/rental.controller');

const { createValidations, updateValidations } = require('../validations/rental');
const validate = require('../middlewares/validate');

router.use('/rentals', router);

router.route('/lists').get(getsRental);
router.route('/create').post(validate(createValidations), createRental);
router.route('/:rentalId').get(getRental);
router.route('/:rentalId').patch(validate(updateValidations), updateRental);
router.route('/:rentalId').delete(deleteRental);
module.exports = router;
