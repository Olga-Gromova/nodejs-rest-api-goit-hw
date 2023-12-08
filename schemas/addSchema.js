const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .min(5)
    .max(15)
    .required()
    .messages({ "any.required": "missing required phone field" }),
  favorite: Joi.boolean(),
});

module.exports = { addSchema };