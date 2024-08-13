const router = require('express').Router();
const productModel = require('../../models/foodCategoriesModel/foodCategories.model');

router.get('/', async (req, res) => {
    try {
        const allProducts = await productModel.getAllFoodCategories();
        res.set('Access-Control-Allow-Origin', '*');
        res.send(allProducts);
    } catch (error) {
        console.error('Error retrieving food categories:', error);
        res.status(500).send({ error: 'Internal server error in food categories' });
    }
});

module.exports = router;