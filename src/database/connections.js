const Sequelize = require('sequelize');
const mysql2 = require('mysql2');

/*if (options.dialect === 'mysql') {
  options.dialectModule = mysql2;
}

new Sequelize(options)
*/

const configData = {
  host : process.env.HOST,
  port : process.env.PORT_DB,
  dialect: 'mysql',
  dialectModule : mysql2,
  operatorsAliases: false,
  logging: false,//no ver los msj en consola sql
}

if (process.env.NODE_ENV === 'production') {
  configData.dialectOptions = {
    bigNumberStrings: true,
    ssl: { rejectUnauthorized: true },
  };
}

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD, configData);

module.exports = sequelize;