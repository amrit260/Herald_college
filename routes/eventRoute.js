const router = require('express').Router();

const eventController = require('../controllers/eventController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router
  .route('/')
  .get(eventController.getEvents)
  .post(
    authController.restrictTo('admin'),
    eventController.uploadCoverPhoto,
    eventController.addEvent
  );
router
  .route('/:id')
  .get(eventController.getSingleEvent)
  .delete(authController.restrictTo('admin'), eventController.deleteEvent);

router.post(
  '/update/:id',

  eventController.uploadCoverPhoto,

  authController.restrictTo('admin'),
  eventController.updateEvent
);

module.exports = router;