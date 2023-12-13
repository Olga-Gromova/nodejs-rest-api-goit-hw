const { Contact } = require('../../models/contacts');

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  const contacts =
    favorite === undefined
      ? await Contact.find({ owner }, "-createdAt -updatedAt", {
          skip,
          limit,
        })
      : await Contact.find({ owner, favorite }, "-createdAt -updatedAt", {
          skip,
          limit,
        });

  res.json(contacts);
};


module.exports = getAllContacts;