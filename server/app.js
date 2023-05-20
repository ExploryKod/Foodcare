const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs")
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const sass = require('sass');
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

// const result = sass.compile("./static/style/main.scss");
// console.log(result.css);

// const compressed = sass.compile("main.scss", {style: "compressed"});
// console.log(compressed.css);

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
  const toggle = false;
  res.render("login", { toggle })
})

app.get("/register", (req, res) => {
  res.render("register")
})


// Render the EJS template
app.get('/connexion', (req, res) => {
  const toggle = false; // Set the initial value of toggle

  // Render the EJS template with the toggle value
  res.render('connexion', { toggle });
});

// Handle the toggle action
app.post('/toggle', (req, res) => {
  const { toggle } = req.body;

  // Perform any necessary logic here based on the toggle value
  // Update the toggle state as needed

  res.send({ success: true });
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const name = req.body.name; // Get the name entered in the form
    // const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Generate a random uppercase letter (A-Z)
    const randomLetter='B';
    const filename = `${name}_${randomLetter}${path.extname(file.originalname)}`;

     // Check if file with the same name already exists
     if (fs.existsSync(`uploads/${filename}`)) {
      const errorMessage = 'File name already exists';
      return cb(errorMessage);
    }

    cb(null, filename);
  },
});

// Configuration de Multer pour gérer les fichiers téléchargés
const uploadsFiles = multer({ storage });

// Route pour le téléchargement des fichiers
app.post('/upload_files', uploadsFiles.array('files'), (req, res) => {
  // Error handling for file name already exists
  if (req.fileValidationError) {
    const errorMessage = req.fileValidationError;
    return res.status(400).json({ error: errorMessage });
  }
  // Traiter les fichiers téléchargés ici
  console.log(req.files); // Affiche les informations sur les fichiers téléchargés
  res.send('Téléchargement réussi !');
});

// app.post("/upload_files", upload.array("files"), uploadFiles);

// function uploadFiles(req, res) {
//     console.log(req.body);
//     console.log(req.files);
//     res.json({ message: "Successfully uploaded files" });
// }

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  }
});


// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



