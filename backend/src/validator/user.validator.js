// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
  .message(
    "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre."
  );

const userSchema = Joi.object({
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  mail: Joi.string().email().required(),
  linkedin: Joi.string().min(3).max(100).required(),
  phone: Joi.string().min(9).max(11).required(),
  password: passwordSchema.required(),
  location: Joi.string().min(3).max(100).required(),
  picture: Joi.string().min(3).max(100).required(),
});

const validateUser = (user) => {
  const result = userSchema.validate(user, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateUser;
