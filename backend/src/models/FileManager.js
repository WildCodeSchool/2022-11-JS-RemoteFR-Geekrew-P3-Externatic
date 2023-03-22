const AbstractManager = require("./AbstractManager");

class FileManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    const { name, filename, data } = user;
    return this.database.query(
      `insert into ${this.table} (name, filename) values (?, ?, ?)`,
      [name, filename, data]
    );
  }
}
module.exports = FileManager;
