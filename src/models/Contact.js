const Sequelize = require('sequelize');
const db = require('../database/connections');
const { v4: uuidv4 } = require('uuid');
const  { generateId }  = require('../tools/generateCodClaim');


const Contact = db.define('contacto',{

    id: {
        type: Sequelize.STRING,
        allowNull : false,
        primaryKey : true,
        defaultValue : () => uuidv4()
    },

    nombre : {
        type: Sequelize.STRING,
        allowNull: false
    },

    email : {
        type: Sequelize.STRING,
        allowNull : false
    },

    telefono :{
        type: Sequelize.INTEGER,
        allowNull : true
    },

    asunto : {
        type: Sequelize.STRING,
        allowNull : true
    },

    mensaje : {
        type: Sequelize.TEXT,
        allowNull : false
    },

    cod_reclamo :{
        type: Sequelize.STRING,
        allowNullNull : true,
        defaultValue :  () => generateId()
    }

});

module.exports = Contact;