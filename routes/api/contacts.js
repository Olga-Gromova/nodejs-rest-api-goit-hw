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
const { contactSchemas } = require('../../schemas/contacts');

const router = express.Router();

router.get('/', authenticate, getAllContacts);

router.get('/:id', authenticate, isValidId, getContactById);

router.post('/', authenticate, validateBody(contactSchemas.addSchema), addContact);

router.delete('/:id', authenticate, isValidId, deleteContact);

router.put(
	'/:id',
	authenticate,
	isValidId,
	validateBody(contactSchemas.updateSchema),
	updateContactById
);

router.patch(
	'/:id/favorite',
	authenticate,
	isValidId,
	validateBody(contactSchemas.updateFavoriteSchema),
	updateFavorite
);

module.exports = router;
