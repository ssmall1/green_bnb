'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users"}
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Spots"}
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};