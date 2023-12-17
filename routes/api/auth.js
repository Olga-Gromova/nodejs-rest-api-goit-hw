const express = require('express');
const {
	register,
	login,
	getCurrent,
	logout,
	updateSubscription,
} = require('../../controllers/users');

const { validateBody, authenticate } = require('../../middlewares');
const router = express.Router();

const { userSchemas } = require('../../schemas/users');



router.post('/register', validateBody(userSchemas.registerSchema), register);

router.post('/login', validateBody(userSchemas.loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

router.patch(
	'/',
	authenticate,
	validateBody(userSchemas.updateSubscriptionSchema),
	updateSubscription
);

module.exports = router;

