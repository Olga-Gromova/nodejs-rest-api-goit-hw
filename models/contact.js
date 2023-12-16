const Joi = require('joi');
const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

// Mongoose Schema

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// Joi Schemas

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

const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(5).max(15),
  favorite: Joi.boolean(),
})
  .min(1)
  .messages({ "object.min": "missing fields" });

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

contactSchema.post("save", handleMongooseError);

const schemas = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
