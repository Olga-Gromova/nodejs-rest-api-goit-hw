const { loginSchema } = require('./loginSchema');
const { registerSchema } = require('./registerSchema');
const { updateSubscriptionSchema } = require('./updateSubscriptionSchema');
const { User } = require('./userSchema');

module.exports = {
    loginSchema,
    registerSchema,
    updateSubscriptionSchema,
    User
};

