const { findAll } = require('../services/films.service');

const allFilms = async (_req, res) => {
  const { status, data } = await findAll();
  return res.status(status).json(data);
}

module.exports = {
  allFilms,
}