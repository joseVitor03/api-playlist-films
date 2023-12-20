const { findUserForLogin } = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await findUserForLogin({ email, password });
  return res.status(status).json(data);
};

module.exports = {
  login
};