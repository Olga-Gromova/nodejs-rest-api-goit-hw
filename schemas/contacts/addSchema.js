const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(30)
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "org", "nl"] },
    })
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .min(5)
    .max(15)
    .pattern(/^\(\d{3}\) \d{3}-\d{2}-\d{2}$/)
    .required()
    .messages({ "any.required": "missing required phone field" }),

  favorite: Joi.boolean(),
});


module.exports = addSchema;