const { Sequelize } = require("sequelize");
const db = require("../../models");

//const user = require("../../models/user")(db.sequelize, Sequelize);
class UserConfig {
  constructor() {
    this.fieldMapping = {
      id: "id",
      firstName: "firstName",
      lastName: "lastName",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    };
    this.model = db.user;
    this.modelName = db.user.name;
    this.tableName = db.user.options.tableName;
    this.columnMapping = {
      id: this.model.rawAttributes[this.fieldMapping.id].field,
      firstName: this.model.rawAttributes[this.fieldMapping.firstName].field,
      lastName: this.model.rawAttributes[this.fieldMapping.lastName].field,
      createdAt: this.model.rawAttributes[this.fieldMapping.createdAt].field,
      updatedAt: this.model.rawAttributes[this.fieldMapping.updatedAt].field,
      deletedAt: this.model.rawAttributes[this.fieldMapping.deletedAt].field,
    };
  }
}
const userConfig = new UserConfig();

module.exports = userConfig;
