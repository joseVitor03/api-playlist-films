const { findUserForLogin, insertUser } = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await findUserForLogin({ email, password });
  return res.status(status).json(data);
};

const createUser = async (req, res) => {
  const { name, password, email } = req.body;
  const { status, data } = await insertUser({ name, password, email });
  return res.status(status).json(data);
}

module.exports = {
  login,
  createUser
};