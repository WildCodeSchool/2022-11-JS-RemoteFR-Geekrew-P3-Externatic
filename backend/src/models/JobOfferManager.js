const AbstractManager = require("./AbstractManager");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offer" });
  }

  insert(jobOffer) {
    return this.database.query(
      `insert into ${this.table} (salary,
        title,
        lower_salary,
        higher_salary,
        description,
        experience,
        location,
        contract_id,
        debut_date,
        mission,
        profile_needed,
        interview_run,
        remote,
        bonuses,
        work_hours,
        date_of_creation,
        number_of_candidates,
        company_id,) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        jobOffer.salary,
        jobOffer.title,
        jobOffer.lower_salary,
        jobOffer.higher_salary,
        jobOffer.description,
        jobOffer.experience,
        jobOffer.location,
        jobOffer.contract_id,
        jobOffer.debut_date,
        jobOffer.mission,
        jobOffer.profile_needed,
        jobOffer.interview_run,
        jobOffer.remote,
        jobOffer.bonuses,
        jobOffer.work_hours,
        jobOffer.date_of_creation,
        jobOffer.number_of_candidates,
        jobOffer.company_id,
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
        jobOffer.lower_salary,
        jobOffer.higher_salary,
        jobOffer.description,
        jobOffer.experience,
        jobOffer.location,
        jobOffer.contract_id,
        jobOffer.debut_date,
        jobOffer.mission,
        jobOffer.profile_needed,
        jobOffer.interview_run,
        jobOffer.remote,
        jobOffer.bonuses,
        jobOffer.work_hours,
        jobOffer.date_of_creation,
        jobOffer.number_of_candidates,
        jobOffer.company_id,
        jobOffer.id,
      ]
    );
  }
}

module.exports = JobOfferManager;
