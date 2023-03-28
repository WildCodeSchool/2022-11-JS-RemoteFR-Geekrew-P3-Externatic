const AbstractManager = require("./AbstractManager");

class TechnologyManager extends AbstractManager {
  constructor() {
    super({ table: "technology" });
  }

  insert(technology) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      technology.name,
    ]);
  }

  update(technology) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [technology.name, technology.id]
    );
  }
}

module.exports = TechnologyManager;
