const User = require('../models/User');
const Contact = require('../models/Contact');
const bcrypt = require('bcrypt');
const cryptPassword = require('../tools/cryptPassword');
const { getToken } = require('../config/jwt.config');
const { sendMail } = require('../tools/sendMail');

//logica registro
const register = async(req, res) => {

    try {

        const { name, email ,username, password } = req.body;

        console.log(req.body);

        //comprobamos que no exista el usuario
        const user = await User.findOne({where:{ username : username }});
        if(user){
            return res.status(400).json({message: 'el usuario ya existe'});
        }

        //si no existe lo creamos
        const hashedPassword = await cryptPassword.encrypt(password);
        console.log(hashedPassword);
        const createUser = await User.create({  
            nombre: name,
            email: email,
            username: username,
            password: hashedPassword});

         return res.status(200).json({message: 'el usuario ha sido registrado'});
       
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message : 'ha ocurrido un error al crear el usuario'});
        return;
    }
    
};

//logica de login
const login = async(req, res) => {
    try{
        const { username, password } = req.body;
        
        //verificamos la existencia del usuario
        const user = await User.findOne({ where :{ username : username}});

        if(!user){
           return res.status(401).json({error : 'este usuario no esta registrado'});
        }
        console.log(user);
        console.log(user.password);
        //comprobacion de contraseña
        const passwordValid =  await bcrypt.compare(password.trim(), user.password.trim());
        console.log(`el password de login es ${passwordValid}`);

        if(!passwordValid){
            return res.status(401).send({error : 'contraseña incorrecta'});
        }

        console.log(`no llegue xq no soy valido`);
        //token jwt
        const token = getToken(user.id);

        //opciones de la cookie que vamos a poner en el nav
        const opcionesDelCookie = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        //cookie de login
        res.cookie('login', token, opcionesDelCookie);
        return res.status(200).json({succes : 'Has iniciado sesion!'});


    }catch(err){
        console.log(err);
        return res.status(400).json({error: 'error al iniciar sesion'});
    }
};

//logica de logout
const logout = async(req, res)=>{
    try{

        res.cookie('login','',{maxAge:1});
        return res.status(200).redirect('/login');

    }catch(err){
        clg(err);
        res.status(500).json({message: "error de servidor"});
    }
};

//recibe el formulario de contacto y lo guarda en la bbdd
const receiveFormContact = async(req, res) => {
    try {
    
        const newform = await Contact.create(req.body);
        const sendMailForm = sendMail(req.body.email, req.body.asunto);

        res.json({
            message: 'Contacto creado exitosamente',
            contact: newform
          });

    } catch (error) {
        console.log(error);
        res.status(400).send({message: 'error al crear el formulario de contacto.'});
    }
};

module.exports = { receiveFormContact, login ,logout, register}
