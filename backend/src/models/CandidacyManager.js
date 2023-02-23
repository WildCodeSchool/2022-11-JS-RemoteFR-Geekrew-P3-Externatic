const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  insert(candidacy) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, job_offer_id, candidacy_date, received_by_company, read_by_company, company_responsed) values (?, ?, ?, ?, ?, ?)`,
      [
        candidacy.candidate_id,
        candidacy.job_offer_id,
        candidacy.candidacy_date,
        candidacy.received_by_company,
        candidacy.read_by_company,
        candidacy.company_responsed,
      ]
    );
  }

  update(candidacy) {
    return this.database.query(
      `update ${this.table} set candidate_id = ?, job_offer_id = ?, candidacy_date = ?, received_by_company = ?, read_by_company = ?, company_responsed = ? where id = ?`,
      [
        candidacy.candidate_id,
        candidacy.job_offer_id,
        candidacy.candidacy_date,
        candidacy.received_by_company,
        candidacy.read_by_company,
        candidacy.company_responsed,
        candidacy.id,
      ]
    );
  }
}

module.exports = CandidacyManager;
