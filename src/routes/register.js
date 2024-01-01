const { Router } = require('express');
const { login, createUser } = require('../controllers/login.controller');
const { validateLogin, validateRegister } = require('../middlewares/validates');
const registerRouter = Router();

registerRouter.post('/', validateRegister, createUser);

module.exports = { registerRouter };