const Sequelize = require('sequelize');

//conexion a la base de datos
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD,{
        host : process.env.HOST,
        port : process.env.PORT_DB,
        dialect: 'mysql',
        operatorsAliases: false,
        logging: false,//no ver los msj en consola sql
});

module.exports = sequelize;