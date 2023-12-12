const Joi = require('joi');

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

module.exports = { updateStatusSchema };