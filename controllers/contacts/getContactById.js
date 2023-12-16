const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const getContactById = async (req, res) => {
  const { id } = req.params;
  const findedContact = await Contact.findById(id);

  if (!findedContact) {
    throw HttpError(404, `Contact with ID: ${id} is not found`);
  }
  res.status(200).json({code: 200, data: findedContact, message: `Ok`});
};

module.exports = getContactById;
