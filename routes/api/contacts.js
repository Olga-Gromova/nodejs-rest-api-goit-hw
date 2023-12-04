const express = require("express");
const router = express.Router();

const contacts = require("../../controllers/contacts");

// GET

router.get("/", contacts.getAll);

// GET ID

router.get("/:contactId", contacts.getContactById);

// POST

router.post("/", contacts.add);

// DELETE

router.delete("/:contactId", contacts.deleteContact);

// PUT

router.put("/:contactId", contacts.updateContact);

module.exports = router;
