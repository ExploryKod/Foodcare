const mysql = require('mysql2/promise');

const HOST = process.env.MYSQL_ADDON_HOST
const USER = process.env.MYSQL_ADDON_USER
const PASSWORD = process.env.MYSQL_ADDON_PASSWORD
const DATABASE = process.env.MYSQL_ADDON_DB
const PORT = process.env.MYSQL_ADDON_PORT

console.log('The host', HOST);
class ConnectionFactory {
    constructor(host = HOST, user = USER, password = PASSWORD, database = DATABASE) {
      this.host = host;
      this.user = user;
      this.password = password;
      this.database = database;
    }
  
    async createConnection() {
      try { 
        const connection = await mysql.createConnection({
          host: this.host,
          user: this.user,
          password: this.password,
          database: this.database,
        });
        console.log('Connected to the database!');
        return connection;
      } catch (error) { 
        console.error('Mauvaise connexion à la BDD :', error);
        throw error;  // re-throw the error for the caller to handle
      }   
    }
  }

module.exports = {
    ConnectionFactory
};