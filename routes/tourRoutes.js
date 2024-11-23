const express = require('express');
const {
  checkBody,
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} = require('../controllers/tourController');

const router = express.Router();

router.route('/').get(getAllTours).post(checkBody, createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
