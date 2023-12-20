const { findAll } = require('../services/directors.service')

const allDirectors = async (_req, res) => {
  const { status, data } = await findAll();
  return res.status(status).json(data);
};

module.exports = {
  allDirectors,
}