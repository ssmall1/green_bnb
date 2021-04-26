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
    Booking.belongsTo(models.User, { foreignKey: "bookerId" });
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Booking;
};