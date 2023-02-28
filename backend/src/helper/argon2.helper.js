const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 19,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (password) => {
  return argon2.hash(password, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(password, hashedPassword, hashingOptions);
};

module.exports = { hashPassword, verifyPassword };
