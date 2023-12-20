const { User, Film } = require('./index');

const UsersFilms = (sequelize, Datatypes) => {
  const userFilms = sequelize.define('UserFilm', {
    userId: {
      field: 'user_id',
      primaryKey: true,
      allowNull: false,
      type: Datatypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    filmId: {
      field: 'film_id',
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Film,
        key: 'id'
      }
    }
  }, {
    tableName: 'users_films',
    timestamps: false,
    underscored: true
  });

  userFilms.associate = (models) => {
    models.Film.belongsToMany(models.User, {
      through: userFilms,
      foreignKey: 'filmId',
      otherKey: 'userId'
    });

    models.User.belongsToMany(models.Film, {
      through: userFilms,
      foreignKey: 'userId',
      otherKey: 'filmId'
    })
  }

  return userFilms;
};

module.exports = UsersFilms;