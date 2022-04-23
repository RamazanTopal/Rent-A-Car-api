const router = require('express').Router();
const {
  createBrand, getBrand, getsBrand, updateBrand, deleteBrand,
} = require('../controllers/brand.controller');

router.use('/brands', router);

router.route('/').get(getsBrand);
router.route('/create').post(createBrand);
router.route('/:brandId').get(getBrand);
router.route('/:brandId').patch(updateBrand);
router.route('/:brandId').delete(deleteBrand);
module.exports = router;
