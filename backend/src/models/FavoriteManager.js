const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, job_offer_id) values (?, ?)`,
      [favorite.candidateId, favorite.jobOfferId]
    );
  }

  update(favorite) {
    return this.database.query(
      `update ${this.table} set candidate_id = ?, job_offer_id = ? where id = ?`,
      [favorite.candidateId, favorite.jobOfferId, favorite.id]
    );
  }
}

module.exports = FavoriteManager;
