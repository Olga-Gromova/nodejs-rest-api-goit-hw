const express = require('express');
const {
	getAllContacts,
	getContactById,
	addContact,
	deleteContact,
	updateContactById,
	updateFavorite,
} = require('../../controllers/contacts');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { addSchema, updateFavoriteSchema, updateSchema } = require('../../schemas/contacts/index');

const router = express.Router();

router.get('/', authenticate, getAllContacts);

router.get('/:id', authenticate, isValidId, getContactById);

router.post('/', authenticate, validateBody(addSchema), addContact);

router.delete('/:id', authenticate, isValidId, deleteContact);

router.put(
	'/:id',
	authenticate,
	isValidId,
	validateBody(updateSchema),
	updateContactById
);

router.patch(
	'/:id/favorite',
	authenticate,
	isValidId,
	validateBody(updateFavoriteSchema),
	updateFavorite
);

module.exports = router;
