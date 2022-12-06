'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Users', [{
      name: 'John',
      surName: 'Doe',
      email: 'john@e.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jack',
      surName: 'Mad',
      email: 'jack@e.com',
      password: '0987',
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
