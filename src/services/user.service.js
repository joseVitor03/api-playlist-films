const { Film, Director, UserFilm } = require('../models')

const findOfUser = async ({ userId }) => {
  const response = await Film.findAll({ include: [
    { model: UserFilm, where: { userId }, attributes: [], },
    { model: Director, as: 'directors', through: { attributes: [] } }
  ] });
  return { status: 200, data: response };
};

const insertFilmInListUser = async ({ filmId, userId }) => {
  await UserFilm.findOrCreate({ where: { filmId, userId }});
  return { status: 201 };
};

const removeFilmInListUser = async ({ filmId, userId }) => {
  try {
    
    const response = await UserFilm.destroy({ where: { filmId, userId }});
    return { status: 200, data: response };
  } catch (error) {
    return { status: 404, data: { message: 'Erro de busca' } };
  }
};

module.exports = {
  findOfUser,
  insertFilmInListUser,
  removeFilmInListUser
};