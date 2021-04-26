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
    Review.belongsTo(models.User, { foreignKey: "authorId" });
    Review.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Review;
};