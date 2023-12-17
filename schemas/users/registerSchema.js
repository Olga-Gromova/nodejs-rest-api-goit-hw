const Joi = require('joi');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;	

const registerSchema = Joi.object({
	username: Joi.string().min(1).required(),
	email: Joi.string().pattern(emailRegex).required(),
	password: Joi.string().min(6).required(),
});

module.exports = registerSchema;

