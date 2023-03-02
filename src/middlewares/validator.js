const Contact = require('../models/Contact');
const validator = require('validator');
const passwordValidator = require('password-validator');

module.exports.validatorFormContact = async (req, res, next)=>{
    
    try{
         console.log(req.body);
        const message = await formValidation(req.body);

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
            const {nombre, email, telefono, asunto, mensaje} = data;

            if(validator.isEmpty(String(nombre)) || validator.isEmpty(String(email)) || validator.isEmpty(String(mensaje))){
                return 'No se permiten estos campos vacios (nombre, email o mensaje)';
            }

            if(!validator.isEmail(String(email))){
                return 'Email invalido';
            }

            if(!String(nombre).length >= 3 && !isNaN(Number(nombre))){
                return 'El nombre debe contener al menos 3 caracteres y no puede ser completamente numerico';
            }

            if(telefono.length > 15 || telefono.length < 10 && telefono.length > 0 ){
                return 'numero de telefono invalido ( debe tener un minimo de 10 caracteres y un máximo de 15)';
            }

            if(isNaN(Number(telefono))){
                return 'numero de telefono invalido (debe contener solo caracteres númericos )';
            }

          console.log(isNaN(Number(telefono)));
          console.log(Number(telefono));
          console.log('is nann??');  

            if(String(asunto).length > 120 ){
                return 'el asunto no debe de contener mas de 120 caracteres';
            }   

            return true;
        }

    }catch(err){
       console.log(err);
       return res.status(400).json({message : 'error en la validacion'});
    }
    
};