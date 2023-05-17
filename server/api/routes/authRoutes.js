const router = require('express').Router();
const express = require('express');
const mysql = require('mysql2/promise');
const { ConnectionFactory } = require('../../models/factory/connectbdd');
const app = express();

const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

router.post('/logged', async (request, response) => {
    try {
      const connection = await connectionFactory.createConnection();
      console.log('Database connection successful!');
      let username = request.body.username;
      let password = request.body.password;
      if (username && password) {
      const [dbRows, dbFields] = await connection.execute('SELECT * FROM user WHERE username = ? AND password = ?', [username,password,]);
         // If the account exists
         if (dbRows.length > 0) {
            // Authenticate the user
            request.session.loggedin = true;
            request.session.username = username;
            // Redirect to home page
            response.redirect('/auth/home');
          } else {
            response.send('Incorrect Username and/or Password!');
          }
      connection.end();
      }
    } catch (error) {
      console.error('Error connecting to database:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
});

router.get('/home', function (request, response) {
    // If the user is logged in
    if (request.session.loggedin) {
      // Output username
      const myname = request.session.username;
      response.render('home', { username: myname });
    } else {
      // Not logged in
      response.send('Connectez-vous pour aller plus loin');
    }
});
  
module.exports = router;
