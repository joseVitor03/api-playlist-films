const { Router } = require('express');
const { allDirectors } = require('../controllers/directors.controller');
const directorRoute = Router();

directorRoute.get('/');

module.exports = { directorRoute };