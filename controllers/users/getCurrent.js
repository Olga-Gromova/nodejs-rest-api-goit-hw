const { User } = require("../../models/user");

const getCurrent = async (req, res) => {
  const { _id } = req.user;

  const { email, subscription } = await User.findOne({ _id });

  res.json({ email, subscription });
};

module.exports = getCurrent;
