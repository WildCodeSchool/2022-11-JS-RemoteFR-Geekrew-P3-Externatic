const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(company) {
    return this.database.query(
      `INSERT INTO user (mail, linkedin, phone, location, picture) VALUES (?, ?, ?, ?, ?);
      INSERT INTO ${this.table} (user_id, title, number_of_employee, description, field, siret) VALUES (LAST_INSERT_ID(), ?, ?, ?, ?, ?)`,
      [
        company.mail,
        company.linkedin,
        company.phone,
        company.location,
        company.picture,
        company.title,
        company.number_of_employee,
        company.description,
        company.field,
        company.siret,
      ]
    );
  }

  update(company) {
    return this.database.query(
      `update ${this.table} set title = ?, number_of_employee = ?, description = ?, field = ?, siret = ?, company_type = ?, picture = ?, user_id = ? where id = ?`,
      [
        company.title,
        company.numberOfEmployee,
        company.description,
        company.field,
        company.siret,
        company.companyType,
        company.picture,
        company.userId,
        company.id,
      ]
    );
  }
}

module.exports = CompanyManager;
