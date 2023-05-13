const router = require('express').Router();
const { getProducts, getProductById } = require('../../models/shop');
const { ConnectionFactory } = require('../../models/factory/connectbdd');

const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

(async () => {
    const connection = await connectionFactory.createConnection();
    
    // Use connection1 to execute database queries
      
    // Run queries
    const [rows, fields] = await connection.execute('SELECT * FROM products');
  
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database: ' + err.stack);
            return;
        }
  
        console.log('Connected to database with id ' + connection.threadId);
    });

    connection.end()
  })();

router.get('/', (req, res) => {
    const products = getProducts();
    res.send(products);
});

router.get('/:id', (req, res) => {
    const product = getProductById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ error: 'Product not found' });
    }
});

module.exports = router;



