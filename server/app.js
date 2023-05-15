const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// const config = require('config');
const app = express();
app.use(cors());

// import your products route module
const productsRoute = require('./api/routes/productsRoutes');
const uploadsRoute = require('./api/routes/uploadsRoute');
// configuration pour le traitement du corps de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// charger les valeurs de configuration
// const port = config.get('server.port');
// const dbUrl = config.get('database.url');

const port = process.env.NODE_ENV === 'dockerdev' ? 5000 : 4000;

// use your products route module
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use('/products', productsRoute);
app.use('/uploads', uploadsRoute);

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Welcome page</title>
        </head>
        <body>
          <h1>Welcome dev</h1>
          <p>This is the home page of my app.</p>
          <a href='./products'>products</a>
          <a href='./uploads'>uploads</a>
        </body>
      </html>
    `);
});
  
// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



