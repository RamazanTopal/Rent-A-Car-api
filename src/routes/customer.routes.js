const router = require('express').Router();
const {
  createCustomer, getCustomer, getsCustomer, updateCustomer, deleteCustomer,
} = require('../controllers/customer.controller');

const authentications = require('../middlewares/authentication');
const { createValidations, updateValidations } = require('../validations/customer');
const validate = require('../middlewares/validate');

router.use('/customers', router);

router.route('/lists').get(authentications, getsCustomer);
router.route('/create').post(authentications, validate(createValidations), createCustomer);
router.route('/:customerId').get(authentications, getCustomer);
router.route('/:customerId').patch(authentications, validate(updateValidations), updateCustomer);
router.route('/:customerId').delete(authentications, deleteCustomer);
module.exports = router;
