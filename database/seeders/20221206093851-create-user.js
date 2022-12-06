'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Tasks', [{
        title: 'first task',
        description: 'my first task description',
        adress: 'via Roma, 26',
        UserId: 2,
        amount: 5,
        date: new Date('2022 December 10'),
        time: new Date('2022 December 10'),
        createdAt: new Date(),
        updatedAt: new Date()


     },
     {
      title: 'second task',
      description: 'my second task description',
      adress: 'via Venetto, 10',
      UserId: 1,
      amount: 5,
      date: new Date('2022 December 20'),
      time: new Date('2022 December 20'),
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
