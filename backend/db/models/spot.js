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
    ecoFeatures: {
      type: DataTypes.TEXT,
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
    zip: {
      type: DataTypes.INTEGER,
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
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
  };
  return Spot;
};