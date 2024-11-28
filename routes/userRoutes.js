const express = require('express');

const {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require('../controllers/userController');

const { login, signup, forgotPassword, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
