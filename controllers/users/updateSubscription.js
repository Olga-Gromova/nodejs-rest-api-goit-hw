const { User } = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  await User.findByIdAndUpdate(_id, { subscription });

  res.status(200).json({ code: 200, message: "The subscription was updated successfully", updatedSubscription: subscription });
};

module.exports = updateSubscription;