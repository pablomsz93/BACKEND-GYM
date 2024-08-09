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
      "services",
      [
        {
          id: 1,
          service_name: "Clases de boxeo",
          description:
            "Alternamos rounds de golpeo al saco al ritmo de la música con ejercicios funcionales.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { 
          id:2,
          service_name: "Spinning",
          description: "Durante una clase de spinning, es posible quemar entre 400 y 600 calorías, dependiendo de la intensidad y duración de la sesión, que suele rondar los 45/50 minutos de duración. Mejora de la resistencia cardiovascular: El spinning es un ejercicio aeróbico que fortalece y mejora la capacidad del sistema cardiovascular.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        { 
          id:3,
          service_name: "Crossfit",
          description: "CrossFit es una técnica de entrenamiento que conecta movimientos de diferentes disciplinas, tales como la halterofilia, el entrenamiento metabólico o el gimnástico. Consiste en acometer un programa de ejercicios (flexiones, tracción, etc), en un tiempo determinado y con un número definido de veces.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        { 
          id:4,
          service_name: "Entrenamiento de fuerza",
          description: "En entrenamiento de fuerza se suele trabajar sobre 5 0 8 series, mientras que la hipertrofia lo hace como mucho sobre 3 o 5. En cuanto a repeticiones la fuerza constará de 1 a 6 repeticiones con la mayor carga posible, mientras que la hipertrofia se puede alargar perfectamente hasta las 10-12 repeticiones.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:5,
          service_name: "AquaGym",
          description: "Hacer ejercicios en el agua para adultos mayores tiene dos grandes ventajas: Dentro del agua no hay gravedad, por lo que el cuerpo pesa menos y se reduce el impacto de las articulaciones. Esto último es bueno para las personas de edad avanzada, ya que les suelen doler",
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

    await queryInterface.bulkDelete("services", null, {});
  },
};
