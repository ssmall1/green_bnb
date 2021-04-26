'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      ecoFeatures: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      zip: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};