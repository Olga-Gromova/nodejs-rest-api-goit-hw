const { Contact } = require('../../schemas');

// was "listContacts" new name is  "getAllContacts"

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};


module.exports = {
  getAllContacts
};