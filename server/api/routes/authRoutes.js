const router = require('express').Router();
const { ConnectionFactory } = require(`../../models/factories/mysql/connectbdd`);

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
            response.send({ message: 'Vous êtes bien celui que vous prétendez être',
                            session_username: request.session.username,
                            session_login: request.session.loggedin  });
          } else {
            response.send({ message: 'Mot de passe ou pseudo incorrecte' });
          }
      connection.end();
      } else {
        response.send('Il y a eu un probleme avec le mot de passe ou l\' username');
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
