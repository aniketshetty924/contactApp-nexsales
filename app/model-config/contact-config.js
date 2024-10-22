const { Sequelize } = require("sequelize");
const db = require("../../models");

//const contact = require("../../models/user")(db.sequelize, Sequelize);
class ContactConfig {
  constructor() {
    this.fieldMapping = {
      id: "id",
      userId: "userId",
      firstName: "firstName",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    };
    this.model = db.contact;
    this.modelName = db.contact.name;
    this.tableName = db.contact.options.tableName;
    this.columnMapping = {
      id: this.model.rawAttributes[this.fieldMapping.id].field,
      firstName: this.model.rawAttributes[this.fieldMapping.firstName].field,
      userId: this.model.rawAttributes[this.fieldMapping.userId].field,
      createdAt: this.model.rawAttributes[this.fieldMapping.createdAt].field,
      updatedAt: this.model.rawAttributes[this.fieldMapping.updatedAt].field,
      deletedAt: this.model.rawAttributes[this.fieldMapping.deletedAt].field,
    };
  }
}
const contactConfig = new ContactConfig();

module.exports = contactConfig;
