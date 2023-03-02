// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const validateJobOffer = (user, createMod) => {
  const mode = createMod ? "required" : "optional";

  const result = Joi.object({
    salary: Joi.number().presence(mode),
    title: Joi.string().min(3).max(100).presence(mode),
    lowerSalary: Joi.number().presence(mode),
    higherSalary: Joi.number().presence(mode),
    description: Joi.string().min(20).presence(mode),
    experience: Joi.string().min(3).max(255).presence(mode),
    location: Joi.string().min(3).max(100).presence(mode),
    contractId: Joi.number().presence(mode),
    debutDate: Joi.date().presence(mode),
    mission: Joi.string().min(3).presence(mode),
    profileNeeded: Joi.string().min(3).presence(mode),
    interviewRun: Joi.string().min(3).presence(mode),
    remote: Joi.boolean().presence(mode),
    bonuses: Joi.string().presence(mode),
    workHours: Joi.number().presence(mode),
    dateOfCreation: Joi.date().presence(mode),
    numberOfCandidates: Joi.number().presence(mode),
    companyId: Joi.number().presence(mode),
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

module.exports = validateJobOffer;
