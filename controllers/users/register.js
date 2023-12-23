const bcrypt = require("bcrypt");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const gravatar = require("gravatar");

const saltRounds = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email have already used earlier");
  }

  const hashPassword = await bcrypt.hash(password, saltRounds);

  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    code: 201,
    message: `Created`,
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL,
    },
  });
};

module.exports = register;
