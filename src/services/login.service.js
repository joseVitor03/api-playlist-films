const { User } = require('../models');
const { createToken } = require('../utils/createToken');

const findUserForLogin = async ({ email, password }) => {
  const response = await User.findOne({ where: { email, password } });
  if (!response) {
    return { status: 404, data: { message: 'Email ou senha incorretos.' } };
  }

  const token = createToken(response.email);
  return { status: 201, data: { token, userId: response.id } };
};

const insertUser = async ({ name, email, password }) => {
  const response = await User.findOne({ where: { email }});
  if (response === null) {
    const user = await User.create({ name, email, password });
    const token = createToken(email);
    return { status: 201, data: { token, userId: user.id } };
  }
  return { status: 409, data: { message: 'email já cadastrado.'} };
}

module.exports = {
  findUserForLogin,
  insertUser
};