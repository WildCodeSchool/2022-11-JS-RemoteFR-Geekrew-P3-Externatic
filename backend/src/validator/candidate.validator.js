// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const candidateSchema = Joi.object().keys({
  cv: Joi.string().min(3).max(100).required(),
  age: Joi.number().required(),
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  github: Joi.string().min(3).max(100).required(),
  active: Joi.boolean().required(),
  softSkills: Joi.string().min(3).max(100).required(),
  consultantId: Joi.number().required(),
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
  return [];
};

module.exports = validateCandidate;
