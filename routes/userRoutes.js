const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);

// Protecting private routes below
router.use(authController.protect);

router
  .route('/me')
  .get(userController.getMe, userController.getUser)
  .patch(userController.updateMe)
  .delete(userController.deleteMe);

router.patch('/update-my-password', authController.updatePassword);

// Restricting routes below to admin

router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
