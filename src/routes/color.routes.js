const router = require('express').Router();
const {
  createColor, getColor, getsColor, updateColor, deleteColor,
} = require('../controllers/color.controller');

const authentications = require('../middlewares/authentication');
const { createValidations, updateValidations } = require('../validations/color');
const validate = require('../middlewares/validate');

router.use('/colors', router);

router.route('/lists').get(authentications, getsColor);
router.route('/create').post(authentications, validate(createValidations), createColor);
router.route('/:colorId').get(authentications, getColor);
router.route('/:colorId').patch(authentications, validate(updateValidations), updateColor);
router.route('/:colorId').delete(authentications, deleteColor);
module.exports = router;
