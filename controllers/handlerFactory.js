const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// const checkDocument = (Model, doc, next) => {
//   if (!doc)
//     return next(new AppError(`No ${Model.modelName.toLowerCase()} found with that ID`, 404));
// };

// const sendResponse = (res, statusCode, model, doc) => {
//   res.status(statusCode).json({
//     status: 'success',
//     data: {
//       data: doc,
//     },
//   });
// };

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc)
      return next(new AppError(`No ${Model.modelName.toLowerCase()} found with that ID`, 404));

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body);

    if (!doc)
      return next(new AppError(`No ${Model.modelName.toLowerCase()} found with that ID`, 404));

    res.status(200).json({
      status: 'success',
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        doc,
      },
    });
  });
