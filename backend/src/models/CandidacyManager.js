const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  find(candidateId) {
    return this.database.query(
      `SELECT candidacy_date, job_offer.title, job_offer.salary, job_offer.lower_salary, job_offer.work_hours, job_offer.higher_salary, job_offer.id, job_offer.description, job_offer.location, job_offer.experience, company.name as compname, company.field, company.picture, group_concat(technology.name SEPARATOR ', ') as technologies
      FROM candidacy 
      JOIN job_offer ON job_offer.id = candidacy.job_offer_id
      JOIN company ON company.id = job_offer.company_id
      join job_offer_has_technology as jobtech on job_offer.id = jobtech.job_offer_id
      join technology on jobtech.technology_id = technology.id
      WHERE candidate_id = ?
      group by candidacy.id;`,
      [candidateId]
    );
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
