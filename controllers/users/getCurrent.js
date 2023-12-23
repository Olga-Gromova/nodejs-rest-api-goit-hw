const getCurrent = async (req, res) => {
  const { email, subscription, avatarURL } = req.user;

  res.status(200).json({
    code: 200,
    message: `Ok`,
    currentUser: {
      email,
      subscription,
      avatarURL,
    },
  });
};

module.exports = getCurrent;
