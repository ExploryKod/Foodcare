const { ConnectionFactory } = require('../factory/connectbdd');

const connectionFactory = new ConnectionFactory('db', 'root', 'root', 'foodcare');

async function getAllProducts() {
  const connection = await connectionFactory.createConnection();
  console.log('Database connection successful to get all products!');
  const [dbRows, dbFields] = await connection.execute('SELECT * FROM products');
  connection.end();

  return dbRows;
}

async function getProductsByCategory(category) {
  const connection = await connectionFactory.createConnection();
  console.log('Database connection successful to get products by category!');
  const [dbRows, dbFields] = await connection.execute('SELECT * FROM products WHERE category = ?',[category]);
  connection.end();
  return dbRows;
}

async function insertProduct(productData) {
  const connection = await connectionFactory.createConnection();
  console.log('Database connection successful!');
  
  // Prepare the SQL query
  const query = 'INSERT INTO products (category_id, category, product_name, product_image_url, product_price) VALUES (?, ?, ?, ?, ?)';
  const values = [
    productData.categoryNameId ?? null,
    productData.categoryName ?? null,
    productData.image_name ?? null,
    productData.productImageUrl ?? null,
    productData.productPrice ?? null
  ];

  // Execute the query with the prepared values
  const [result] = await connection.execute(query, values);
  connection.end();

  return {
    id: result.insertId,
    ...productData
  };
}

module.exports = {
  getAllProducts,
  insertProduct,
  getProductsByCategory
};
