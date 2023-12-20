const { findOfUser, insertFilmInListUser } = require('../services/user.service');

const findFilmsOfUser = async (_req, res) => {
  const userId = 2;
  const { status, data } = await findOfUser({ userId });
  return res.status(status).json(data);
}

const insertInList = async (req, res) => {
  const { filmId, userId } = req.body;
  const { status } = await insertFilmInListUser({ filmId, userId });
  return res.status(status).end();
}

module.exports = {
  findFilmsOfUser,
  insertInList
}