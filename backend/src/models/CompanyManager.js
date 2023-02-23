const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "COMPANY" });
  }

  insert(company) {
    return this.database.query(
      `insert into ${this.table} (title, number_of_employee, description, field, siret, company_type, picture, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        company.title,
        company.numberOfEmployee,
        company.description,
        company.field,
        company.siret,
        company.companyType,
        company.picture,
        company.userId,
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
