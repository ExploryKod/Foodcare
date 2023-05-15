// server/api/Route/uploads.js
const router = require('express').Router();
const { ConnectionFactory } = require('../../models/factory/connectbdd');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

router.get('/uploads', (req, res) => {
  res.render('uploads', { currentDate: new Date() });
});

router.post('/uploads', (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file was uploaded.');
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





