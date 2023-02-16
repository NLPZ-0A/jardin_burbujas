const User = require('../models/User');
const { getTokenData } = require('../config/jwt.config');

module.exports.checkRoleAuth = (roles) => async(req, res, next) => {
    //tomamos el token y lo parseamos
    
    if(req.session.login){
        const token = getTokenData(req.session.login);

        const result = token

        console.log(token);

        //buscamos si existe el usuario con este id
        const user = await User.findByPk(token.id);

        //checkeamos el rol
        if([].concat(roles).includes(user.role)){
            next();
            return;
        }

        res.status(403).json({message : 'no tienes la autorización para usar esta ruta'});
        return;
    }

    return res.redirect('/admin/login');

};
