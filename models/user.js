const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const handleMongooseError = require('../helpers/handleMongooseError');

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
	},
	{ versionKey: false, timestamps: true }
);


userSchema.post("save", handleMongooseError);


const User = mongoose.model("user", userSchema);

module.exports = { User };

