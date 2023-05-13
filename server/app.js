const express = require('express');
const database = require('mysql');
const mysql = require('mysql2/promise');
const cors = require('cors');
const config = require('config');
const app = express();
app.use(cors());

// import your products route module
const productsRoute = require('./api/routes/productsRoutes');

// configuration pour le traitement du corps de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// charger les valeurs de configuration
const port = config.get('server.port');
// const dbUrl = config.get('database.url');

// use your products route module
app.use('/products', productsRoute);

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Welcome to My App</title>
        </head>
        <body>
          <h1>Welcome to My App</h1>
          <p>This is the home page of my app.</p>
        </body>
      </html>
    `);
});

  
// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



