const router = require('express').Router();
const {
  createColor, getColor, getsColor, updateColor, deleteColor,
} = require('../controllers/color.controller');

router.use('/colors', router);

router.route('/').get(getsColor);
router.route('/create').post(createColor);
router.route('/:colorId').get(getColor);
router.route('/:colorId').patch(updateColor);
router.route('/:colorId').delete(deleteColor);
module.exports = router;
