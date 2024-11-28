const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const hashSimpleToken = (target) => {
  return crypto.createHash('sha256').update(target).digest('hex');
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: user,
    },
  });
};

module.exports = { hashSimpleToken, signToken, sendToken };
