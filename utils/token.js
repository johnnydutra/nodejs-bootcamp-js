const crypto = require('crypto');

const hashSimpleToken = (target) => {
  return crypto.createHash('sha256').update(target).digest('hex');
};

module.exports = hashSimpleToken;
