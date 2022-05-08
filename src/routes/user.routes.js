const router = require('express').Router();
const {
  createUser, getUser, getsUser, updateUser, deleteUser, login, resetPassword, changePassword,
} = require('../controllers/user.controller');

const authentications = require('../middlewares/authentication');
const {
  createValidations, updateValidations, loginValidations, passwordValidations,
} = require('../validations/user');
const validate = require('../middlewares/validate');

router.use('/users', router);

router.route('/lists').get(authentications, getsUser);
router.route('/create').post(validate(createValidations), createUser);
router.route('/login').post(validate(loginValidations), login);
router.route('/:userId').get(authentications, getUser);
router.route('/:userId').patch(authentications, validate(updateValidations), updateUser);
router.route('/:userId').delete(authentications, deleteUser);
router.route('/reset-password').post(authentications, validate(passwordValidations), resetPassword);
router.route('/change-password').post(authentications, validate(passwordValidations), changePassword);
module.exports = router;
