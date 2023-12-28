const bcrypt = require("bcrypt");
const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
require('dotenv').config();

const { BASE_URL } = process.env;

const saltRounds = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email have already used earlier");
  }

  const hashPassword = await bcrypt.hash(password, saltRounds);

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

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