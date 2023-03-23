/* eslint-disable no-restricted-syntax */
const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  update(filename, idCompany) {
    return this.database.query(
      `update ${this.table} set picture = ? where id = ?`,
      [filename, idCompany]
    );
  }
}

module.exports = ImageManager;
