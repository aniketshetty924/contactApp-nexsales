const { HttpStatusCode } = require("axios");
const { createUUID, validateUUID } = require("../../../utils/uuid");
const ContactService = require("../service/contact.js");

class ContactController {
  constructor() {
    this.contactService = new ContactService();
  }
  getAll(req, res, next) {
    console.log("getAll controller called");
  }
  async create(req, res, next) {
    try {
      console.log("create controller started...");
      //1. data
      const { firstName } = req.body;
      const { userId } = req.params;
      // validation
      if (!validateUUID(userId)) throw new Error("validation error...");

      if (firstName == "" || !firstName) {
        throw new Error("Validation Error");
      }
      let response = await this.contactService.create(
        createUUID(),
        firstName,
        userId
      );

      console.log("create  controller Ended");
      res.status(HttpStatusCode.Created).json(response);
    } catch (error) {
      next(error);
    }
  }
}
const contactController = new ContactController();
module.exports = contactController;
