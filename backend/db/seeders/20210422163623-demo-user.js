'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Demo',
        lastName: 'User',
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser10',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser11',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser12',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser13',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser14',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        imageUrl: faker.image.avatar(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};