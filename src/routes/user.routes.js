const router = require('express').Router();
const {
  createUser, getUser, getsUser, updateUser, deleteUser,
} = require('../controllers/user.controller');

const { createValidations, updateValidations } = require('../validations/user');
const validate = require('../middlewares/validate');

router.use('/users', router);

router.route('/lists').get(getsUser);
router.route('/create').post(validate(createValidations), createUser);
router.route('/:userId').get(getUser);
router.route('/:userId').patch(validate(updateValidations), updateUser);
router.route('/:userId').delete(deleteUser);
module.exports = router;
