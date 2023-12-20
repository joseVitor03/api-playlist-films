const Films = (sequelize, DataTypes) => {
  const films = sequelize.define('Film', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    poster: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
  }, { timestamps: false, tableName: 'films',
  });

  films.associate = (models) => {
    films.hasMany(models.FilmDirector, {
      foreignKey: 'filmId'
    });

    films.hasMany(models.UserFilm, {
      foreignKey: 'filmId'
    });
  }

  return films;
};

module.exports = Films;