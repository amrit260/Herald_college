const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post(
  '/addAdmin',
  authController.protect,
  authController.restrictTo('admin'),
  authController.addAdmin
);

// router.route().get('/user/:id');

module.exports = router;
