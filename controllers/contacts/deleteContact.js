const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw HttpError(404);
  }
  res.status(200).json({ message: `Contact with id ${id} was deleted successfully` });
};

module.exports = deleteContact;