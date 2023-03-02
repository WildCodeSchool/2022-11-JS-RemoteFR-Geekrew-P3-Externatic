// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const validateCandidacy = (user, createMod) => {
  const mode = createMod ? "required" : "optional";

  const result = Joi.object({
    candidateId: Joi.number().presence(mode),
    jobOfferId: Joi.number().presence(mode),
    candidacyDate: Joi.date().presence(mode),
    receivedByCompany: Joi.boolean().presence(mode),
    readByCompany: Joi.boolean().presence(mode),
    companyResponded: Joi.boolean().presence(mode),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));

    return { errorCount: result.details.length, errorMessages };
  }
  return false;
};

module.exports = validateCandidacy;
