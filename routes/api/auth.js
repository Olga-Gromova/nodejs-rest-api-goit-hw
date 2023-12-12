const express = require('express');
const { register, login, getCurrent, logout, updateSubscription } = require('../../controllers/users');
const { validateBody, authenicate } = require('../../middlewares');
const { loginSchema, registerSchema, updateSubscriptionSchema } = require('../../schemas/user');

const router = express.Router();

router.post("/signup", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenicate, getCurrent);

router.post("/logout", authenicate, logout);

router.patch(
    "/",
    authenicate,
    validateBody(updateSubscriptionSchema),
    updateSubscription
);

module.exports = router;