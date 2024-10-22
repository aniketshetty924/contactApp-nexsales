"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contact.belongsTo(models.user);
    }
  }
  contact.init(
    {
      firstName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "contact",
      underscored: true,
      paranoid: true,
    }
  );
  return contact;
};
