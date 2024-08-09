"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "monitors",
      [
        {
          id:1,
          name: "Sergio Martinez",
          Bio: "Ex campeon del mundo ",
          Specialty:"Boxeo.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:2,
          name: "Carolina Marin",
          Bio: "Mas de 20 años de experiencia en nuestro gym",
          Specialty:" Spinning.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:3,
          name: " Ricardo ",
          Bio: "Mas fuerte que el vinagre ",
          Specialty:" Especializado en Crossfit.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:4,
          name: "Guillermo",
          Bio: "Culturista ",
          Specialty:" Power training",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:5,
          name: "Mary",
          Bio: "Como pez en el agua",
          Specialty:"Especializada en rejuvener a traves del agua",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("monitorss", null, {});
  },
};
