require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const UserManager = require("./UserManager");

models.user = new UserManager();
models.user.setDatabase(pool);

const CompanyManager = require("./CompanyManager");

models.company = new CompanyManager();
models.company.setDatabase(pool);

const JobOfferManager = require("./JobOfferManager");

models.jobOffer = new JobOfferManager();
models.jobOffer.setDatabase(pool);

const CandidateManager = require("./CandidateManager");

models.candidate = new CandidateManager();
models.candidate.setDatabase(pool);

const CandidacyManager = require("./CandidacyManager");

models.candidacy = new CandidacyManager();
models.candidacy.setDatabase(pool);

const ContractManager = require("./ContractManager");

models.contract = new ContractManager();
models.contract.setDatabase(pool);

const ConsultantManager = require("./ConsultantManager");

models.consultant = new ConsultantManager();
models.consultant.setDatabase(pool);

const TechnologyManager = require("./TechnologyManager");

models.technology = new TechnologyManager();
models.technology.setDatabase(pool);

const FavoriteManager = require("./FavoriteManager");

models.favorite = new FavoriteManager();
models.favorite.setDatabase(pool);

const FieldManager = require("./FieldManager");

models.field = new FieldManager();
models.field.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
