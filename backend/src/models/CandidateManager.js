const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  findAll() {
    return this.database.query(
      `SELECT user.id, user.firstname, user.lastname, user.mail, user.linkedin, user.phone, user.location, user.picture, candidate.*, GROUP_CONCAT(technology.name SEPARATOR ', ') AS techname from ${this.table} JOIN user ON user.id = candidate.user_id JOIN candidate_has_technology ct ON ct.candidate_id = candidate.id JOIN technology ON technology.id = ct.technology_id GROUP BY candidate.id;`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT user.id, user.firstname, user.lastname, user.mail, user.linkedin, user.phone, user.location, user.picture, candidate.*, GROUP_CONCAT(technology.name SEPARATOR ', ') AS techname from ${this.table} JOIN user ON user.id = candidate.user_id JOIN candidate_has_technology ct ON ct.candidate_id = candidate.id JOIN technology ON technology.id = ct.technology_id WHERE user.id = ? GROUP BY candidate.id;`,
      [id]
    );
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
