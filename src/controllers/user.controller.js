const { findOfUser, insertFilmInListUser, removeFilmInListUser } = require('../services/user.service');

const findFilmsOfUser = async (req, res) => {
  const { userId } = req.body;
  const { status, data } = await findOfUser({ userId });
  return res.status(status).json(data);
}

const insertInList = async (req, res) => {
  const { filmId, userId } = req.body;
  const { status } = await insertFilmInListUser({ filmId, userId });
  return res.status(status).end();
}

const removeInList = async (req, res) => {
  const { filmId, userId } = req.body;
  const { status, data } = await removeFilmInListUser({ filmId, userId });
  return res.status(status).json(data);
}

module.exports = {
  findFilmsOfUser,
  insertInList,
  removeInList
}