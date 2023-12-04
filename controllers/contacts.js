const { HttpError, ctrlWrapper } = require("../helpers");
const contacts = require("../models/contacts");
const { addSchema, updateSchema } = require("../schemas");

//  Get list of contacts

const getAll = async (req, res) => {
  const contactList = await contacts.listContacts();

  res.json(contactList);
};

// Get contact by id

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const contactById = await contacts.getContactById(contactId);

  if (contactById === null) {
    throw HttpError(404, "Data Not Found");
  }

  res.json(contactById).status(200);
};

// Add a new contact

const add = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

//  Delete a contact

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const removeContactById = await contacts.removeContact(contactId);

  if (removeContactById === null) {
    throw HttpError(404, "Data Not Found");
  }

  res.json({ message: `Contact with id: ${contactId} was deleted` });
};

// Update contact

const updateContact = async (req, res) => {
  const { error } = updateSchema.validate(req.body);
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }
  if (error) {
    throw HttpError(400, error.message);
  }
  const { contactId } = req.params;
  const updateContactById = await contacts.updateContact(contactId, req.body);
  if (!updateContactById) {
    throw HttpError(404, "Data Not Found");
  }
  res.json(updateContactById);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getContactById: ctrlWrapper(getContactById),
  add: ctrlWrapper(add),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
};
