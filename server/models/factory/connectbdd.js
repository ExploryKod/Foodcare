const mysql = require('mysql2/promise');

const HOST = process.env.MYSQL_ADDON_HOST
const USER = process.env.MYSQL_ADDON_USER
const PASSWORD = process.env.MYSQL_ADDON_PASSWORD
const DATABASE = process.env.MYSQL_ADDON_DB
const PORT = process.env.MYSQL_ADDON_PORT

class ConnectionFactory {
    constructor(host = HOST, user = USER, password = PASSWORD, database = DATABASE) {
      this.host = host;
      this.user = user;
      this.password = password;
      this.database = database;
    }
  
    async createConnection() {
      const connection = await mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
      });
  
      return connection;
    }
  }

module.exports = {
    ConnectionFactory
};