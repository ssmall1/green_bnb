'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    bookerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }, 
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Spots" }
    },
    startDate: { 
      type:DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};