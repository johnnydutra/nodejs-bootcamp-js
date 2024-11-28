const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createReview = catchAsync(async (req, res, next) => {
  const review = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review,
    },
  });
});

exports.getReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  // .populate({
  //   path: 'user',
  //   select: '-__v -passwordChangedAt',
  // })
  // .populate({
  //   path: 'tour',
  //   select: '-__v -passwordChangedAt',
  // });

  if (!review) return next(new AppError('No tour found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});
