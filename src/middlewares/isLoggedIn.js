const User = require('../models/User');
const { getTokenData } = require('../config/jwt.config');
const jwt = require('jsonwebtoken')


module.exports.isLoggedIn  = async(req, res, next) => {

    try {
       
        //si no tenemos ninguna cookie de login entonces directamente a logueo
        if(!req.session.login){
        
           return res.redirect('/admin/login');
            
        }

        //verificamos la cookie
        const token = await getTokenData(req.session.login);
      
        //buscamos si existe el usuario con este id
        const user = await User.findByPk(token.id.trim());
        
        if(!user){
            
        console.log('no pasa el logueado!');
           return res.redirect('/admin/login');
        }
        //si todo esta en orden, que pase al siguiente middleware
        console.log('logueado');

        //establezco el usuario actual
        req.user = await user;

        next()
       
        
    }catch(error) {
        console.log(error);
        res.status(400).json({ message : 'ha ocurrido un error'});
        return res.redirect('/admin/login');
    }

}
