require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');
const app  = require('./index');
const port =  process.env.PORT;

//parseo del reques content
app.use(express.urlencoded({extended :true}))
app.use(express.json());

//configuracion de rutas
app.use('/', userRouter)


//servidor de escucha
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
});