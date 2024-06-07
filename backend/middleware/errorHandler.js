// middleware/errorHandler.js

const AppError = require('../utils/appError');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  res.status(500).json({ message: 'Something went wrong!' });
};

module.exports = errorHandler;
