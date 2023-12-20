const { Router } = require('express');
const { allFilms } = require('../controllers/films.controller');

const filmRouter = Router();

filmRouter.get('/', allFilms);

module.exports = { filmRouter };