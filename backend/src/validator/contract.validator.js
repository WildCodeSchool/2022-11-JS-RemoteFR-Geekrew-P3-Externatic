// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const validateContract = (user, createMod) => {
  const mode = createMod ? "required" : "optional";

  const result = Joi.object({
    ID: Joi.number().presence(mode),
    type: Joi.string().presence(mode),
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

module.exports = validateContract;
