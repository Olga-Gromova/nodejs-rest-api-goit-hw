const express = require('express');
const { validateBody, isValidId } = require('../../middlewares');
const {
  addSchema,
  updateSchema,
  updateStatusSchema
} = require('../../schemas');
const { addContact, getAllContacts, getContactById, removeContact, updateContact, updateStatusContact } = require('../../controllers/contacts');

const router = express.Router();

// const ctrl = require('../../controllers/contacts');

router.get("/", getAllContacts);

// router.get('/', ctrl.getAllContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", validateBody(addSchema), addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(updateSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateStatusSchema),
  updateStatusContact
);

module.exports = router;