const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  insert(candidacy) {
    return this.database.query(
      `insert into ${this.table} (candidate_id, job_offer_id, candidacy_date, received_by_company, read_by_company, company_responded) values (?, ?, ?, ?, ?, ?)`,
      [
        candidacy.candidateId,
        candidacy.jobOfferId,
        candidacy.candidacyDate,
        candidacy.receivedByCompany,
        candidacy.readByCompany,
        candidacy.companyResponded,
      ]
    );
  }

  update(candidacy) {
    return this.database.query(
      `update ${this.table} set candidate_id = ?, job_offer_id = ?, candidacy_date = ?, received_by_company = ?, read_by_company = ?, company_responded = ? where id = ?`,
      [
        candidacy.candidateId,
        candidacy.jobOfferId,
        candidacy.candidacyDate,
        candidacy.receivedByCompany,
        candidacy.readByCompany,
        candidacy.companyResponded,
        candidacy.id,
      ]
    );
  }
}

module.exports = CandidacyManager;
