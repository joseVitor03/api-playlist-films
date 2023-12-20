const { User } = require('../models');
const { createToken } = require('../utils/createToken');

const findUserForLogin = async ({ email, password }) => {
  const response = await User.findOne({ where: { email, password } });
  if (!response) {
    return { status: 404, data: { message: 'Email não encontrado.' } };
  }

  const token = createToken(response.email);
  return { status: 201, data: { token, userId: response.id } };
};

module.exports = {
  findUserForLogin
};