const Sequelize = require('sequelize');
const mysql2 = require('mysql2');

/*if (options.dialect === 'mysql') {
  options.dialectModule = mysql2;
}

new Sequelize(options)
*/

//conexion a la base de datos
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD,{
        host : process.env.HOST,
        port : process.env.PORT_DB,
        dialect: 'mysql',
        dialectModule : mysql2,
        operatorsAliases: false,
        logging: false,//no ver los msj en consola sql
});

module.exports = sequelize;