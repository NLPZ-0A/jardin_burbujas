const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const validator = require('../middlewares/validator')



router.get('/', (req, res)=>{ 
    console.log('en home');
    return res.send({"message": "bienvenido"})
});

router.get('/home', (req, res)=>{ 
    console.log('en home');
    return res.send({"message": "bienvenido"})
});

//maneja la ruta del recibo de informacion
router.post('/sendForm', validator.validatorFormContact, userController.receiveFormContact);

//manejar el registro del usuario
router.post('/admin/register', userController.register);

//manejo de login
router.post('/admin/login', userController.login);


module.exports = router;