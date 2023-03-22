/* eslint-disable no-restricted-syntax */
const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set picture = ?,  where id = ?`,
      [user.picture, user.id]
    );
  }
}

module.exports = ImageManager;
