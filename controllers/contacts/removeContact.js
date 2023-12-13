const { Contact } = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndDelete({ _id: contactId, owner });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: `Contact with id ${contactId} was deleted successfully`,
  });
};

module.exports = removeContact;
