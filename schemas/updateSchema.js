const Joi = require("joi");

const updateShema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(5).max(15),
})
  .min(1)
  .messages({ "object.min": "missing fields" });

module.exports = updateShema;
