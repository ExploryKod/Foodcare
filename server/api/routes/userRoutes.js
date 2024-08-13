const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataFilePath = path.join(__dirname, '..', 'data', 'data.json');

router.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data.users);
});

module.exports = router;

