const jwt = require('jsonwebtoken');

const secretKey = process.env.TOKEN;

const createToken = (email) => {
  const signature = jwt.sign({email}, secretKey, { expiresIn: '7d' });

  return signature;
}

module.exports = { createToken };