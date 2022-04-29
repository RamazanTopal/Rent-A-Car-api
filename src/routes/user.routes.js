const router = require('express').Router();
const {
  createUser, getUser, getsUser, updateUser, deleteUser, login, resetPassword,
} = require('../controllers/user.controller');

const authentications = require('../middlewares/authentication');
const { createValidations, updateValidations, loginValidations } = require('../validations/user');
const validate = require('../middlewares/validate');

router.use('/users', router);

router.route('/lists').get(authentications, getsUser);
router.route('/create').post(validate(createValidations), createUser);
router.route('/login').post(validate(loginValidations), login);
router.route('/:userId').get(authentications, getUser);
router.route('/:userId').patch(authentications, validate(updateValidations), updateUser);
router.route('/:userId').delete(authentications, deleteUser);
router.route('/reset-password').post(resetPassword);
module.exports = router;
