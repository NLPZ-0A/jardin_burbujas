const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const validator = require('../middlewares/validator')
const validatorUser = require('../middlewares/userValidations');


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
router.post('/admin/register', validatorUser.userValidator ,userController.register);

//manejo de login
router.post('/admin/login', userController.login);

//logout
router.get('/admin/logout', userController.logout);


module.exports = router;