const router = require('express').Router();
const {
  createBrand, getBrand, getsBrand, updateBrand, deleteBrand,
} = require('../controllers/brand.controller');

const { createValidations, updateValidations } = require('../validations/brand');
const authentications = require('../middlewares/authentication');
const validate = require('../middlewares/validate');

router.use('/brands', router);

router.route('/lists').get(authentications, getsBrand);
router.route('/create').post(validate(authentications, createValidations), createBrand);
router.route('/:brandId').get(authentications, getBrand);
router.route('/:brandId').patch(authentications, validate(updateValidations), updateBrand);
router.route('/:brandId').delete(authentications, deleteBrand);
module.exports = router;
