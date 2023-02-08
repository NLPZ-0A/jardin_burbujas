require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');
const app  = require('./index');
const PORT =  PORT || 4000;

//parseo del reques content
app.use(express.urlencoded({extended :true}))
app.use(express.json());

//configuracion de rutas
app.use('/', userRouter)


//servidor de escucha
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});