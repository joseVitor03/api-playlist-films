const { Router } = require('express');
const { login } = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/validateLogin');
const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

module.exports = { loginRouter };