'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Bookings', [{
        UserId: 2,
        TaskId: 1,
        statusArrival: true,
        statusTime: 20,
        statusDone: true,
        cancel: false,
        createdAt: new Date(),
        updatedAt: new Date()


     }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
