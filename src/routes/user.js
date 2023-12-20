const { Router } = require('express');
const { findFilmsOfUser, insertInList } = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/valideToken');

const userRouter = Router();

userRouter.get('/films', validateToken, findFilmsOfUser);

userRouter.post('/films', validateToken, insertInList);

module.exports = { userRouter };