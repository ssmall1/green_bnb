'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
      authorId: 11,
      spotId: 2,
      rating: 5,
      body: "Great location and very clean!",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      authorId: 6,
      spotId: 2,
      rating: 3,
      body: "sufficient but was not impressed",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      authorId: 3,
      spotId: 2,
      rating: 4,
      body: "Such a cute and fun place",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        authorId: 4,
        spotId: 1,
        rating: 5,
        body: "Really quiet and tranquil",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        authorId: 13,
        spotId: 1,
        rating: 5,
        body: "Amazing! Will come back again!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        authorId: 6,
        spotId: 5,
        rating: 4,
        body: "Fully equipped and ready to entertain",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        authorId: 14,
        spotId: 3,
        rating: 4,
        body: "Such a cute and fun place",
        createdAt: new Date(),
        updatedAt: new Date()
        },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
