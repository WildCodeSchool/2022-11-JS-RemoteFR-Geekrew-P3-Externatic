const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  insert(candidate) {
    return this.database.query(
      `insert into ${this.table} (cv, age, gender, github, active, soft_skills, consultant_id, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.cv,
        candidate.age,
        candidate.gender,
        candidate.github,
        candidate.active,
        candidate.softSkills,
        candidate.consultantId,
        candidate.userId,
      ]
    );
  }

  update(candidate) {
    return this.database.query(
      `update ${this.table} set cv = ?, age = ?, gender = ?,github = ?, active = ?, soft_skills = ?, consultant_id = ?, user_id = ? where id = ?`,
      [
        candidate.cv,
        candidate.age,
        candidate.gender,
        candidate.github,
        candidate.active,
        candidate.softSkills,
        candidate.consultantId,
        candidate.userId,
        candidate.id,
      ]
    );
  }
}

module.exports = CandidateManager;
