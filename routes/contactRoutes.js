const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);

// Route for getting all contacts and creating a new contact
router.route('/')
    .get(getContacts)         // Get all contacts
    .post(createContact);      // Create a new contact

// Routes for getting, updating, and deleting a specific contact by ID


router.route('/:id')
    .get(getContact)          // Get a contact by ID
    .put(updateContact)       // Update a contact by ID
    .delete(deleteContact);   // Delete a contact by ID

module.exports = router;
