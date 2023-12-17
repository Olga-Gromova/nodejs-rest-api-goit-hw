const loginSchema = require("./loginSchema");
const registerSchema = require("./registerSchema");
const updateSubscriptionSchema = require("./updateSubscriptionSchema");

const userSchemas = {
    loginSchema,
    registerSchema,
    updateSubscriptionSchema
};

module.exports = {userSchemas};