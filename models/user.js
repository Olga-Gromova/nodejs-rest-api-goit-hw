const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const handleMongooseError = require('../helpers/handleMongooseError');
const Joi = require('joi');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;	

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			match: emailRegex,
			unique: true,
		},
		password: {
			type: String,
			minlength: 6,
			required: true,
		},
		subscription: {
			type: String,
			enum: ["starter", "pro", "business"],
			default: "starter",
		},
		token: {
			type: String,
			default: null,
        },
        avatarURL: {
            type: String,
            require: true,
        }
	},
	{ versionKey: false, timestamps: true }
);

// const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;	

const loginSchema = Joi.object({
	email: Joi.string().pattern(emailRegex).required(),
	password: Joi.string().min(6).required(),
});


const registerSchema = Joi.object({
	username: Joi.string().min(1).required(),
	email: Joi.string().pattern(emailRegex).required(),
	password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
	subscription: Joi.string().valid("starter", "pro", "business").required(),
});

userSchema.post("save", handleMongooseError);

const schemas = {
    loginSchema,
    registerSchema,
    updateSubscriptionSchema,
}


const User = mongoose.model("user", userSchema);

module.exports = { User, schemas};