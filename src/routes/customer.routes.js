const router = require('express').Router();
const {
  createCustomer, getCustomer, getsCustomer, updateCustomer, deleteCustomer,
} = require('../controllers/customer.controller');

const { createValidations, updateValidations } = require('../validations/customer');
const validate = require('../middlewares/validate');

router.use('/customers', router);

router.route('/lists').get(getsCustomer);
router.route('/create').post(validate(createValidations), createCustomer);
router.route('/:customerId').get(getCustomer);
router.route('/:customerId').patch(validate(updateValidations), updateCustomer);
router.route('/:customerId').delete(deleteCustomer);
module.exports = router;
