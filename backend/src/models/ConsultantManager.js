const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  insert(consultant) {
    return this.database.query(
      `insert into ${this.table} (gender, user_id) values (?, ?)`,
      [consultant.gender, consultant.userId]
    );
  }

  update(consultant) {
    return this.database.query(
      `update ${this.table} set gender = ?, user_id = ? where id = ?`,
      [consultant.gender, consultant.userId, consultant.id]
    );
  }
}

module.exports = ConsultantManager;
