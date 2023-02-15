const contactController = require('../controllers/contactController');
const  { isLoggedIn} = require('../middlewares/isLoggedIn');
const { timeResponse } = require('../tools/performance.js');
const validator = require('../middlewares/validator')
const express = require("express");
const router = express.Router();

router.get("/getAllcontacts", /*isLoggedIn, */contactController.getContacts);

router.post("/createContact", /*isLoggedIn, */validator.validatorFormContact, contactController.createContacts);

router.put("/updateContact/:id",/*isLoggedIn, */validator.validatorFormContact ,contactController.updateContact);

router.delete("/deleteContact/:id",/* isLoggedIn,*/ contactController.deleteContact);

module.exports = router;
