const { Film, Director, UserFilm } = require('../models')

const findOfUser = async ({ userId }) => {
  const response = await Film.findAll({ include: [
    { model: UserFilm, where: { userId }, attributes: [], }
  ] })
  return { status: 200, data: response };
}

const insertFilmInListUser = async ({ filmId, userId }) => {
  await UserFilm.findOrCreate({ where: { filmId, userId }});
  return { status: 201 };
}

module.exports = {
  findOfUser,
  insertFilmInListUser
};