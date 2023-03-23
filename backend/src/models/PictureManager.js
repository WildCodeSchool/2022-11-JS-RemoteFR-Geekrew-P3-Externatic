/* eslint-disable no-restricted-syntax */
const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  update(filename, idUser) {
    return this.database.query(
      `update ${this.table} set picture = ? where id = ?`,
      [filename, idUser]
    );
  }
}

module.exports = ImageManager;
