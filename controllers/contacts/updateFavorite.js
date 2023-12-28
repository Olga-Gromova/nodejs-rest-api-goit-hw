const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!data) {
    throw HttpError(400, "Field Favotire missed");
  }
  res.status(200).json({code: 200, message: `Field *Favorite* is updated successfully`, data: data});
};

module.exports = updateFavorite;