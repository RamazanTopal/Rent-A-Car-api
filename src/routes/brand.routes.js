const router = require('express').Router();
const {
  createBrand, getBrand, getsBrand, updateBrand, deleteBrand,
} = require('../controllers/brand.controller');

const { createValidations, updateValidations } = require('../validations/brand');
const validate = require('../middlewares/validate');

router.use('/brands', router);

router.route('/lists').get(getsBrand);
router.route('/create').post(validate(createValidations), createBrand);
router.route('/:brandId').get(getBrand);
router.route('/:brandId').patch(validate(updateValidations), updateBrand);
router.route('/:brandId').delete(deleteBrand);
module.exports = router;
