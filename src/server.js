require('dotenv').config();
const session = require('cookie-session')
const express = require('express');
const expressLayouts =  require('express-ejs-layouts');
const cookieParser = require('cookie-parser')
const compression = require('compression')



const path = require('path');
const app  = require('./index');

const port =  process.env.PORT || 3000;

//agregamos compresion a las peticiones
app.use(compression());

//parseo del reques content
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('trust proxy', 1);

app.use(session({
    name: 'session',
    keys: [process.env.SECRET_SESSION],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));


//motor de plantillas
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.set('views', (__dirname + '/views'));
app.use(expressLayouts);
app.use(express.static((__dirname + '/public')));

//Models 
const User = require('./models/User');
const Contact = require('./models/Contact');

app.use(cookieParser());

//Rutas
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter');

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.use('/api/contacts', contactRouter);



//servidor de escucha
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
});