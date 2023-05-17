const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs")
const session = require('express-session');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
// const config = require('config');
const app = express();
app.use(cors());
dotenv.config({ path: '../.env'})
// import your products route module
const productsRoute = require('./api/routes/productsRoutes');
const uploadsRoute = require('./api/routes/uploadsRoute');
const authRoutes = require('./api/routes/authRoutes');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// configuration pour le traitement du corps de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));
// charger les valeurs de configuration
// const port = config.get('server.port');
// const dbUrl = config.get('database.url');

const port = process.env.NODE_ENV === 'dockerdev' ? 5000 : 4000;

// use your products route module
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use('/auth', authRoutes);
app.use('/products', productsRoute);
app.use('/uploads', uploadsRoute);

app.get('/welcome', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Welcome page</title>
        </head>
        <body>
          <h1>Welcome dev</h1>
       
        </body>
      </html>
    `);
});

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/register", (req, res) => {
  res.render("register")
})


// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



