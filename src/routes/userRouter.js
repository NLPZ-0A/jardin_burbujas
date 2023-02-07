const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const validator = require('../middlewares/validator')


router.get('/home', (req, res)=>{ 
    console.log('en home');
    return res.send({"message": "bienvenido"})
});

//maneja la ruta del recibo de informacion
router.post('/sendForm', validator.validatorFormContact, userController.receiveFormContact);


module.exports = router;