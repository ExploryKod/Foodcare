const { ConnectionFactory } = require(`../factories/mysql/connectbdd`);
const { sql } = require(`../factories/neon/connectbdd`);

const connectionFactory = new ConnectionFactory();

async function getAllFoodCategoriesMySQL() {
    const connection = await connectionFactory.createConnection();
    console.log('Database connection successful to get all food categories!');
    const [dbRows, dbFields] = await connection.execute('SELECT * FROM food_categories');
    connection.end();

    return dbRows;
}


async function getAllFoodCategoriesNeon() {
    console.log('Neon connection successful to get all food categories')
    const dbRows = sql`
        select 
        * 
        from food_categories`
    
    return dbRows
 }

async function getAllFoodCategories() {

    switch (process.env.DATABASE_SERVICE) {
        case 'mysql':
            return await getAllFoodCategoriesMySQL();
        case 'mongodb':
            return 'mongodb is not avaible to query food categories yet';
        case 'neon':
            return await getAllFoodCategoriesNeon();
        default:
            throw new Error(`Unsupported database service: ${process.env.DATABASE_SERVICE}`);
    }
}

module.exports = {
    getAllFoodCategories,
};
