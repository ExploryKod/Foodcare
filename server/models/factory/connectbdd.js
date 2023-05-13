const mysql = require('mysql2/promise');

class ConnectionFactory {
    constructor(host = 'db', user = 'root', password = 'root', database = 'foodcare') {
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