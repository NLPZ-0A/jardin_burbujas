const User = require('../models/User');
const validator = require('validator');
const passwordValidator = require('password-validator');

module.exports.userValidator= async (req, res, next)=>{
    
    try{
         console.log(req.body);
        const message = await formValidation(req.body);
        console.log(message);
        if(message !== true){
            return res.status(403).json({message: message});
        }else{
            next();
        }

    }catch(err){
        console.log(err);
        return res.status(400).json({message: 'ha ocurrido un error al efectuar la peticion de validacion'});
    }
};


const formValidation = async (data) => {
    try{
        if(Object.values(data).length){
            const {name, username, email, password} = data;

            const userRegex = /^[a-z0-9_-]{3,30}$/;

            if(validator.isEmpty(String(name)) || validator.isEmpty(String(email)) || validator.isEmpty(String(name)) || validator.isEmpty(String(password))){
                return 'No se permiten estos campos vacios';
            }

            if(!validateString(username, userRegex)){
                return 'username invalido';
            }

            const user = await User.findOne({where : {username : username}});

            if(user){
                return 'El usuario ya está registrado';
            }

            if(!validator.isEmail(String(email))){
                return 'Email invalido';
            }

            const emailUser = await User.findOne({where : {email : email}});

            if(emailUser){
                return 'El email ya está registrado';
            }

            if(!String(password).length >= 6){
                return 'password invalida';
            }

            if(!String(name).length >= 3 && !isNaN(Number(name))){
                return 'El nombre debe contener al menos 3 caracteres y no puede ser completamente numerico';
            }

 

            return true;
        }

    }catch(err){
       console.log(err);
       return res.status(400).json({message : 'error en la validacion'});
    }
    
};


const validateString = (str, regex) => {
    // Expresión regular que valida que la cadena no contenga caracteres del tipo asignado
    const specialCharRegex = regex;
    
    // Expresión regular que valida que la cadena no tenga espacios en blanco en los extremos
    const trimRegex = /^\S.*\S$/;
    
    return specialCharRegex.test(str) && trimRegex.test(str);
  }

