// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const companySchema = Joi.object().keys({
  title: Joi.string().min(3).max(150).required(),
  numberOfEmployee: Joi.number().required(),
  description: Joi.string().min(20).required(),
  field: Joi.string().min(3).max(150).required(),
  siret: Joi.string().min(14).max(14).required(),
  companyType: Joi.string().min(3).max(150).required(),
  picture: Joi.string().min(3).max(255),
  userId: Joi.number().required(),
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
