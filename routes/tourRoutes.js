const express = require('express');
const {
  aliasTopTours,
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  getTourStats,
  updateTour,
} = require('../controllers/tourController');

const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
