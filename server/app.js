const express = require('express');
const cors = require('cors');
const he = require('he');
const multer = require('multer');
const dotenv = require('dotenv')
const bcrypt = require("bcryptjs")
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const sass = require('sass');
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");

dotenv.config({ path: '../.env'})

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
// const config = require('config');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const calculateTotalOrderAmount = (items) => {
  return items[0].amount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateTotalOrderAmount(items),
      currency: "usd",
      description: "This is for GFG Stripe API Demo",
      automatic_payment_methods: {
          enabled: true,
      },
  });

  res.send({
      clientSecret: paymentIntent.client_secret,
  });
});

// todo: delete image from uploads while we delete column from databse (link to image path in bdd image path in uploads)
// todo: pbm avec id quand upload
const uploadsRoute = require('./api/routes/uploadsRoute');
const productsRoute = require('./api/routes/productsRoutes');
const foodCategoriesRoute = require('./api/routes/foodCategoriesRoute');
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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// charger les valeurs de configuration
// const port = config.get('server.port');
// const dbUrl = config.get('database.url');

const port = process.env.NODE_ENV === 'dockerdev' ? 5000 : 4000;

app.set('view engine', 'ejs');
app.use('/auth', authRoutes);

// Count the number of files in the upload folder
const getUploadCount = () => {
  const uploadDir = path.join(__dirname, 'uploads');
  try {
    const files = fs.readdirSync(uploadDir);
    return files.length;
  } catch (err) {
    console.error('Error reading upload folder:', err);
    return 0;
  }
};

// Serve the list of image names from the 'uploads' folder
app.get('/images_names', (req, res) => {
  const uploadDir = path.join(__dirname, 'uploads');

  // Read the files in the uploads directory
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Send the list of image names as the response
    res.json({ images: files });
  });
})

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const categoryName = req.body.category_name;
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    let categoryName = req.body.category_name;
    let image_name = req.body.image_name;
    image_name = image_name.toLowerCase().split(' ').filter(word => word !== '').join('_');
    categoryName = categoryName.toLowerCase()
    image_name = image_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    categoryName = categoryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filename = `${categoryName}_${image_name}.jpeg`;

    if (fs.existsSync(`uploads/${filename}`) || fs.existsSync(`uploads/${categoryName}/${filename}`)) {
      req.fileValidationError = 'Image name already taken';
    }

    cb(null, filename);
  },
});

const uploadsFiles = multer({ storage });

app.post('/upload_files', uploadsFiles.array('files'), (req, res) => {
  if (req.fileValidationError === 'Image name already taken') {
    return res.status(409).json({ error: req.fileValidationError });
  }

  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError });
  }

  // Get the current upload count
  const uploadCount = getUploadCount();

  if (uploadCount >= 40) {
    // Maximum file count reached
    return res.status(403).json({ error: req.fileValidationError });
  }

  dataToSend = req.files;
  res.send(dataToSend);
});

app.get('/download_files', (req, res) => {
  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError });
  }
});

app.use('/category_food', foodCategoriesRoute);
app.use('/products', productsRoute);

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: err.message });
  }
});

// démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});



