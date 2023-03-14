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

  insert(jobOffer) {
    return this.database.query(
      `insert into ${this.table} (salary,title,lower_salary,higher_salary,description,experience,location,contract_id,debut_date,mission,profile_needed,interview_run,remote,bonuses,work_hours,date_of_creation,number_of_candidates,company_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      ]
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
