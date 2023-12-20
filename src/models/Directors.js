const Directors = (sequelize, Datatypes) => {
  const directors = sequelize.define('Director', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'directors',
  });

  directors.associate = (models) => {
    directors.hasMany(models.FilmDirector, {
      foreignKey: 'directorId'
    });
  }

  return directors;
};

module.exports = Directors;