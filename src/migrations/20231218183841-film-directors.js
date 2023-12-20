'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('films_directors', {
      filmId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'film_id',
      },
      directorId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'director_id',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('films_directors');
  }
};
