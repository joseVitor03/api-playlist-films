const { Film, Director } = require('./index');

const FilmsDirectors = (sequelize, Datatypes) => {
  const filmsDirectors = sequelize.define('FilmDirector', {
    filmId: {
      field: 'film_id',
      primaryKey: true,
      allowNull: false,
      type: Datatypes.INTEGER,
      references: {
        model: Film,
        key: 'id'
      }
    },
    directorId: {
      field: 'director_id',
      primaryKey: true,
      allowNull: false,
      type: Datatypes.INTEGER,
      references: {
        model: Director,
        key: 'id'
      }
    }
  }, {
    underscored: true,
    tableName: 'films_directors',
    timestamps: false,
  });

  filmsDirectors.associate = (models) => {
    models.Film.belongsToMany(models.Director, {
      as: 'director',
      through: filmsDirectors,
      foreignKey: 'filmId',
      otherKey: 'directorId'
    });

    models.Director.belongsToMany(models.Film, {
      through: filmsDirectors,
      foreignKey: 'directorId',
      otherKey: 'filmId',
    })
  }

  return filmsDirectors;
};

module.exports = FilmsDirectors;