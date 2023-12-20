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
    await queryInterface.createTable('users_films', {
      userId: {
        field: 'user_id',
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      filmId: {
        field: 'film_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
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
    await queryInterface.dropTable('users_films');
  }
};
