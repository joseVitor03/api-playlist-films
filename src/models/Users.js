const Users = (sequelize, Datatypes) => {
  const users = sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: Datatypes.STRING,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false,
  });

  users.associate = (models) => {
    users.hasMany(models.UserFilm, {
      foreignKey: 'userId'
    });
  }

  return users;
};

module.exports = Users;