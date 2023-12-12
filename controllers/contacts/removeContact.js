const { Contact } = require('../../schemas');
const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  console.log(Contact);
  const result = await Contact.findByIdAndDelete({ _id: contactId });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: `Contact with id ${contactId} was deleted successfully` });
};


module.exports = removeContact;