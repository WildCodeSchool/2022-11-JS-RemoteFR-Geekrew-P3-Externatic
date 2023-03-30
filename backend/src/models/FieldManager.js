const AbstractManager = require("./AbstractManager");

class FieldManager extends AbstractManager {
  constructor() {
    super({ table: "field" });
  }
}

module.exports = FieldManager;
