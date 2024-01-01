const { directorRoute } = require('./directors');
const { filmRouter } = require('./films');
const { userRouter } = require('./user');
const { loginRouter } = require('./login');
const { registerRouter } = require('./register');
module.exports = {
  directorRoute,
  filmRouter,
  userRouter,
  loginRouter,
  registerRouter
};