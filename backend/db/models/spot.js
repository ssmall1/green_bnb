'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};