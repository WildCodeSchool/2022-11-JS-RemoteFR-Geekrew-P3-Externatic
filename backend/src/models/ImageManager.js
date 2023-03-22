/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const db = require("./index");

const addOne = async (users) => {
  try {
    const { name, file_name } = users;

    const [result] = db.query(
      "insert into users (name, file_name) values(?,?)",
      [name, file_name]
    );
    if (result.insertId) {
      /* empty */
    }
    return result.insertId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addOne };
