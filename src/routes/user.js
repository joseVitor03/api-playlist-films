const { Router } = require('express');
const { findFilmsOfUser, insertInList, removeInList } = require('../controllers/user.controller');
const { allFilms } = require('../controllers/films.controller');
const { validateToken } = require('../middlewares/valideToken');

const userRouter = Router();

userRouter.post('/filmsUser', validateToken, findFilmsOfUser);

userRouter.get('/allfilms', validateToken, allFilms);

userRouter.post('/films', validateToken, insertInList);

userRouter.post('/removeFilms', validateToken, removeInList);

module.exports = { userRouter };