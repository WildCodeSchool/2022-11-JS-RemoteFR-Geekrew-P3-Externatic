const AbstractManager = require("./AbstractManager");

// class FileManager extends AbstractManager {
//   constructor() {
//     super({ table: "candidate" });
//   }

//   insert(candidate) {
//     const { name, filename, data } = candidate;
//     return this.database.query(
//       `insert into ${this.table} (name, filename) values (?, ?, ?)`,
//       [name, filename, data]
//     );
//   }
// }
// module.exports = FileManager;
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
