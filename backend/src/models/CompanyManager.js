const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insertCompanyIntoUser(company) {
    return this.database.query(
      `INSERT INTO user (mail, linkedin, phone, location, picture, hashed_password) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        company.mail,
        company.linkedin,
        company.phone,
        company.location,
        company.picture,
        company.password,
      ]
    );
  }

  insertCompanyIntoCompany(company, companyUserId) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, title, number_of_employee, description, field, siret) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        companyUserId,
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
