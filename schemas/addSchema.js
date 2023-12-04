const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(30)
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .min(6)
    .max(30)
    .messages({ "any.required": "missing required field email" }),
  phone: Joi.string()
    .required()
    .min(6)
    .max(15)
    .messages({ "any.required": "missing required phone field" }),
});

module.exports = addSchema;
