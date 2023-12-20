const { Film, Director, UserFilm } = require('../models')

const findAll = async () => {
  const response = await Film.findAll({
    include: [
      { model: Director, as: 'director', through: { attributes: [] } },
    ],
  });
  if (response) {
    return { status: 200, data: response };
  };
};

module.exports = {
  findAll,
};