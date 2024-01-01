const { insertUser } = require('../services/login.service');

const createUser = async (req, res) => {
  const { name, password, email } = req.body;
  const { status, data } = await insertUser({ name, password, email });
  return res.status(status).json(data);
}


module.exports = {
  createUser
};