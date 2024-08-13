const router = require('express').Router();
const productModel = require('../../models/productsModel/products.model');

router.get('/', async (req, res) => {
  try {
    const allProducts = await productModel.getAllProducts();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(allProducts);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category; // Retrieve the category from the URL parameter
    const ProductsByCategory = await productModel.getProductsByCategory(category);
    res.send(ProductsByCategory);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const productData = req.body;
    console.log('product data is under way', productData)
    const insertedProduct = await productModel.insertProduct(productData);
    res.send(insertedProduct);
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;








