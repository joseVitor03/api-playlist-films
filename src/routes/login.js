const { Router } = require('express');
const { login, createUser } = require('../controllers/login.controller');
const { validateLogin, validateRegister } = require('../middlewares/validates');
const loginRouter = Router();

loginRouter.post('/', validateLogin, login);

module.exports = { loginRouter };