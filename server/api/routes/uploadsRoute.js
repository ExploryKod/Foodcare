// server/api/Route/uploads.js
const router = require('express').Router();
const { ConnectionFactory } = require(`../../models/factories/mysql/connectbdd`);
const multer = require('multer');
// const upload = multer({ dest: '../../uploads/' });

const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');



// Specify the destination and filename for uploaded files
const storage = multer.diskStorage({
  destination: '../../uploads/', // Specify the directory where files will be saved
  filename: (req, file, cb) => {
    // Generate a unique filename for each uploaded file
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const originalExtension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${originalExtension}`);
  }
});

// Specify the accepted file formats and maximum file size
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/webp') {
    // Accept the file
    cb(null, true);
  } else {
    // Reject the file
    cb(new Error('Only PNG, JPG, and JPEG, webp file formats are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB maximum file size
  }
});

router.get('/', (req, res) => {
  res.render('uploads', { currentDate: new Date() });
});

router.post('/files', upload.single('file'), (req, res) => {
  
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file was uploaded.'+req.files);
  }

  const file = req.files.file;
  const fileData = file.data;

  // Prepare the query
  const query = 'INSERT INTO food_categories (file_data) VALUES (?)';

  // Execute the query with the file data
  connectionFactory.query(query, [fileData], (error, results) => {
    if (error) {
      console.error('Error inserting file into database:', error);
      return res.status(500).send('An error occurred while inserting the file into the database.');
    }

    console.log('File inserted into database successfully');
    res.send('File uploaded successfully.');
  });
});

module.exports = router;





