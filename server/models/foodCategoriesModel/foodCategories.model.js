const { ConnectionFactory } = require('../factory/connectbdd');

const connectionFactory = new ConnectionFactory();

async function getAllFoodCategories() {
    const connection = await connectionFactory.createConnection();
    console.log('Database connection successful to get all food categories!');
    const [dbRows, dbFields] = await connection.execute('SELECT * FROM food_categories');
    connection.end();

    return dbRows;
}

module.exports = {
    getAllFoodCategories,
};
