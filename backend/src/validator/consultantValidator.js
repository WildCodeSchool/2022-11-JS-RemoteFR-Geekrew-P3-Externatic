const Joi = require("joi");

const candidateSchema = Joi.object().keys({
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  userId: Joi.number().required(),
});

const validateCandidate = (user) => {
  const result = candidateSchema.validate(user, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return false;
};

module.exports = validateCandidate;
