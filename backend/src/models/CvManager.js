const AbstractManager = require("./AbstractManager");

class FileManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  update(filename, idUser) {
    return this.database.query(`update ${this.table} set cv = ? where id = ?`, [
      filename,
      idUser,
    ]);
  }
}
module.exports = FileManager;
