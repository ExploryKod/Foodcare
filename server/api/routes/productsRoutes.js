const router = require('express').Router();
const { getProducts, getProductById } = require('../../models/shop');
const { ConnectionFactory } = require('../../models/factory/connectbdd');

const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

router.get('/', async (req, res) => {
    try {
      const connection = await connectionFactory.createConnection();
      console.log('Database connection successful!');
      const [dbRows, dbFields] = await connection.execute('SELECT * FROM products');
      connection.end();
    //   const shopProducts = getProducts();
    //   const allProducts = [...dbRows, ...shopProducts];
      const allProducts = [...dbRows];
      res.send(allProducts);
    } catch (error) {
      console.error('Error connecting to database:', error);
      res.status(500).send({ error: 'Internal server error' });
    }
});
  

// router.get('/', async (req, res) => {
//     try {
//         const connection = await connectionFactory.createConnection();
//         const [rows, fields] = await connection.execute('SELECT * FROM products');
//         connection.end();
//         res.send(rows);
//     } catch (error) {
//         console.error('Error connecting to database:', error);
//         res.status(500).send({ error: 'Internal server error' });
//     }
// });

// router.get('/', (req, res) => {
//     const products = getProducts();
//     res.send(products);
// });

// router.get('/:id', (req, res) => {
//     const product = getProductById(req.params.id);
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ error: 'Product not found' });
//     }
// });

module.exports = router;



