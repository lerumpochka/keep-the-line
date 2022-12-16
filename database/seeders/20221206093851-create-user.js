'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Tasks', [{
        title: 'Poste Italiane',
        description: 'fare lo SPID',
        address: 'Corso Racconigi, 43, 10139 Torino TO',
        UserId: 1,
        amount: 5,
        date: new Date('2022 December 10'),
        time: new Date('2022 December 10'),
        createdAt: new Date(),
        updatedAt: new Date()


     },
     {
      title: 'Banca Intesa SanPaolo',
      description: 'aprire un conto corrente',
      address: 'P.za Barberini, 21, 00187 Roma RM',
      UserId: 1,
      amount: 5,
      date: new Date('2022 December 20'),
      time: new Date('2022 December 20'),
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
      title: 'Anagrafe',
      description: 'cambiare residenza ',
      address: 'Via Montevecchio, 29, 09121 Cagliari CA',
      UserId: 1,
      amount: 6,
      date: new Date('2022 December 20'),
      time: new Date('2022 December 20'),
      createdAt: new Date(),
      updatedAt: new Date()
   },
   ], {});
    
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
