const router = require('express').Router();
const express = require('express');
const mysql = require('mysql2/promise');
const { ConnectionFactory } = require('../../models/factory/connectbdd');
const app = express();
const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

router.post('/logged', async (request, response) => {
    try {
      const connection = await connectionFactory.createConnection();
      console.log('Login connexion database successful!');
      let username = request.body.username;
      let password = request.body.password;
      console.log('username '+username)
      console.log('mot de passe'+ password)
      if (username && password) {
      const [dbRows, dbFields] = await connection.execute('SELECT * FROM user WHERE username = ? AND password = ?', [username,password,]);
         // If the account exists
         if (dbRows.length > 0) {
            // Authenticate the user
            request.session.loggedin = true;
            request.session.username = username;
            response.send({ message: `Bienvenue ${request.session.username}`,
                            session_username: request.session.username,
                            session_login: request.session.loggedin  });
      
          } else {
            response.send({ message: 'Mot de passe ou pseudo incorrecte' });
          }
      connection.end();
      } else {
        response.send('Il y a eu un probleme');
      }
    } catch (error) {
      console.error('Error connecting to database:', error);
      response.status(500).send({ error: 'Internal server error' });
    }
});

router.post('/register', async (request, response) => {
  try {
    const connection = await connectionFactory.createConnection();
    console.log('register connexion database successful!');
    let username = request.body.username;
    let password = request.body.password;
    let last_name = request.body.lastname;
    let email = request.body.email;
    let phone = request.body.phone;
    let first_name = username;
    let birth_date = null;
    let status = 'utilisateur';
    let creation_date = null;
    
  // Prepare the query
  const query = 'INSERT INTO user (username, first_name, last_name, email, birth_date, password, status,creation_date) VALUES (?,?,?,?,?,?,?,?)';

  // Execute the query with the file data
  connection.query(query, [username, first_name, last_name,email, birth_date, password, status, creation_date], (error, results) => {
    if (error) {
      console.error('Error inserting file into database:', error);
      return response.status(500).send('An error occurred while inserting the file into the database.');
    }

    console.log('registering datas inserted into database successfully');
    response.send({message: `${username}, vous êtes bien enregistré en tant qu' ${status}`});
    connection.end();
  });
   
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

router.get('/session', function (request, response) {
  console.log('SESSION'+request.session.username)
  console.log('S '+request.body)
  // If the user is logged in
  if (request.session) {
    // Output username
    const myname = request.session.username;
    response.send({session: `${myname}`});
  } else {
    // Not logged in
    response.send({session: false});
  }
});
  
module.exports = router;
