const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  constructor() {
    super({ table: "contract" });
  }

  insert(contract) {
    return this.database.query(`insert into ${this.table} (type) values (?)`, [
      contract.type,
    ]);
  }

  update(contract) {
    return this.database.query(
      `update ${this.table} set type = ? where id = ?`,
      [contract.type, contract.id]
    );
  }
}

module.exports = ContractManager;
