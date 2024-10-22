const userConfig = require("../../../model-config/user-config");
const { transaction, rollBack, commit } = require("../../../utils/transaction");

class UserService {
  async create(id, firstName, lastName, t) {
    console.log("create user service started");
    if (!t) {
      t = await transaction();
    }
    try {
      let response = await userConfig.model.create(
        { id, firstName, lastName },
        {
          t,
        }
      );
      commit(t);
      console.log("create user service ended");
      return response;
    } catch (error) {
      await rollBack(t);
      console.log(error);
    }
  }
}

module.exports = UserService;
