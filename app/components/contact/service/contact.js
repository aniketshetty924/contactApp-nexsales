const contactConfig = require("../../../model-config/contact-config");
const userConfig = require("../../../model-config/user-config");
const { transaction, rollBack, commit } = require("../../../utils/transaction");

class ContactService {
  async create(id, firstName, userId, t) {
    console.log("contact create service started");
    if (!t) {
      t = await transaction();
    }
    try {
      let user = await userConfig.model.findOne({ where: { id: userId } });
      if (!user) throw new Error("user does not exists...");
      let response = await contactConfig.model.create(
        { id, firstName, userId },
        {
          t,
        }
      );

      commit(t);
      console.log("contact create  service ended");
      return response;
    } catch (error) {
      await rollBack(t);
    }
  }
}

module.exports = ContactService;
