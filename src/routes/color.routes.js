const router = require('express').Router();
const {
  createColor, getColor, getsColor, updateColor, deleteColor,
} = require('../controllers/color.controller');

const { createValidations, updateValidations } = require('../validations/color');
const validate = require('../middlewares/validate');

router.use('/colors', router);

router.route('/lists').get(getsColor);
router.route('/create').post(validate(createValidations), createColor);
router.route('/:colorId').get(getColor);
router.route('/:colorId').patch(validate(updateValidations), updateColor);
router.route('/:colorId').delete(deleteColor);
module.exports = router;
