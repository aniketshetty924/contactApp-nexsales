const { HttpStatusCode } = require("axios");
const { createUUID } = require("../../../utils/uuid");
const UserService = require("../service/user");

class UserController {
  constructor() {
    this.userService = new UserService();
  }
  getAll(req, res, next) {
    console.log("getAll controller called");
  }
  async create(req, res, next) {
    try {
      //1. data
      const { firstName, lastName } = req.body;
      //validation
      if (firstName == "" || !firstName) {
        throw new Error("Validation Error");
      }
      if (lastName == "" || !lastName) {
        throw new Error("Validation Error");
      }

      let response = await this.userService.create(
        createUUID(),
        firstName,
        lastName
      );

      console.log("getAll controller Ended");
      res.status(HttpStatusCode.Created).json(response);
    } catch (error) {
      next(error);
    }
  }
}
const userController = new UserController();
module.exports = userController;
