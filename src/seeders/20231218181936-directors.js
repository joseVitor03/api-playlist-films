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
   await queryInterface.bulkInsert('directors', [
    { name: 'Hayao Miyazaki' },
    { name: 'Rob Minkoff' },
    { name: 'Roger Allers' },
    { name: 'Isao Takahata' },
    { name: 'Andrew Stanton' },
    { name: 'Pete Docter' },
    { name: 'John Lasseter' },
    { name: 'Lee Unkrich' },
    { name: 'Chris Sanders (II)' },
    { name: 'Dean DeBlois' },
    { name: 'Tomm Moore' },
    { name: 'Adam Elliot' },
    { name: 'Byron Howard' },
    { name: 'Rich Moore' },
    { name: 'Katsuhiro Ōtomo' },
    { name: 'Henry Selick' },
    { name: 'Gary Trousdale' },
    { name: 'Kirk Wise' },
    { name: 'Brad Bird' },
    { name: 'John Musker' },
    { name: 'Ron Clements' }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('directors', null, {});
  }
};
