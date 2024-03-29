const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, mail, linkedin, phone, hashed_password, location, picture) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.linkedin,
        user.phone,
        user.password,
        user.location,
        user.picture,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, linkedin = ?, phone = ?, password = ?, location = ?, picture = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.linkedin,
        user.phone,
        user.password,
        user.location,
        user.picture,
        user.id,
      ]
    );
  }

  login(mail) {
    return this.database.query(
      `select mail, hashed_password, roles, id from ${this.table} where mail = ?`,
      [mail]
    );
  }
}

module.exports = UserManager;
