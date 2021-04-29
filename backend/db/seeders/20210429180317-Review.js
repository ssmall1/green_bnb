'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
      authorId: 1,
      spotId: 2,
      rating: 5,
      body: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      authorId: 6,
      spotId: 2,
      rating: 2,
      body: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      authorId: 3,
      spotId: 2,
      rating: 4,
      body: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      authorId: 4,
      spotId: 2,
      rating: 5,
      body: faker.random.words(),
      createdAt: new Date(),
      updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
