const express = require('express');
const {
	register,
	login,
	getCurrent,
	logout,
	updateSubscription,
} = require('../../controllers/users');
const { validateBody, authenticate } = require('../../middlewares');
const { loginSchema, registerSchema, updateSubscriptionSchema } = require('../../schemas/users/index');

const router = express.Router();

router.post('/signup', validateBody(registerSchema), register);

router.post('/login', validateBody(loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

router.patch(
	'/',
	authenticate,
	validateBody(updateSubscriptionSchema),
	updateSubscription
);

module.exports = router;

