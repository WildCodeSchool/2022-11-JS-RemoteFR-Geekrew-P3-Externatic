const Joi = require("joi");

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
  .message(
    "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre."
  );

const companySchema = Joi.object().keys({
  name: Joi.string().min(1).max(150).required(),
  siret: Joi.string().min(14).max(14).required(),
  mail: Joi.string().email().required(),
  phone: Joi.string().min(9).max(11).required(),
  number_of_employee: Joi.string().min(1).required(),
  field: Joi.string().min(1).max(150).required(),
  location: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  linkedin: Joi.string().min(7).required(),
  roles: Joi.string().min(9).required(),
  password: passwordSchema.required(),
});

const validateCompany = (user) => {
  const result = companySchema.validate(user, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateCompany;
