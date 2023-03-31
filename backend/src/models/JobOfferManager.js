const AbstractManager = require("./AbstractManager");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offer" });
  }

  displayJob() {
    return this.database.query(
      `SELECT job.id, job.title, job.description, job.location, job.experience, job.lower_salary, job.higher_salary, job.work_hours, DATEDIFF(NOW(), job.date_of_creation) AS "postDate", company.name as compname, company.field, group_concat(technology.name SEPARATOR ', ') as technologies from job_offer job join company on job.company_id = company.id inner join job_offer_has_technology on job_offer_id = job.id inner join technology  on technology.id = technology_id group by job.id`
    );
  }

  jobDetails(jobId) {
    return this.database.query(
      `select job.*, DATEDIFF(NOW(), job.date_of_creation) AS "postDate", company.name, company.description as compdesc, company.company_type, company.number_of_employee, company.field, company.picture, consultant.*, user.id, user.firstname, user.lastname, user.linkedin, user.mail, user.phone, user.location as userLoc, user.picture from job_offer job join company on job.company_id = company.id join handled_offer ho on ho.job_offer_id = job.id join consultant on ho.consultant_id = consultant.id join user on user.id = consultant.user_id where job.id = ?`,
      [jobId]
    );
  }

  insert(jobOffer) {
    return this.database.query(
      `insert into ${this.table} (title,lower_salary,higher_salary,description,location,contract_id,mission,interview_run,company_id, experience) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        jobOffer.title,
        jobOffer.lowerSalary,
        jobOffer.higherSalary,
        jobOffer.description,
        jobOffer.location,
        jobOffer.contractId,
        jobOffer.mission,
        jobOffer.interviewRun,
        jobOffer.companyId,
        jobOffer.experience,
      ]
    );
  }

  insertTechnoIntoJobOfferHasTechno(techno, jobOfferInsertId) {
    return this.database.query(
      `INSERT INTO job_offer_has_technology (job_offer_id, technology_id) VALUES (?, ?);`,
      [jobOfferInsertId, techno]
    );
  }

  update(jobOffer) {
    return this.database.query(
      `update ${this.table} set salary = ?, title = ?, lower_salary = ?, higher_salary = ?, description = ?, experience = ?, location = ?, contract_id = ?, debut_date = ?,
      mission = ?, profile_needed = ?, interview_run = ?, remote = ?, bonuses = ?, work_hours = ?, date_of_creation = ?, number_of_candidates = ?, company_id = ?, where id = ?`,
      [
        jobOffer.salary,
        jobOffer.title,
        jobOffer.lowerSalary,
        jobOffer.higherSalary,
        jobOffer.description,
        jobOffer.experience,
        jobOffer.location,
        jobOffer.contractId,
        jobOffer.debutDate,
        jobOffer.mission,
        jobOffer.profileNeeded,
        jobOffer.interviewRun,
        jobOffer.remote,
        jobOffer.bonuses,
        jobOffer.workHours,
        jobOffer.dateOfCreation,
        jobOffer.numberOfCandidates,
        jobOffer.companyId,
        jobOffer.id,
      ]
    );
  }
}

module.exports = JobOfferManager;
