const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  findByJobOffer(jobId) {
    return this.database.query(
      `SELECT candidacy.*, job_offer.id, user.id as userId, user.firstname, user.lastname, user.location, user.picture
      FROM candidacy
      INNER JOIN candidate ON candidate.id = candidacy.candidate_id
      INNER JOIN user ON user.id = candidate.user_id
      INNER JOIN job_offer ON job_offer.id = candidacy.job_offer_id
      WHERE job_offer_id = ?;`,
      [jobId]
    );
  }

  find(userId) {
    return this.database.query(
      `SELECT candidate_id, candidacy_date, job_offer.title, job_offer.salary, job_offer.lower_salary, job_offer.work_hours, job_offer.higher_salary, job_offer.id, job_offer.description, job_offer.location, job_offer.experience, DATEDIFF(NOW(), job_offer.date_of_creation) as postDate, company.name as compname, company.field, group_concat(technology.name SEPARATOR ', ') as technologies
      FROM candidacy 
      JOIN job_offer ON job_offer.id = candidacy.job_offer_id
      JOIN company ON company.id = job_offer.company_id
      join job_offer_has_technology as jobtech on job_offer.id = jobtech.job_offer_id
      join technology on jobtech.technology_id = technology.id
      JOIN candidate ON candidate.id = candidacy.candidate_id
      WHERE candidate_id = (SELECT candidate.id FROM candidate
        WHERE candidate.user_id = ? )
      group by candidacy.id;`,
      [userId]
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

  delete(candidacyId) {
    return this.database.query(
      `delete from ${this.table} where candidate_id = ?`,
      [candidacyId]
    );
  }
}

module.exports = CandidacyManager;
