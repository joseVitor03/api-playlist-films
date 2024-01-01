'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('films_directors', [
    { film_id: 1, director_id: 1 },
    { film_id: 2, director_id: 2 },
    { film_id: 2, director_id: 3 },
    { film_id: 3, director_id: 4 },
    { film_id: 4, director_id: 5 },
    { film_id: 5, director_id: 1 },
    { film_id: 6, director_id: 6 },
    { film_id: 7, director_id: 7 },
    { film_id: 8, director_id: 8 },
    { film_id: 9, director_id: 6 },
    { film_id: 10, director_id: 5 },
    { film_id: 10, director_id: 8 },
    { film_id: 11, director_id: 1 },
    { film_id: 12, director_id: 9 },
    { film_id: 12, director_id: 10 },
    { film_id: 13, director_id: 1 },
    { film_id: 14, director_id: 11 },
    { film_id: 15, director_id: 12 },
    { film_id: 16, director_id: 13 },
    { film_id: 16, director_id: 14 },
    { film_id: 17, director_id: 6 },
    { film_id: 18, director_id: 15 },
    { film_id: 19, director_id: 1 },
    { film_id: 20, director_id: 1 },
    { film_id: 21, director_id: 16 },
    { film_id: 22, director_id: 17 },
    { film_id: 22, director_id: 18 },
    { film_id: 23, director_id: 19 },
    { film_id: 24, director_id: 19 },
    { film_id: 25, director_id: 20 },
    { film_id: 25, director_id: 21 },
    { film_id: 26, director_id: 19 },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('films_directors', null, {});
  }
};
