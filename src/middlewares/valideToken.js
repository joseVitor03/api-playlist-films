const jwt = require('jsonwebtoken');

const secretKey = process.env.TOKEN;

const validateToken = (req, res, next) => {
  const [, authorization] = req.header('Authorization').split(' ');
  try {
    if (!authorization) {
      return res.status(401).json({
        message: 'Token not found',
      });
    }

    jwt.verify(authorization, secretKey);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
}

module.exports = { validateToken };