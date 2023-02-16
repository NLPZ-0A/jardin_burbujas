const Sequelize = require('sequelize');
const db = require('../database/connections');
const { v4: uuidv4 } = require('uuid');


const User = db.define('user',{

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

    username : {
        type: Sequelize.STRING,
        allowNull: false
    },

    email : {
        type: Sequelize.STRING,
        allowNull : false
    },

    password :{
        type: Sequelize.STRING,
        allowNull : false
    },

    role :{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue : 'admin'
    }

});

module.exports = User;