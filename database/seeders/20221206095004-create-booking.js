'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Bookings', [{
        UserId: 1,
        TaskId: 1,
        statusArrival: true,
        statusDone: true,
        cancel: false,
        createdAt: new Date(),
        updatedAt: new Date()


     },
     {
      UserId: 1,
      TaskId: 2,
      statusArrival: true,
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
