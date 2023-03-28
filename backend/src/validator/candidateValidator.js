const Joi = require("joi");

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
  .message(
    "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre."
  );

const candidateSchema = Joi.object().keys({
  age: Joi.number().required(),
  gender: Joi.string().valid("man", "woman", "other").required(),
  github: Joi.string().min(3).max(100).required(),
  soft_skills: Joi.string().min(3).max(100).required(),
  hard_skills: Joi.string().min(3).max(150).required(),
  firstname: Joi.string().min(3).max(100).required(),
  lastname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  linkedin: Joi.string().min(3).max(100).required(),
  phone: Joi.string().min(9).max(11).required(),
  password: passwordSchema.required(),
  location: Joi.string().min(3).max(100).required(),
  picture: Joi.string().allow("", null),
  cv: Joi.string().allow("", null),
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
